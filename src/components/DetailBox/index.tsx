import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type DetailBoxPropsType = {
  readonly name: string;
  readonly price: number;
  readonly guantity: string;
};

export default function index({name, price, quantity}: DetailBoxPropsType) {
  return (
    <View
      style={{width: '100%', backgroundColor: 'white', alignItems: 'center'}}>
      <Text
        style={{
          color: '#5d3ebd',
          fontSize: 21,
          fontWeight: 'bold',
          marginTop: 12,
        }}>
        {price}
        <Text>{'\u20ba'}</Text>
      </Text>
      <Text style={{fontWeight: '600', fontSize: 16, marginTop: 12}}>
        {name}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontWeight: '600',
          marginTop: 9,
          paddingBottom: 19,
        }}>
        {quantity}
      </Text>
    </View>
  );
}
