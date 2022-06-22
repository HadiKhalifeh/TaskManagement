import * as React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import DocumentsScreen from '../../../screens/DocumentsScreen';
import Details from '../../../components/Details';

const Stack = createStackNavigator();

const DocumentsStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="Documents"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Documents" component={DocumentsScreen} />

      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default DocumentsStack;
