import * as React from "react";
// Global components
import RadioGroup from "../../components/RadioGroup/index";
// Local components
import LaunchList from "./components/LauchList";
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import LaunchesActions from "../../store/Launches/actions";


const Launches = () => {
  const dispatch = useDispatch()
  const [launchType, setLaunchType] = React.useState("pastLaunches");
  const launchState = useSelector((state) => state.launches);
  React.useEffect(() => {
    if (!launchState.upcomingLaunchesList.length) {
      dispatch(LaunchesActions.setPastLaunches([], true));
      dispatch(LaunchesActions.setUpcomingLaunches([], true));
    }
  }, []);

  const radioGroupData = React.useMemo(() => {
    return [{ key: "pastLaunches", title: "Past Launches" }, { key: "upcomingLaunches", title: "Upcoming Launches" }]
  }, [])

  function handleSelectItem(key) {
    setLaunchType(key)
  }

  return <div>
    <RadioGroup data={radioGroupData} onSelect={handleSelectItem} />
    <LaunchList type={launchType} />
  </div>;
};

export default Launches;
