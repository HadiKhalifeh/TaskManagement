import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import Colors from '../../assets/Colors';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
const {width, height} = Dimensions.get('window');
const data1 = [
  {id: 1, name: 'Mechanic', img: 'car'},
  {
    id: 2,
    name: 'Driving licence',
    img: 'drivers-license-o',
  },
  {
    id: 3,
    name: 'Car Registration',
    img: 'card-account-details-star-outline',
  },
];

export default function ServiceScreen() {
  const navigation = useNavigation();
  const [isGuest, setIsGuest] = useState(false);
  const [scrollY] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(scrollY);

  const renderData0 = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={{
          backgroundColor: Colors.primary,
          width: 160,
          height: 115,
          padding: 10,
          margin: 10,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/*  <Image
          style={{width: 38, height: 38}}
          resizeMode="contain"
          source={item.img}
        /> */}
        {index == 1 ? (
          <Icon1 name={item.img} size={40} color={Colors.white} />
        ) : (
          <Icon name={item.img} size={40} color={Colors.white} />
        )}
        <Text
          style={{
            color: Colors.white,
            fontWeight: 'bold',
            fontSize: 14,
            paddingTop: 11,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // flex: 1,
          height: height,
          backgroundColor: Colors.white,
        }}>
        <Text
          style={{
            paddingTop: 31,
            paddingLeft: 25,

            fontSize: 20,
            //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            color: Colors.primary,
          }}>
          Services
        </Text>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 40,
            paddingTop: 37,
            alignSelf: 'center',
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data1}
          renderItem={renderData0}
        />
      </View>
    </Container>
  );
}
