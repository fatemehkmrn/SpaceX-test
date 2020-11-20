import { all, fork } from "redux-saga/effects";
// Sagas entities
import Sagas from "./Launches/saga";

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */
export default function* root() {
  return yield all([fork(Sagas)]);
}
