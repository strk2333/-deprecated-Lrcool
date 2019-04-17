import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  topContent: {
    flex: 1,
  },
  line: {
    width: '25%',
    height: 3,
    backgroundColor: '#191970',
  },
  mainContent: {
    flex: 13,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  titleText: {
    fontSize: 25,
    padding: 5,
    marginLeft: 5,
    color: '#812990',
  },
  itemRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
    // borderWidth: 1,
  },
  item: {
    flex: 1,
    color: 'green',
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 3,
    borderRadius: 3,
  },
  itemText: {
    color: '#fffafa',
    fontSize: 18,
    paddingVertical: 10,
  }
})

export default styles