import React, {useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors';

const {width, height} = Dimensions.get('window');
export default function CustomTextInput({
  type,
  opacity,
  password,
  translateY,
  ...props
}) {
  const [show, setShow] = useState(true);
  console.log(parseInt(opacity), 'opacccco');
  let icon;
  let text;
  switch (type) {
    case 'user':
      icon = require('../../assets/Images/user.png');
      text = 'Full Name';
      break;
    case 'email':
      icon = require('../../assets/Images/email.png');
      text = 'Email Address';
      break;
    case 'phone':
      icon = require('../../assets/Images/phone.png');
      text = 'Phone Number';
      break;
    case 'password':
      icon = require('../../assets/Images/password.png');
      text = 'Password';
      break;
    default:
      break;
  }
  return (
    <Animated.View
      style={[
        styles.rowContainer,
        {
          opacity: opacity,
        },
      ]}>
      <TextInput
        placeholder={text}
        placeholderTextColor={'#00768C'}
        style={styles.input}
        secureTextEntry={!show}
        {...props}
      />
      <Image
        resizeMode="contain"
        style={[
          styles.icon,
          //   {transform: [{translateY: translateY ? translateY : 0}]},
        ]}
        source={icon}
      />
      {password && (
        <Icon
          name={show ? 'ios-eye' : 'ios-eye-off-outline'}
          onPress={() => setShow(!show)}
          size={20}
          style={{color: Colors.primary, position: 'absolute', right: 0}}
        />
      )}
    </Animated.View>
  );
}
