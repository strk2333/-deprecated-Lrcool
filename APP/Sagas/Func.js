import { put, call, takeEvery, delay, all, takeLeading } from 'redux-saga/effects'
import ActionCreator, { ActionTypes } from '../Reducer/Func'

export function helloSaga() {

}

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield delay(1000)
  yield put(ActionCreator.action1)
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery(ActionCreator.action3, incrementAsync)
}

export default [
  takeLeading(ActionTypes.HELLO_SAGA, helloSaga),
]