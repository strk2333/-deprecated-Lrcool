import { put, call, takeEvery, delay, all, takeLeading } from 'redux-saga/effects'
import ActionCreator, { ActionTypes } from '../Reducer/Setting'

export function helloSaga() {

}

export default [
  takeLeading(ActionTypes.HELLO_SAGA, helloSaga),
]