import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'space-around',
  },
  mainSection: {
    flex: 12,
  },
  indexList: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  rowTab: {
    flex: 3,
    padding: 5,
  },
  iconTab: {
    flex: 1,
    padding: 7,
  },
  tabButton: {
    color: 'white',
  },
  listItem: {
    height: 50,
    backgroundColor: '#292929',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
  },
  listItemText: {
    color: '#fffafa',
    fontSize: 18,
    marginLeft: 20,
  },
})

export default styles