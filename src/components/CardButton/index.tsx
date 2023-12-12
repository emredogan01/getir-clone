import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {ProfilerProps} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/cartActions';
import {Product} from '../../models';

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

function index({item, addItemToCart}: cartButtonType) {
  const {width, height} = Dimensions.get('window');

  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        width: '100%',
        height: height * 0.12,
        backgroundColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          height: height * 0.06,
          width: '90%',
          backgroundColor: '#5d39c1',
          marginHorizontal: '5%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -10,
        }}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({quantity: 1, product})),
  };
};

export default connect(null, mapDispatchToProps)(index);
