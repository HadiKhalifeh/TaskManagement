import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import Colors from '../../../assets/Colors';
import CustomButton from '../../../components/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
const data = [{id: 1}];
export default function LoginScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [scrollY] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(scrollY);

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });
  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });
  const [phone, setPhone] = useState('');

  const [birth, setBirth] = useState('');
  const checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  };
  const handleDateOfBirth = value => {
    var input = value;
    let currentYear = new Date().getFullYear();
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 2);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    //  if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], currentYear);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 1 ? v + ' / ' : v;
    });
    value = output.join('').substr(0, 14);
    setBirth(value);
    console.log(birth, 'birthhh');
  };
  const renderItem = ({item}) => {
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <View style={styles.bottomContainer}>
          <CustomTextInput type={'user'} />

          <CustomTextInput type={'email'} />
          <CustomTextInput type={'password'} password />
          <CustomTextInput type={'phone'} />

          <CustomButton
            text={'Log in'}
            isPrimary
            style={{
              marginTop: 55,
              marginBottom: 30,
              width: 300,
              elevation: 4,
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],

          {
            useNativeDriver: true,
          },
        )}
        ListHeaderComponent={
          <Animated.View
            style={[
              {
                backgroundColor: Colors.primary,

                transform: [
                  {
                    translateY: coverTranslateY,
                  },
                ],
              },
            ]}>
            <Animated.Text style={styles.welcomeText}>
              WELCOME{'\n'}BACK!
            </Animated.Text>
          </Animated.View>
        }></Animated.FlatList>
    </View>
  );
}
