import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  welcomeText: {
    marginTop: 140,
    paddingLeft: 22,
    color: Colors.primary,
    fontSize: 40,
    fontWeight: '800',
    //fontFamily: 'HelveticaRegular',
  },
  loginText: {
    color: Colors.white,
    //fontFamily: 'HelveticaRegular',
    textAlign: 'center',
  },
  bottomContainer: {
    padding: 25,
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: Colors.secondary,
  },
});
