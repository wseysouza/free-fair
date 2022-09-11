import React, { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from 'react-native';


import tab from "../data/index.json";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  photo?: string;
}

interface IAuthContextData {
  userInvalid: boolean;
  user: User;
  loginUser: (data: object) => void;
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

  const [user, setUser] = useState<User>({} as User);
  const [userInvalid, setUserInvalid] = useState(false);


  async function loginUser(data: { email: string, password: string }) {
    try {
      tab.map((item) => {
        if (item.email.toLowerCase === data.email.toLowerCase && item.password === data.password) {
          setUser({
            id: item.id,
            email: item.email,
            password: item.password,
            name: item.name,
            photo: item.photo,
          });
          setUserInvalid(false)
        } else {
          setUserInvalid(true)
        }
      })

    } catch (error) {

    }

  }

  async function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      userInvalid,
      user,
      loginUser,
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