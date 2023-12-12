import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';

function index() {
  const [category, setCategory] = useState<String>('Birlikte İyi Gider');
  const {width, height} = Dimensions.get('window');

  const TypeBox = ({
    item,
    active,
    setCat,
  }: {
    item: string;
    active: string;
    setCat: any;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => setCat(item)}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 7,
            height: height * 0.044,
            marginRight: 12,
          },
          item == active
            ? {backgroundColor: '#5c3ebc'}
            : {borderBlockColor: '#6B7286', borderWidth: 0.3},
        ]}>
        <Text
          style={[
            {fontSize: 12, color: '#7849f7', fontWeight: '600'},
            item == category && {color: 'white'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        flexDirection: 'row',
        width: '100%',
        height: height * 0.072,
        paddingVertical: height * 0.014,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
      }}>
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        item => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        ),
      )}
    </ScrollView>
  );
}

export default index;
