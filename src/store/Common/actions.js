/**
 * @module Actions
 * @desc All actions
 */

// Constants
import * as types from "./constants";

class Actions {
  /**
   * set error modal visibility
   */
  setErrorMessageVisibility(visible) {
    return {
      type: types.SET_ERROR_MSG_VISIBLITY,
      payload: visible,
    };
  }

  /**
   * set error modal message text
   */
  setErrorMessageText(text) {
    return {
      type: types.SET_ERROR_MSG_TEXT,
      payload: text,
    };
  }

  /**
   * set loading status
   */
  setLoading(loading) {
    return {
      type: types.SET_LOADING,
      payload: loading,
    };
  }
}

const Action = new Actions();

export default Action;
