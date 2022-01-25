import React, { createContext, ReactNode, useContext, useState } from "react";

import * as AuthSession from 'expo-auth-session';
import * as Facebook from "expo-facebook";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  loginInWithGoogle(): Promise<void>;
  // loginInWithFacebook(): Promise<void>;
  logout(): void;
}


interface AuthorizatioResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData)


function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<User>(null);

  async function loginInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession
        .startAsync({ authUrl }) as AuthorizatioResponse;

      if (type === "success") {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        });
      }

    } catch (error) {
      throw new Error(error);
    }
  }

  async function logout() {
    setUser(null);
  }

  // async function loginInWithFacebook() {
  //     try {

  //         await Facebook.initializeAsync({
  //             appId: '<APP_ID>',
  //         });
  //         const {
  //             type,
  //             token,

  //         } = await Facebook.logInWithReadPermissionsAsync({
  //             permissions: ['public_profile', 'email'],
  //         });
  //         if (type === 'success') {
  //             // Get the user's name using Facebook's Graph API
  //             const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //             Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //         } else {
  //             // type === 'cancel'
  //         }

  //     } catch (error) {
  //         throw new Error(error);
  //     }
  // }



  return (
    <AuthContext.Provider value={{
      user,
      loginInWithGoogle,
      // loginInWithFacebook
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }