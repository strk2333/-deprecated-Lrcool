import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'space-around',
  },
  mainSection: {
    flex: 12,
  },
  lrcView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
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