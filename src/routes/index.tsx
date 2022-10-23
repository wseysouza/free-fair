import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import AppRoutes from './app.routes';
import { AppLogado } from './appLogado.routes';
import { Home } from '../screens/Home';

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user, stacNav } = useAuth()
  return (
    <NavigationContainer>
      {user ?
        stacNav ? <AppLogado /> : <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}