import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import {
  Dimensions,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import TrashIcon from 'react-native-vector-icons/FontAwesome';
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {connect} from 'react-redux';
import {Product} from '../models';
import * as actions from '../redux/actions/cartActions';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

function MyStack({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  cartItems: {product: Product; quantity: number}[];
  clearCart: () => void;
}) {
  const tabHiddenRoutes = ['ProductDetails', 'CartScreen'];
  const [totalPrice, setTotalPrice] = useState<number>(0);

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'true'}});
    }
  }, [navigation, route]);

  const getProductsPrice = () => {
    var total = 0;
    cartItems.forEach(cartItem => {
      const price = (total += cartItem.product.fiyat);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems, navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5c3ebc',
          },
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{
                width: 70,
                height: 30,
                alignSelf: Platform.OS === 'ios' ? 'center' : 'center',
              }}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CartScreen')}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: 'white',
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 23, height: 23, marginLeft: 6}}
                source={require('../../assets/cart.png')}
              />
              <View
                style={{height: 33, width: 3, backgroundColor: 'white'}}></View>
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: '#f3effe',
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#5d3ebd', fontWeight: 'bold', fontSize: 12}}>
                  <Text>{'\u20ba'}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 12}}>
              <Icon name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 12}}>
              <Icon name="heart" color="#32177a" size={24} />
            </TouchableOpacity>
          ),
        }}
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => navigation.goBack()}>
              <Icon name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{paddingRight: 10}}>
              <TrashIcon name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  clearCart: () => void;
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
