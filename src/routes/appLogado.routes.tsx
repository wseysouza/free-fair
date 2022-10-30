import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { ProductRegistration } from '../screens/ProductRegistration';
import { ProductsFair } from '../screens/ProductsFair';

import { useAuth } from "../hooks/auth"

const { Navigator, Screen } = createStackNavigator();

export function AppLogado() {
  const { screen } = useAuth()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {screen === 'ProductRegistration' ?
        <Screen
          name="ProductRegistration"
          component={ProductRegistration}
        /> : null
      }
      {screen === 'ProductsFair' ?
        <Screen
          name="ProductsFair"
          component={ProductsFair}
        /> : null
      }

    </Navigator >
  )
}