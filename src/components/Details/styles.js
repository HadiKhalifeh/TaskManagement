import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',

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
  textTitle: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSubtitle: {
    color: Colors.white,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '600',
  },
});
