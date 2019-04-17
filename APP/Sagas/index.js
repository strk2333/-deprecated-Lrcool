import {all} from 'redux-saga/effects'

export default function *allSagas() {
  yield all([
    ...require('./Func').default,
    ...require('./Home').default,
    ...require('./Setting').default,
    ...require('./WebLrc').default,
  ])
}