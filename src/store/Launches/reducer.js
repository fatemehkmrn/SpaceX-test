/**
 * @module Reducer
 * @desc All reducers
 */

// Constants
import * as types from "./constants";

export const initialState = {
  upcomingLaunchesList: [],
  pastLaunchesList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PAST_LAUNCHES:
      return { ...state, ...{ pastLaunchesList: action.payload } };

    case types.SET_UPCOMING_LAUNCHES:
      return { ...state, ...{ upcomingLaunchesList: action.payload } };

    default:
      return state;
  }
};

export default reducer;
