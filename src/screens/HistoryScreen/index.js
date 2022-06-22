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
import Cards from '../../components/Cards';
import Container from '../../components/Container';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const data1 = [
  {id: 1, date: '2021/07/14', np: 11},
  {id: 2, date: '2021/07/14', np: 12},
  {id: 3, date: '2021/07/14', np: 13},
];
const data0 = [
  {
    id: 1,
    text: 'Document details texts goes here. Document details texts goes here Document details texts goes here Document details texts goes here',
  },
  {
    id: 2,
    text: 'Document details texts goes here. Document details texts goes here Document details texts goes here Document details texts goes here',
  },
];
export default function HistoryScreen() {
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
          height: 140,
          padding: 10,
          margin: 10,
          borderRadius: 20,
        }}>
        <Text
          style={{
            //fontFamily: 'HelveticaRegular',
            fontSize: 15,
            color: Colors.white,
            fontWeight: 'bold',
          }}>
          Date:{item.date}
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
              fontSize: 15,
              color: Colors.white,
              fontWeight: 'bold',
            }}>
            View More
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderAnnouncements = ({item}) => {
    return (
      <Cards
        title={'Announcements'}
        onPress={() => navigation.navigate('Details')}
        subtitle={item.text}
        id={item.id}
      />
    );
  };
  return (
    <Container style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          //  flex: 1,
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
          {isGuest ? 'Announcements' : 'History'}
        </Text>

        <FlatList
          contentContainerStyle={{paddingBottom: 190, paddingTop: 37}}
          data={isGuest ? data0 : data1}
          showsVerticalScrollIndicator={false}
          renderItem={isGuest ? renderAnnouncements : renderData0}
        />
      </View>
    </Container>
  );
}
