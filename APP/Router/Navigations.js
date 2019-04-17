// import _ from 'lodash'
// import { createStackNavigator } from 'react-navigation'

// const appNav = {
//   Home: {
//     screen: require('./ReduxRoot').default,
//     option: { header: null },
//   },
//   Tab01: {
//     screen: require('../Container/MyTabs').Tab01,
//     title: 'TAB01',
//   },
// }

// const navMap = nav => ({
//   screen: nav.screen,
//   navigationOptions: ({ navigation }) => ({
//     title: navigation.getParam('title') || nav.title || '',
//     headerTintColor: Colors.black,
//     ...(nav.option || {}),
//   }),
// })

// export const AppNavigation = createStackNavigator(
//   _.mapValues(appNav, navMap),
//   {
//     headerLayoutPreset: 'center',
//     initialRouteName: 'AuthLoading',
//     headerBackTitleVisible: false,
//   },
// )
