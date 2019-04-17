import {applyMiddleware, createStore} from 'redux'
import {reducers} from './Reducer'
import createSagaMiddleware from 'redux-saga'
import allSagas from './Sagas/index'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(allSagas)