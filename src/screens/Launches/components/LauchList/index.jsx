import * as React from "react";
// Hooks
import { useSelector } from "react-redux";
// Local components
import LaunchViewBox from "../LaunchViewBox/index";
// Global components
import SearchInput from "../../../../components/SearchInput"
// Styles
import styles from "./index.module.scss";

const LaunchList = ({ type }) => {
  const launchState = useSelector((state) => state.launches);
  const [siteNameFilterItem, setSiteNameFilterItem] = React.useState("");
  const [isFiltered, setIsFiltered] = React.useState(false);

  const list = React.useMemo(() => {
    let list
    if (type === "pastLaunches") {
      list = launchState.pastLaunchesList;
    } else {
      list = launchState.upcomingLaunchesList;
    }
    if (isFiltered) {
      return list.filter(item => item.launch_site.site_name?.toLowerCase().includes(siteNameFilterItem))
    } else {
      return list
    }
  }, [type, isFiltered, launchState.pastLaunchesList, launchState.upcomingLaunchesList, siteNameFilterItem]);

  function handleSearch(name) {
    if (!!name.length) {
      setSiteNameFilterItem(name);
      setIsFiltered(true);
    } else {
      setSiteNameFilterItem("");
      setIsFiltered(false);
    }
  }

  return <React.Fragment>
    <SearchInput placeholder={"Search By Site Name"} onChange={handleSearch} />
    <div className={styles["container"]}>
      {list.map((launch, index) => <LaunchViewBox key={index} data={launch} type={type} />)}
    </div>
  </React.Fragment>;
};

export default LaunchList;
