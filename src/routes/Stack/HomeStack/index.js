import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../../../screens/AuthScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../../../screens/HomeScreen';
import Details from '../../../components/Details';

const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  /*   React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Appointement'];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]); */
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
