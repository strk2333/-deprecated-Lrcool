import { combineReducers } from 'redux'
import { homeReducer } from './Home'
import { webLrcReducer } from './WebLrc'
import { settingReducer } from './Setting'
import { funcReducer } from './Func'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  home: homeReducer,
  setting: settingReducer,
  func: funcReducer,
  webLrc: webLrcReducer,
})

