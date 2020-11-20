import { combineReducers } from "redux";
// Reducers
import common from "./Common/reducer";
import launches from "./Launches/reducer";

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  launches,
});
export default rootReducer;
