import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateData: ['conversations'],

  // sagas
  helloSaga: null,
}, { prefix: 'Func_' })

export const ActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  refresh: false,
})

/* ------------- Selectors ------------- */

// const selectState = prop => state => state.func[prop]

// export const Selectors = {
//   conversations: selectState('conversations'),
// }

/* ------------- Reducers ------------- */

export const updateData = (state, { conversations }) => ({
  ...state,
  conversations,
  refresh: true,
})

/* ------------- Hookup Reducers To Types ------------- */

export const funcReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_DATA]: updateData,
})
