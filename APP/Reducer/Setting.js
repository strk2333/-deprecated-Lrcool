import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateData: ['conversations'],
  updateBoo: ['boo'],
  updateWebText: ['webText'],
  helloSaga: null,

  action1: null,
  action2: null,
  action3: null,
  incCount: ['newNum'],
}, { prefix: 'Setting_' })

export const ActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  refresh: false,
  boo: '',
  conversations: [{ title: '1. title1', data: 'data01' }, { title: '2. title2', data: 'data02' }],
  inc: 0,
  webText: 'default webText',
})

/* ------------- Selectors ------------- */

const selectState = prop => state => state.Setting[prop]

export const Selectors = {
  conversations: selectState('conversations'),
}

/* ------------- Reducers ------------- */

export const updateData = (state, { conversations }) => ({
  ...state,
  conversations,
  // conversations: _.orderBy(
  //     _.values('1'),
  //     it => +it.data,
  //     'desc',
  // ),
  refresh: true,
})

export const updateBoo = (state, { boo }) => {
  return {
    ...state,
    boo,
    refresh: true,
  }
}

export const updateWebText = (state, { webText }) => {
  return {
    ...state,
    webText,
    refresh: true,
  }
}

export const action1 = (state) => {
  this.props.helloSaga()
  return { ...state }
}

export const action2 = (state) => {
  logger.debug('Action2')
  return { ...state }
}

export const action3 = (state) => {
  logger.debug('Action3')
  return { ...state }
}

export const incCount = (state, { newNum }) => {
  return {
    ...state,
    inc: state.inc + newNum,
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const settingReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_DATA]: updateData,
  [Types.UPDATE_BOO]: updateBoo,
  [Types.UPDATE_WEB_TEXT]: updateWebText,
  [Types.ACTION1]: action1,
  [Types.ACTION2]: action2,
  [Types.ACTION3]: action3,
  [Types.INC_COUNT]: incCount,
})
