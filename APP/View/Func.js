import { Text, View, Button, StyleSheet, ScrollView, TextInput, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import actionCreator from '../Reducer/Func'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Style/FuncStyle'
import gStyles from './Style/GeneralStyle'

export class FuncView extends Component {
    static navigationOptions = {
      title: 'FuncView',
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        <Icon name={'appstore1'} size={20} color={tintColor} />,
      tabBarLabel: 'Func'
    }

    _renderTopContent = () => {
      return (
        <View style={styles.topContent}>
          <Text style={styles.titleText}>Preset Functions</Text>
          <View style={styles.line} />
        </View>
      )
    }

    _renderIndexButton = () => {
      return (
        <TouchableOpacity style={styles.item}
          activeOpacity={0.9}
          onPress={() => { this.props.navigation.navigate('WebLrc') }}>
          <Text style={styles.itemText}>Idol&nbsp;Group</Text>
        </TouchableOpacity>)
    }

    _renderMainContent = () => {
      return (
        <View style={styles.mainContent}>
          <View style={styles.itemRow}>
            {this._renderIndexButton()}
            {this._renderIndexButton()}
          </View>
          <View style={styles.itemRow}>
            {this._renderIndexButton()}
            {this._renderIndexButton()}
          </View>
        </View>
      )
    }

    render () {
      return (
        <View style={gStyles.flexOne}>
          {this._renderTopContent()}
          {this._renderMainContent()}
        </View>
      )
    }
} 

const dispatchConnector =
  actionCreators =>
    dispatch =>
      _.mapValues(
        actionCreators,
        actionCreator => (...args) => dispatch(actionCreator(...args)),
      )
      
const mapStateToProps = state => ({
  ...state.func,
  // company: state.app.company,
})
const mapDispatchToProps = dispatchConnector(actionCreator)

const AppConn = connect(mapStateToProps, mapDispatchToProps)(FuncView)
export default AppConn