import { put, takeEvery, all } from "redux-saga/effects";

const delay = ms => new Promise( res => setTimeout(res, ms) );

export function * helloSaga() {
  console.log('Hello Sagas !');
}

// saga worker 
export function * increamentAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// saga watcher 
export function * watchIncremenetAsync() {
  yield takeEvery('INCREMENT_ASYNC', increamentAsync);
}

// export all saga 
export default function * rootSaga() {
  yield all([
    helloSaga(),
    watchIncremenetAsync()
  ])
}


