import {
  takeLatest,
  put,
  call,
  fork,
} from 'redux-saga/effects';
import { setIndex, setChart } from '../actions/home';
import * as services from '../services/home';
import { HOME_FETCH_INDEX, HOME_FETCH_CHART } from '../constants/home';

/**
 * @export
 * @param { type: String, onSuccess: func, onError: func} action
 */
export function* fetchIndex(action) {
  try {
    // while (true) {
    const result = yield call(services.fetchIndex);
    // console.log(result);
    yield put(setIndex(result.data));
    action.onSuccess();
    // }
  } catch (err) {
    action.onError(err);
  }
}

/**
 * @export
 * @param { type: String, onSuccess: func, onError: func} action
 */
export function* fetchChart(action) {
  try {
    // while (true) {
    const result = yield call(services.fetchChart);
    // console.log(result);
    yield put(setChart(result.data));
    action.onSuccess();
    // }
  } catch (err) {
    action.onError(err);
  }
}

export function* watchFetchHome() {
  yield takeLatest(HOME_FETCH_INDEX, fetchIndex);
  yield takeLatest(HOME_FETCH_CHART, fetchChart);
}

export default function* homePage() {
  yield fork(watchFetchHome);
}
