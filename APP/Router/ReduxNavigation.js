import { BackHandler, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { AppNavigation } from './Navigations'

export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'nav',
)

const Wrapper = ({
  navigator,
  key,
}) => class extends createReduxContainer(navigator, key) {
  componentWillMount() {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, state } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (state.routes.length === 1) {
        return false
      }
      const latestRoute = state.routes[state.routes.length - 1]
      dispatch(NavigationActions.back({ key: latestRoute.key }))
      return true
    })
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }
}

export const ReduxNavigation = connect(
  state => ({ state: state.nav })
)(Wrapper({
  navigator: AppNavigation,
  key: 'nav',
}))