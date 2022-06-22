import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  welcomeText: {
    marginTop: 140,
    paddingLeft: 22,
    color: Colors.primary,
    fontSize: 53,

    fontFamily: 'HelveticaNeue-Bold',
  },
  loginText: {
    color: Colors.white,
    // fontFamily: 'HelveticaNeue-Regular',
    textAlign: 'center',
    fontSize: 17,
  },
  bottomContainer: {
    padding: 25,
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',

    backgroundColor: Colors.secondary,
  },
});
