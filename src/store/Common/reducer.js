/**
 * @module Reducer
 * @desc All reducers
 */

// Constants
import * as types from "./constants";

export const initialState = {
  errorVisible: false,
  errorText: "",
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ERROR_MSG_TEXT:
      return { ...state, ...{ errorText: action.payload } };

    case types.SET_ERROR_MSG_VISIBLITY:
      return { ...state, ...{ errorVisible: action.payload } };

    case types.SET_LOADING:
      return { ...state, ...{ loading: action.payload } };

    default:
      return state;
  }
};

export default reducer;
