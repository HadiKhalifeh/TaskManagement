import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

export default StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 33,
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1.3,
    width: 310,
    flexDirection: 'row',
    paddingLeft: 30,
    color: Colors.primary,
    fontFamily: 'Lato-Regular',
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
  },
});
