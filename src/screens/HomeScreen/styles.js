import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  mainContainer: {
    //  flex: 1,
    height: height,
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

    fontFamily: 'HelveticaNeue-Bold',
  },
  loginText: {
    color: Colors.white,
    fontFamily: 'HelveticaNeue-Regular',
    textAlign: 'center',
  },
  bottomContainer: {
    padding: 25,
    paddingBottom: 35,
    marginTop: 62,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: Colors.secondary,
  },
});
