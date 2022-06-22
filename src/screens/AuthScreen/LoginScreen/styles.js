import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../assets/Colors';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  welcomeText: {
    paddingLeft: 22,
    paddingTop: 100,
    paddingBottom: 105,
    color: Colors.white,
    fontSize: 40,

    fontFamily: 'HelveticaNeue-Bold',
  },
  loginText: {
    color: Colors.white,
    fontFamily: 'HelveticaNeue-Regular',
    textAlign: 'center',
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,

    backgroundColor: Colors.secondary,
  },
  rowContainer: {
    flexDirection: 'row',
    bottom: 18,
    marginTop: 57,
  },
  // icon: {marginTop: 10, paddingRight: 20},
  input: {
    color: 'white',
    paddingLeft: 10,
    alignItems: 'center',
  },
  checkIcon: {
    paddingRight: 0,
    position: 'absolute',
    right: 0,
  },
  lineSeperator: {
    height: 1,
    width: 295,

    borderBottomWidth: 1,
  },
});
