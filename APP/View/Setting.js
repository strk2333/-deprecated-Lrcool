import { Text } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

export default class SettingView extends Component {

    static navigationOptions = {
      title: 'SettingView',
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        <Icon name={'setting'} size={20} color={tintColor} />,
      tabBarLabel: 'Setting'
    }

    render() {
      return <Text>Setting</Text>
    }
}