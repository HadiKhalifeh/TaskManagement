import * as React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Loading from '../../../screens/LoadingScreen';
import AuthScreen from '../../../screens/AuthScreen';
import LoginScreen from '../../../screens/AuthScreen/LoginScreen';
import onBoarding from '../../../screens/AuthScreen/onBoarding';

const Stack = createStackNavigator();

const AuthStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={onBoarding} />

      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
