import { Text, View, Button, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import actionCreator from '../Reducer/Home'
import { connect } from 'react-redux'
import _ from 'lodash'

export class HomeView extends Component {

  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon name={'home'} size={20} color={tintColor} />,
    // focused horizontal tintColor
    tabBarLabel: 'Home'
  };

  componentDidMount() {
    this.props.getHtmlData('')
  }

  getLrc = (text) => {
    this.props.getLrc(`http://geci.me/api/lyric/${text}`)
  }

  render() {
    const {
      webText,
      test,
    } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon style={styles.searchIcon} name={'search1'} size={25} />
          <TextInput style={styles.searchInput} onSubmitEditing={(e) => this.getLrc(e.nativeEvent.text)}/>
        </View>
        <View style={styles.contentSection}>
          <ScrollView style={styles.contentSV} showsVerticalScrollIndicator={false} >
            <Text selectable={true} style={{color:'#000'}}>{webText}</Text>
            <Text>&#10;&#13;</Text>
          </ScrollView>
          <View style={styles.mButton}>
            <Button onPress={test} title={'Opt'} />
          </View>
        </View>
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
  ...state.home,
  // company: state.app.company,
})
const mapDispatchToProps = dispatchConnector(actionCreator)

const AppConn = connect(mapStateToProps, mapDispatchToProps)(HomeView)
export default AppConn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mButton: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#E6E6FA',
    width: 100,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    height: 35,
    marginTop: 20,
  },
  searchInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',

    height: 35,
    paddingVertical: 0,
    paddingLeft: 40,
    fontSize: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 25, 
    marginTop: 5,
  },
  contentSection: {
    flex: 12,
    // margin: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  contentSV: {
    flex: 1,
    width: 370,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#111',
  }
})