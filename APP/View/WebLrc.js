import { Text, View, Button, StyleSheet, ScrollView, TextInput, FlatList, TouchableOpacity,
  requireNativeComponent } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import actionCreator from '../Reducer/WebLrc'
import { connect } from 'react-redux'
import _ from 'lodash'
import gStyles from './Style/GeneralStyle'
import uuid from 'uuid/v1'
import styles from './Style/WebLrcStyle'
/*global logger*/

// const AppRefresh = requireNativeComponent('AppRefreshLayout')

export class WebLrcView extends Component {
    static navigationOptions = {
      title: 'WebLrcView',
      tabBarIcon: ({ tintColor }) =>
        <Icon name={'appstore1'} size={20} color={tintColor} />,
      tabBarLabel: 'WebLrc'
    }

    componentDidMount() {
      // if (this.props.lrcIndexArr.length === 0) {
      //   this.props.getIndex('http://stage48.net/studio48/lyricsindex.html')
      // }
    }

    _renderTopContent = () => {
      return (
        <View style={gStyles.topContent}>
        </View>
      )
    }

    _renderLinkContent = (data) => {
      const linkData = {
        lrcUrl: 'http://stage48.net/studio48/' + data.item,
      }
      const text = data.item.replace('.html', '')
      
      return (
        <TouchableOpacity 
          style={styles.listItem} 
          activeOpacity={0.9}
          onPress={() => this.props.navigation.navigate('Lrc', linkData)}>
          <Text style={styles.listItemText}>{text}</Text>
        </TouchableOpacity>
      )
    }

    _renderMainContent = () => {
      let key = 0
      const {
        lrcIndexArr,
        navigation,
      } = this.props
      return (
        <View style={styles.mainContent}>
          <View style={styles.topSection}>
            <View style={styles.iconTab}>
              <Icon name='left' size={30} onPress={() => navigation.navigate('FuncRoot')} />
            </View>
            <View style={styles.rowTab}>
              <Button style={styles.tabButton} color='pink' title='AKB48' onPress={() => this.props.getIndex('http://stage48.net/studio48/singles_akb48.html')} />
            </View>
            <View style={styles.rowTab}>
              <Button style={styles.tabButton} color='#812990' title='Nogizaka' onPress={() => this.props.getIndex('http://stage48.net/studio48/singles_nogizaka46.html')} />
            </View>
            <View style={styles.rowTab}>
              <Button style={styles.tabButton} color='#61B859' title='Keyaki' onPress={() => this.props.getIndex('http://stage48.net/studio48/singles_keyakizaka46.html')} />
            </View>
            <View style={styles.iconTab}>
              <Icon name='setting' size={30} onPress={() => navigation.navigate('Filter')} />
            </View>
          </View>
          <View style={styles.mainSection}>
            <FlatList
              style={styles.indexList}
              renderItem={this._renderLinkContent}
              keyExtractor={() => (key++).toString()}
              data={lrcIndexArr}
              keyboardDismissMode='on-drag'
            // refreshControl={
            //   <AppRefresh
            //     // onRefresh={loadMoreMessages}
            //     // refreshing={moreLoading}
            //   />
            // }
            />
          </View>
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

const AppConn = connect(mapStateToProps, mapDispatchToProps)(WebLrcView)
export default AppConn