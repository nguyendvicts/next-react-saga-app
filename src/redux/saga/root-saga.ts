import { fork, take, cancel, select, cancelled } from 'redux-saga/effects';
import appSaga from './app-saga';

export default function* rootSaga() {
  try {
    console.log('start root-saga');
    // fork app-saga, auth-saga, etc..
    yield fork(appSaga);
  } catch (error) {
    // Handle error
  }
}
