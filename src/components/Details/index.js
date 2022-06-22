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
} from 'react-native';
import Colors from '../../assets/Colors';
import Container from '../Container';
import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const rows = [
    {id: 1, title: 'Date', subtitle: '28 December 2021'},
    {id: 2, title: 'Doctor', subtitle: 'Tony Neematallah'},
    {
      id: 3,
      title: 'Appointement Details',
      subtitle:
        'What she did in this visit. What she did in this visit What she did in this visit What she did in this visit.',
    },
    {
      id: 4,
      title: 'Item',
      subtitle: 'Filler 304 - Botox 04',
    },
    {
      id: 5,
      title: 'Quantity',
      subtitle: '2 Tubes Filler - 1Tube Botox',
    },
  ];

  const renderItem = ({index, item}) => {
    return (
      <View style={{paddingTop: 18, paddingLeft: 22}}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textSubtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <Container style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={styles.mainContainer}>
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 130,
            backgroundColor: Colors.white,
          }}>
          <Text
            style={{
              paddingTop: 57,
              paddingLeft: 22,
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.primary,
            }}>
            {'Visit No:04'}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            style={{paddingTop: 50}}
            data={rows}
            contentContainerStyle={{paddingBottom: 200}}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
}
