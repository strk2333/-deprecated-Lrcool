import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import HomeView from '../View/Home'
import SettingView from '../View/Setting'
import FuncView from '../View/Func'
import WebLrcView from '../View/WebLrc'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
import LrcView from '../View/Lrc'

const nav = createAppContainer(createBottomTabNavigator(
  {
    Home : HomeView,
    Func: createStackNavigator({
      FuncRoot: FuncView,
      WebLrc: WebLrcView,
      Lrc: LrcView,
    }, {
      navigationOptions: {
        name: 'Func',
        tabBarIcon: ({ tintColor }) => <Icon name={'appstore1'} size={20} color={tintColor} />,
      },
      defaultNavigationOptions: {
        header: null,
      }
    }),
    Setting : SettingView,
  },
  {
    initialRouteName: 'Func',
    navigationOptions: {

    },
    tabBarOptions: {
      activeTintColor: 'purple',
    },
    defaultNavigationOptions: {
      header: null,
    }
  }
))

export default nav