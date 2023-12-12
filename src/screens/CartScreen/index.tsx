import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import productsGetir from '../../../assets/productsGetir';
import CartItem from '../../components/CartItem';
import ProductItem from '../../components/ProductItem';
import {connect} from 'react-redux';
import {Product} from '../../models';

const {width, height} = Dimensions.get('window');

function index({
  cartItems,
}: {
  cartItems: {product: Product; quantity: number}[];
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.product.fiyat;
      setTotalPrice(total);
    });
    cartItems.length ? null : setTotalPrice(0);
  };
  useEffect(() => {
    getProductPrice();
  }, [cartItems]);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => (
            <CartItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={{padding: 15, fontWeight: 'bold', color: '#5d3ebd'}}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          style={{backgroundColor: 'white'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}>
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#f8f8f8',
        }}>
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: '#5d3ebd',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            borderBottomLeftRadius: 9,
            borderTopLeftRadius: 9,
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 9,
          }}>
          <Text style={{color: '#5d3ebd', fontWeight: 'bold', fontSize: 16.5}}>
            <Text>{'\u20ba'}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
