import { createAppContainer } from 'react-navigation'
import { ReduxNavigation } from './ReduxNavigation'
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers'
import connect from 'react-redux/es/connect/connect'

export const rootMiddleware = createReactNavigationReduxMiddleware(
  state => state.root,
  'root',
)

const ReduxRoot = createReduxContainer(createAppContainer(ReduxNavigation), 'root')

export default connect(
  state => ({ state: state.root })
)(ReduxRoot)