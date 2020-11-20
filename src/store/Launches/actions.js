/**
 * @module Actions
 * @desc All actions
 */

// Constants
import * as types from "./constants";

class Actions {
  /**
   * set all upcoming launches
   */
  setUpcomingLaunches(list, saga) {
    return {
      type: saga
        ? types.SAGAS_SET_UPCOMING_LAUNCHES
        : types.SET_UPCOMING_LAUNCHES,
      payload: list,
    };
  }

  /**
   * set all past launches
   */
  setPastLaunches(list, saga) {
    return {
      type: saga ? types.SAGAS_SET_PAST_LAUNCHES : types.SET_PAST_LAUNCHES,
      payload: list,
    };
  }
}

const CommonActions = new Actions();

export default CommonActions;
