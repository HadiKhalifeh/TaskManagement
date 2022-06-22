import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';

import styles from './styles';

export default function AuthScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <View style={styles.bottomContainer}>
        {/*    <Text style={styles.loginText}>
          Login to access your profile, check {'\n'}your points and receive
          notifications
        </Text> */}
        <CustomButton
          text={'Log in'}
          isPrimary
          style={{marginTop: 60, marginBottom: 25, width: 300}}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}
