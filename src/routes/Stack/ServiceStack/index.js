import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../../../screens/AuthScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../../../screens/HomeScreen';
import Details from '../../../components/Details';
import ServiceScreen from '../../../screens/ServiceScreen';
import AddServiceScreen from '../../../screens/ServiceScreen/AddServiceScreen';

const Stack = createStackNavigator();

const ServiceStack = ({navigation, route}) => {
  /* React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Appointement'];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]); */
  return (
    <Stack.Navigator
      initialRouteName="Service"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Service" component={ServiceScreen} />
      <Stack.Screen name="Add" component={AddServiceScreen} />

      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default ServiceStack;
