import React from 'react';
import { Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';
import { Home } from '../screens/Home';
import { RegisterFair } from "../screens/RegisterFair";
import { Most } from "../../src/screens/Most";
import { MyFair } from "../../src/screens/MyFair";
import { ListProducts } from "../../src/screens/ListProducts";

const AppRoutes = createBottomTabNavigator();
const ButtonsRoutes = createStackNavigator();

const AuthRoutes = () => {

  const theme = useTheme();

  return (

    <AppRoutes.Navigator
      screenOptions={{ headerShown: true, headerStyle: { backgroundColor: '#68D391' }, headerTitleAlign: 'center', headerTitleStyle: { color: 'white' } }}

    >
      <AppRoutes.Screen
        name="Feiras"
        component={Home}
        options={{
          tabBarLabel: (({ color, focused }) => (
            <Text style={{ color: focused ? '#68D391' : color, fontSize: 10 }} >Início</Text>
          )),
          tabBarIcon: (({ size, color, focused }) => (
            <FontAwesome5
              name="home"
              size={size}
              color={focused ? '#68D391' : color}
            />
          ))
        }}
      />

      <AppRoutes.Screen
        name="Lista de Compras"
        component={ListProducts}
        options={{
          tabBarLabel: (({ color, focused }) => (
            <Text style={{ color: focused ? '#68D391' : color, fontSize: 10 }} >Compras</Text>
          )),
          tabBarIcon: (({ size, color, focused }) => (

            <FontAwesome5
              name="shopping-cart"
              size={size}
              color={focused ? '#68D391' : color}
            />
          ))
        }}
      />


      <AppRoutes.Screen
        name="Cadastrar Feira"
        component={RegisterFair}
        options={{
          tabBarLabel: (({ color, focused }) => (
            <Text style={{ color: focused ? '#68D391' : color, fontSize: 10 }} >Cadastrar Feira</Text>
          )),
          tabBarIcon: (({ size, color, focused }) => (
            <MaterialIcons
              name="add-business"
              size={size}
              color={focused ? '#68D391' : color}
            />
          ))
        }}
      />

      <AppRoutes.Screen
        name="Minhas Feiras"
        component={MyFair}
        options={{
          tabBarLabel: (({ color, focused }) => (
            <Text style={{ color: focused ? '#68D391' : color, fontSize: 10 }} >Minhas Feiras</Text>
          )),
          tabBarIcon: (({ size, color, focused }) => (
            <FontAwesome5
              name="store"
              size={size}
              color={focused ? '#68D391' : color}
            />
          ))
        }}
      />

      <AppRoutes.Screen
        name="Mais"
        component={Most}
        options={{
          tabBarLabel: (({ color, focused }) => (
            <Text style={{ color: focused ? '#68D391' : color, fontSize: 10 }} >Mais</Text>
          )),
          tabBarIcon: (({ size, color, focused }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={focused ? '#68D391' : color}
            />
          ))
        }}
      />

    </AppRoutes.Navigator>
  )
}

export default AuthRoutes;