import { call, delay, fork, put, select, takeLatest } from 'redux-saga/effects';

import { addSpinnerSaga, TypeAction } from '../redux-type-saga';
import { fromJS } from 'immutable';
import { initApplicationAction } from '../action/app-action';

export function* sgTest() {
  try {
    // yield put(initApplicationAction());
    console.log('test 1');
  } catch (error) {}
}

function* listener() {
  yield takeLatest(initApplicationAction.type, addSpinnerSaga(sgTest));
}

function* worker() {
  //
}
export default function* appSaga() {
  yield fork(listener);
  yield fork(worker);
}
