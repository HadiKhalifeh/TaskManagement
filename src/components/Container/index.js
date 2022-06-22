import * as React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/Colors';

function Container({children}) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.primary,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          //     justifyContent: 'space-between',
        }}>
        {/* <TouchableOpacity>
          <Image
            style={{width: 36, height: 36}}
            source={require('../../assets/Images/menu.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 20, height: 20, left: 80, top: 15}}
            source={require('../../assets/Images/notification.png')}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            width: 43,
            height: 43,
            backgroundColor: Colors.white,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: 16, color: Colors.primary}}>
            MF
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
}

export default Container;
