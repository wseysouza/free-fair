import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { Login } from '../screens/Login';
import { UserRegister } from '../screens/UserRegister';
import { MyFair } from '../screens/MyFair';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="UserRegister"
        component={UserRegister}
      />
    </Navigator >
  )
}