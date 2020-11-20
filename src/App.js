import * as React from "react";
import "./App.css";
// Screens
import Launches from "./screens/Launches";
// Global components
import Modal from "./components/Modal";
import Loading from "./components/Loading";
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import CommonActions from "./store/Common/actions";

function App() {
  const dispatch = useDispatch();
  const commonState = useSelector((state) => state.common);
  console.log("common", commonState.error);
  const isModalVisible = React.useMemo(() => commonState.error.visible, [
    commonState.error,
  ]);

  function handleHideModal() {
    dispatch(CommonActions.setErrorMessageVisibility(false));
  }
  console.log("loading", commonState.loading);
  return (
    <React.Fragment>
      <Loading visible={commonState.loading} />
      <div className="App">
        <Modal
          visible={isModalVisible}
          text={commonState.error.text}
          onOkClicked={handleHideModal}
        />
        <Launches />
      </div>
    </React.Fragment>
  );
}

export default App;
