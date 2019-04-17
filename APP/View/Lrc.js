import { Text, View, Button, StyleSheet, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import actionCreator from '../Reducer/WebLrc'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Style/LrcStyle'
import gStyles from './Style/GeneralStyle'

export class LrcView extends Component {
    static navigationOptions = {
      title: 'LrcView',
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        <Icon name={'appstore1'} size={20} color={tintColor} />,
      tabBarLabel: 'Lrc'
    }

    componentDidMount() {
      this.props.getLrcContent(this.props.navigation.getParam('lrcUrl', ''))
    }

    _renderTopContent = () => {
      return (
        <View style={styles.topContent}>
        </View>
      )
    }

    _renderMainContent = () => {
      const {
        lrcContent
      } = this.props
      return (
        <View style={gStyles.flexOne}>
          <Icon name='left' size={40} onPress={() => this.props.navigation.goBack()} />
          <Button color={'black'} title='Translate' onPress={this.props.changeLrcLang}/>
          <ScrollView style={styles.lrcView} contentContainerStyle={gStyles.flexOne} showsVerticalScrollIndicator={false} >
            <Text style={[gStyles.flexOne, {color: '#000', fontSize: 17}]} selectable={true}>{lrcContent}</Text>
          </ScrollView>
        </View>
      )
    }

    render () {
      return (
        <View style={gStyles.flexOne}>
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
  ...state.webLrc,
  // company: state.app.company,
})
const mapDispatchToProps = dispatchConnector(actionCreator)

const AppConn = connect(mapStateToProps, mapDispatchToProps)(LrcView)
export default AppConn