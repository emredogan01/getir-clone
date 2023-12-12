import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function index() {
  return (
    <View style={styles.headerMain}>
      <StatusBar backgroundColor={'#5d3ebd'} />
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />
        <View style={styles.headerOneView}>
          <Text style={{fontWeight: '600', fontSize: 16}}>Ev</Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 11.5,
              color: '#6e7480',
              marginLeft: 6,
              marginRight: 1,
            }}>
            Alsancak Blv. Yenişehir Mahallesi...
          </Text>
          <Icon name="angle-right" size={22} color="#5d3ebd" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{fontSize: 10, fontWeight: 'bold', color: '#5d3ebd'}}>
            TVS
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontWeight: 'bold',
              color: '#5d3ebd',
            }}>
            13<Text style={{fontSize: 16, color: '#5d3ebd'}}>dk</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
