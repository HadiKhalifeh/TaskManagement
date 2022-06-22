import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';
import styles from './styles';

function CustomButton({isPrimary, text, style, onPress, isReverse}) {
  return !isReverse ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.Button,
        {backgroundColor: isPrimary ? Colors.primary : Colors.secondary},
      ]}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.Button,
        {
          backgroundColor: 'white',
          borderColor: Colors.primary,
          borderWidth: 1,
        },
      ]}>
      <Text style={[styles.textButton, {color: Colors.primary}]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
