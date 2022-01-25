import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


import theme from './src/global/styles/theme';
import { Login } from "./src/screens/Login";
import { Splash } from "./src/screens/Splash";
import AppProvider from './src/hooks';
import { useAuth } from './src/hooks/auth';
import { Home } from './src/screens/Home';




export default function App() {

  const { user } = useAuth();
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  if (user === null) {
    return <Login />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Home />
      </AppProvider>
    </ThemeProvider>
  )
}
