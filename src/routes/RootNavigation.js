import 'react-native-gesture-handler';
import * as React from 'react';

import {StatusBar, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Colors from '../assets/Colors';
import TabNavigation from './TabNavigation';
import AuthStack from './Stack/AuthStack';
import {SafeAreaView} from 'react-native-safe-area-context';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const flex = 1;
  const rootContainerBackgroundColor = Colors.secondary;
  const MyTheme = {
    colors: {
      primary: Colors.border,
      card: Colors.border,
      border: Colors.border,
      colors: Colors.border,
    },
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />

      <RootStack.Navigator>
        {false ? (
          <RootStack.Screen
            name="Main"
            options={{headerShown: false}}
            component={TabNavigation}
          />
        ) : (
          <RootStack.Screen
            options={{
              headerTransparent: true,
              headerStatusBarHeight: 0,
              headerShown: false,
              title: '',
              headerBackTitleVisible: false,
              cardOverlayEnabled: true,
            }}
            name="ha"
            component={AuthStack}
          />
        )}
        <RootStack.Screen
          name="Main"
          options={{headerShown: false}}
          component={TabNavigation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
