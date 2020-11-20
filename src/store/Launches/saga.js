/**
 * @module Sagas
 * @desc All  sagas
 */
import { all, call, takeLatest, put } from "redux-saga/effects";
// Constants
import * as types from "./constants";
//Actions
import LaunchesActions from "./actions";
import CommonActions from "../Common/actions";
// Utilities
import axios from "axios";

function fetchUpcomingLaunchesFromApi() {
  return axios.get(`https://api.spacexdata.com/v3/launches/upcoming`);
}

function fetchPastLaunchesFromApi() {
  return axios.get(`https://api.spacexdata.com/v3/launches/past`);
}

function* fetchPast() {
  try {
    yield put(CommonActions.setLoading(true));
    const pastLaunchesResult = yield call(fetchPastLaunchesFromApi);
    if (pastLaunchesResult && pastLaunchesResult.status === 200) {
      yield put(
        LaunchesActions.setPastLaunches(pastLaunchesResult.data, false)
      );
    } else {
      yield put(CommonActions.setErrorMessageVisibility(true));
      yield put(CommonActions.setErrorMessageText("An error occured!"));
    }
    yield put(CommonActions.setLoading(false));
  } catch (e) {
    yield put(CommonActions.setLoading(false));
    console.log("function* fetchPast() --> ", e);
  }
}

function* fetchUpcoming() {
  try {
    yield put(CommonActions.setLoading(true));
    const upcomingLaunchResult = yield call(fetchUpcomingLaunchesFromApi);
    if (upcomingLaunchResult && upcomingLaunchResult.status === 200) {
      yield put(
        LaunchesActions.setUpcomingLaunches(upcomingLaunchResult.data, false)
      );
    } else {
      yield put(CommonActions.setErrorMessageVisibility(true));
      yield put(CommonActions.setErrorMessageText("An error occured!"));
    }
    yield put(CommonActions.setLoading(false));
  } catch (e) {
    yield put(CommonActions.setLoading(false));
    console.log("function* fetchUpcoming() --> ", e);
  }
}

export default function* networkListeners() {
  yield all([
    takeLatest(types.SAGAS_SET_PAST_LAUNCHES, fetchPast),
    takeLatest(types.SAGAS_SET_UPCOMING_LAUNCHES, fetchUpcoming),
  ]);
}
