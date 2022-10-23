import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { ProductRegistration } from '../screens/ProductRegistration';

const { Navigator, Screen } = createStackNavigator();

export function AppLogado() {
  return (
    <Navigator initialRouteName='ProductRegistration' screenOptions={{ headerShown: false }}>
      <Screen
        name="ProductRegistration"
        component={ProductRegistration}
      />
    </Navigator >
  )
}