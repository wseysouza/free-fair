import React, { createContext, ReactNode, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  photo?: string;
  cpfCnpj: string
}
interface myFair {
  objectId: string;
  name: string;
  cidade: string;
  endereco: string;
  telefone: string;
  horario: string;
  createdAt: string;
  updatedAt: string;
}

interface IAuthContextData {
  userInvalid: boolean;
  user: User;
  myFair: myFair[];
  fairs: myFair[];
  stacNav: boolean;
  idFeira: string;
  appStackNav: (idFeira?: string) => void
  loginUser: (data: object) => void;
  logout(): void;
  DeleteFair(id: string): void;
  Put_Fair(id: string, data: {
    cidade: string,
    endereco: string,
    horario: string,
    name: string,
    telefone: string,
  }): void;
  Get_MyFair(): void;
  createUser(data: {
    idUsuario: string,
    nome: string,
    email: string,
    senha: string,
    cpfCnpj: string,
    telefone: number,
  }): void;
  registerFair(data: {
    cidade: string,
    endereco: string,
    horario: string,
    name: string,
    telefone: string,
  }): void;
  registrationProduct(data: {
    name: string,
    precoUnitario: string,
    unidadeM: string,
    idFeira: string,
  }): void;

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
  const [stacNav, setStacNav] = useState(false);
  const [idFeira, setIdFeira] = useState("");
  const [myFair, setMyfair] = useState<myFair[]>(null);
  const [fairs, setFairs] = useState<myFair[]>(null);
  const [userInvalid, setUserInvalid] = useState(false);


  async function loginUser(user: { email: string, password: string }) {
    try {
      const { data } = await api.get("/users");
      data.results.map((item) => {
        if (item.email.toLowerCase() === user.email.toLowerCase() && item.senha === user.password) {
          setUser({
            id: item.objectId,
            email: item.email,
            password: item.senha,
            name: item.nome,
            cpfCnpj: item.cpfCnpj,
          });
          setUserInvalid(false)
          return
        } else {
          setUserInvalid(true)
        }
      })

    } catch (error) {
      console.log("ERROR", error)
    }
  };

  async function createUser(data: {
    nome: string,
    email: string,
    senha: string,
    cpfCnpj: string,
    telefone: number,
    idUsuario: string,
  }) {
    try {
      await api.post("/users", data);
    } catch (error) {
      console.log("ERROR", error)
    }

  };


  async function logout() {
    AsyncStorage.clear()
    setUser(null);
    setUserInvalid(false)
  }

  async function appStackNav(idFeira = null) {
    setIdFeira(idFeira)
    if (!stacNav) {
      setStacNav(true)
    } else {
      setStacNav(false)
    }
  }


  async function registerFair(data) {
    try {
      await api.post("/feiras", data);
      Get_MyFair();
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  async function registrationProduct(data) {
    try {
      await api.post("/item", data);
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  async function Get_MyFair() {
    try {
      const { data } = await api.get("/feiras");
      let MyFairFilter = data.results.filter((item) => item.ID_User === user.id)
      setMyfair(MyFairFilter)
      setFairs(data.results)
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  async function DeleteFair(id) {
    console.log(id)
    try {
      await api.delete(`/feiras/${id}`);
      Get_MyFair();
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  async function Put_Fair(id, data) {
    console.log(data)
    try {
      await api.put(`/feiras/${id}`, data);
      Get_MyFair();
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  return (
    <AuthContext.Provider value={{
      userInvalid,
      user,
      myFair,
      fairs,
      stacNav,
      idFeira,
      loginUser,
      logout,
      createUser,
      registerFair,
      Get_MyFair,
      DeleteFair,
      Put_Fair,
      appStackNav,
      registrationProduct,
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