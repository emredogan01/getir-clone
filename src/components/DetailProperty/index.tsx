import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function index() {
  const [details, setDetails] = useState<string[]>([
    'Sütlü kıtır çikolata Badem parçacıkları ile kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek bilgiler',
  ]);

  const TextComponent = ({detail, index}: {detail: string; index: number}) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: index === 0 ? '#4e4e4e' : '#687482',
            fontSize: index === 0 ? 11.5 : 14,
            fontWeight: index === 0 ? '400' : '500',
          }}>
          {detail}
        </Text>
        {!index == 0 && <Icon name="angle-down" size={24} color="#9f9f9f" />}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 17,
        paddingVertical: 8,
      }}>
      {details.map((item, index) => (
        <TextComponent index={index} key={index} detail={item} />
      ))}
    </View>
  );
}
