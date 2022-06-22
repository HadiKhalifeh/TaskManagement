import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Colors from '../../assets/Colors';

import {Image} from 'react-native';
import HistoryStack from '../Stack/HistoryStack';
import ServiceStack from '../Stack/ServiceStack';
import DocumentsStack from '../Stack/DocumentsStack';

const Tab = createBottomTabNavigator();
const {Navigator} = Tab;
const renderTabBarIcon = routeName => {
  return props => {
    const {color, focused} = props;
    let iconName = 'Home';
    switch (routeName) {
      case 'Profile':
        return (
          <Image
            resizeMode="contain"
            style={{width: 22, height: 22}}
            source={
              focused
                ? require(`../../assets/Images/profile-active.png`)
                : require('../../assets/Images/profile.png')
            }
          />
        );

      case 'History':
        return (
          <Image
            resizeMode="contain"
            style={{width: 22, height: 22}}
            source={
              focused
                ? require(`../../assets/Images/document-active.png`)
                : require('../../assets/Images/document.png')
            }
          />
        );

      case 'Service':
        return (
          <Image
            resizeMode="contain"
            style={{width: 22, height: 22}}
            source={
              focused
                ? require(`../../assets/Images/connect-active.png`)
                : require('../../assets/Images/connect.png')
            }
          />
        );
      default:
        break;
    }
  };
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={props => {
        const {
          route: {name: routeName},
        } = props;

        return {
          tabBarIcon: renderTabBarIcon(routeName),

          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
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
            //  zIndex: 8,
          },
        };
      }}>
      <Tab.Screen name="Service" component={ServiceStack} />

      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen name="Profile" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
