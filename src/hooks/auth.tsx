import React, { createContext, ReactNode, useContext, useState } from "react";

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


  async function loginUser(data: { email: string, password: string }) {
    try {
      tab.map((item) => {
        if (item.email === data.email && item.password === data.password) {
          setUser({
            id: item.id,
            email: item.email,
            password: item.password,
            name: item.name,
            photo: item.photo,
          });
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