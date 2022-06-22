import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';

export default function Cards({title, subtitle, id, onPress}) {
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
          //   //fontFamily: 'HelveticaRegular',
          fontWeight: 'bold',
          color: Colors.white,
          paddingTop: 14,
        }}>
        {title} {id}
      </Text>
      <Text
        style={{
          //fontFamily: 'HelveticaRegular',
          paddingTop: 9,
          color: Colors.white,
        }}>
        {subtitle}
      </Text>
      <TouchableOpacity
        onPress={onPress}
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
}
