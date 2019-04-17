import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
/*global logger*/
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  test: null,
  updateWebText: ['webText'],
  getLrc: ['url'],
  getHtmlData: ['url'],
  getLrcWithJson: ['url'],
}, { prefix: 'HOME_' })

export const ActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  refresh: false,
  webText: 'default webText',
})

/* ------------- Selectors ------------- */

const selectState = prop => state => state.Home[prop]

export const Selectors = {
  conversations: selectState('conversations'),
}

/* ------------- Reducers ------------- */

export const updateWebText = (state, data) => {
  if (!data['type'] || !data['type'] === 'HOME_UPDATE_WEB_TEXT')
    return {
      ...state,
      webText: data
    }
  
  return {
    ...state,
    webText: data['webText'],
  }
}

export const test = (state) => {
  alert('别碰它！')
  return {
    ...state,
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_WEB_TEXT]: updateWebText,
  [Types.TEST]: test,
})
