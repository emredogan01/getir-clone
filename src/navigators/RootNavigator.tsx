import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarButton = ({children}) => {
    return (
      <TouchableOpacity
        style={{
          width: 54,
          height: 54,
          backgroundColor: '#5c3ebc',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 34,
          marginTop: -9,
          borderWidth: 2,
          borderColor: 'white',
        }}>
        <Icon name="th-list" size={26} color="#ffd00c" />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5E3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="gift" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
