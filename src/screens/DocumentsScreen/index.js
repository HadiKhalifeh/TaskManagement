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
import styles from './styles';
const {width, height} = Dimensions.get('window');

const data1 = [
  {
    id: 1,
    text: 'Document details texts goes here. Document details texts goes here Document details texts goes here Document details texts goes here',
  },
  {
    id: 2,
    text: 'Document details texts goes here. Document details texts goes here Document details texts goes here Document details texts goes here',
  },
];

export default function DocumentsScreen() {
  const navigation = useNavigation();
  const [isGuest, setIsGuest] = useState(false);
  const [scrollY] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(scrollY);

  const renderData0 = ({index, item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          width: 330,
          height: 178,
          padding: 10,
          margin: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}>
        <Text
          style={{
            //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            color: Colors.white,
            paddingTop: 14,
          }}>
          Document {item.id}
        </Text>
        <Text
          style={{
            //fontFamily: 'HelveticaRegular',
            paddingTop: 9,
            color: Colors.white,
          }}>
          {item.text}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={{
            width: 141,
            height: 43,
            backgroundColor: Colors.secondary,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              //fontFamily: 'HelveticaRegular',
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            View More
          </Text>
        </TouchableOpacity>
      </View>
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
          alignItems: 'center',
          backgroundColor: Colors.white,
        }}>
        <Text
          style={{
            paddingTop: 31,
            paddingLeft: 25,

            fontSize: 20,
            //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            color: Colors.primary,
          }}>
          Documents
        </Text>

        <FlatList
          contentContainerStyle={{paddingBottom: 40, paddingTop: 37}}
          data={data1}
          showsVerticalScrollIndicator={false}
          renderItem={renderData0}
        />
      </View>
    </Container>
  );
}
