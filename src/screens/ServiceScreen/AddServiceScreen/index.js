import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Colors from '../../../assets/Colors';
import Container from '../../../components/Container';
export default function AddServiceScreen() {
  return (
    <Container style={{flex: 1, backgroundColor: Colors.white}}>
      <TextInput
        placeholder="Full Name"
        style={{
          backgroundColor: 'white',
          width: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <TextInput
        placeholder="Details...."
        style={{
          backgroundColor: 'white',
          width: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <TextInput
        placeholder="Attach"
        style={{
          backgroundColor: 'white',
          width: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
    </Container>
  );
}
