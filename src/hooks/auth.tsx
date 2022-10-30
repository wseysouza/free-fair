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
interface myProducts {
  objectId: string;
  unidadeM: string;
  idFeira: string;
  name: string;
  precoUnitario: string;
  createdAt: string;
  updatedAt: string;
  photo: string
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
  photo: string
}

interface newProd {
  objectId: string,
  name: string,
  precoUnitario: string,
  unidadeM: string,
  idFeira: string,
  photo: string
}

interface IAuthContextData {
  userInvalid: boolean;
  user: User;
  myFair: myFair[];
  addProductList: newProd[];
  fairs: myFair[];
  products: myProducts[];
  stacNav: boolean;
  idFeira: string;
  screen: string;
  appStackNav: (idFeira?: string, screen?: string) => void
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
  Get_ProductsFair(): void;
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
    photo: string
  }): void;
  registrationProduct(data: {
    name: string,
    precoUnitario: string,
    unidadeM: string,
    idFeira: string,
    photo: string
  }): void;
  addProduct(item: newProd): void;
  removeProduct(id: ""): void;

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
  const [screen, setScreen] = useState("");
  const [myFair, setMyfair] = useState<myFair[]>(null);
  const [products, setProducts] = useState<myProducts[]>(null);
  const [fairs, setFairs] = useState<myFair[]>(null);
  const [userInvalid, setUserInvalid] = useState(false);
  const [addProductList, setAddProductList] = useState<newProd[]>([]);


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

  async function appStackNav(idFeira = null, screen) {
    setIdFeira(idFeira)
    setScreen(screen)
    if (!stacNav) {
      setStacNav(true)
    } else {
      setStacNav(false)
    }
  }

  async function addProduct(item: newProd) {
    addProductList.push(item)
    console.log("NEW", addProductList)
  }

  async function removeProduct(id: '') {
    let removeProduct = addProductList.filter(item =>
      item.objectId !== id
    )
    setAddProductList(removeProduct)
    console.log("REMOVE", addProductList)
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

  async function Get_ProductsFair() {
    try {
      const { data } = await api.get("/item");
      let myProducts = data.results.filter((item) => item.idFeira === idFeira)
      setProducts(myProducts)
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
      addProductList,
      products,
      fairs,
      stacNav,
      idFeira,
      screen,
      loginUser,
      logout,
      createUser,
      registerFair,
      Get_MyFair,
      Get_ProductsFair,
      DeleteFair,
      Put_Fair,
      appStackNav,
      registrationProduct,
      addProduct,
      removeProduct,
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