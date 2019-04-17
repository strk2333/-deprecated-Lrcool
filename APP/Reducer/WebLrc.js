import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateData: ['conversations'],
  updateIndexArr: ['lrcIndexArr'],
  updateLrcContent: ['lrcContent'],

  // sagas
  getIndex: ['url'],
  getLrcContent: ['url'],
  changeLrcLang: null,
}, { prefix: 'WebLrc_' })

export const ActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  refresh: false,
  lrcIndexArr: [],
  lrcContent: '',
})

/* ------------- Selectors ------------- */

// const selectState = prop => state => state.Setting[prop]

// export const Selectors = {
//   conversations: selectState('conversations'),
// }

/* ------------- Reducers ------------- */

export const updateData = (state, { conversations }) => ({
  ...state,
  conversations,
  refresh: true,
})

export const updateIndexArr = (state, { lrcIndexArr }) => ({
  ...state,
  lrcIndexArr,
  refresh: true,
})

export const updateLrcContent = (state, { lrcContent }) => ({
  ...state,
  lrcContent,
})

/* ------------- Hookup Reducers To Types ------------- */

export const webLrcReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_DATA]: updateData,
  [Types.UPDATE_INDEX_ARR]: updateIndexArr,
  [Types.UPDATE_LRC_CONTENT]: updateLrcContent,
})
