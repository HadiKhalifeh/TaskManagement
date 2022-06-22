import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../../../screens/AuthScreen';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import HomeScreen from '../../../screens/HomeScreen';
import Details from '../../../components/Details';
import HistoryScreen from '../../../screens/HistoryScreen';
import Colors from '../../../assets/Colors';

const Stack = createStackNavigator();

const HistoryStack = ({navigation, route}) => {
  // const currentNavigation = getCurrentRoute(this.props.navigation.state);
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Details'];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          backgroundColor: Colors.border,
          //  position: 'absolute',
          zIndex: 8,
          borderColor: Colors.border,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: Colors.border,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          padding: 10,

          height: 72,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
