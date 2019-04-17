import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DebugConfig from './Config/DebugConfig'
import './Config/ReactotronConfig'
import Nav from './Router/Navigators'
import { store } from './store'

type Props = {};

class AppIndex extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

export default DebugConfig.useReactotron
  // eslint-disable-next-line no-undef
  ? logger.overlay(AppIndex)
  : AppIndex

// export default AppIndex