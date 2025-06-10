import 'react-native-gesture-handler';

import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SimpleLineIcons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

import LoginScreen from './src/pages/Login';
import HomeScreen from "./src/pages/home";

import { NavigationContainer } from "@react-navigation/native";

import HomeProduto from './src/pages/Products';

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();


export default function Routers() {
  return (
    <NavigationContainer>
      { }
      <StackNavigate />
    </NavigationContainer>
  )
};

const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login"
        component={LoginScreen}
        options={
          {
            headerShown: false
          }
        } />
      <Stack.Screen name="Home"
        component={DrawerNavigate}
        options={
          {
            headerShown: false
          }
        } />
      <Stack.Screen name="Produto" component={HomeProduto}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <tab.Navigator initialRouteName='Home'>
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: () => <SimpleLineIcons name="home" size={24} color="orange" />
        }}>

      </tab.Screen>
      <tab.Screen
        name="Produtos"
        component={HomeProduto}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: () => <MaterialIcons name="storefront" size={24} color="orange" />,
          tabBarBadgeStyle: 'red',
        }}>

      </tab.Screen>
    </tab.Navigator>
  )
}

const DrawerNavigate = () => {
  return (
    <drawer.Navigator initialRouteName='Home'>
      <drawer.Screen name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => <SimpleLineIcons name="home" size={24} color="orange" />,
           drawerActiveTintColor:'orange',
          drawerInactiveTintColor:'gray',
          drawerActiveBackgroundColor:'lightgray',
          drawerInactiveBackgroundColor:'white',
        }}>

      </drawer.Screen>
      <drawer.Screen name="Produto"
        component={HomeProduto}
        options={{
          drawerIcon: () => <MaterialIcons name="storefront" size={24} color="orange" />,
          drawerActiveTintColor:'orange',
          drawerInactiveTintColor:'gray',
          drawerActiveBackgroundColor:'lightgray',
          drawerInactiveBackgroundColor:'white',
        }}>

      </drawer.Screen>

    </drawer.Navigator>
  )
}


