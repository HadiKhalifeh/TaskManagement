import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

export default function Loading() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 2000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="center"
        source={require('../../assets/Images/logo.png')}
      />
    </View>
  );
}
