import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { StackHeaderProps } from "@react-navigation/stack";
import { Fontisto } from '@expo/vector-icons';

import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HeaderScreens } from "../../components/HeaderScreens";
import { useAuth } from "../../hooks/auth";
import { Alert, FlatList, RefreshControl, Text, View, ActivityIndicator } from "react-native";
import Logo from "../../assets/camera.png";
import { ListItem } from "./components/ListItem";

export function ProductsFair({ navigation }: StackHeaderProps) {
  const { products, Get_ProductsFair, appStackNav } = useAuth()
  const { control, handleSubmit, resetField, getValues } = useForm()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [addProduct, setAddProduct] = useState(false)

  const theme = useTheme();


  // const onSubmit = async (data: { name: string, unidadeM: string, preco: string }) => {
  //   console.log()
  //   setLoading(true)
  //   if (!(data.name.length > 0)) {
  //     Alert.alert("Ops!", "Digite o Nome do Produto")
  //     setLoading(false)
  //     return
  //   } else if (!(data.unidadeM.toLocaleUpperCase().includes('KG') || data.unidadeM.toLocaleUpperCase().includes('UNIDADE'))) {
  //     Alert.alert("Ops!", "Digite se é a unidade ou KG")
  //     setLoading(false)
  //     return
  //   } else if (!(data.preco.length > 0)) {
  //     Alert.alert("Ops!", "Digite o preço")
  //     setLoading(false)
  //     return
  //   }



  //   const product = {
  //     name: data.name,
  //     unidadeM: data.unidadeM,
  //     precoUnitario: data.preco,
  //     idFeira: idFeira,
  //     photo: ""
  //   }

  //   try {
  //     registrationProduct(product);
  //     Alert.alert('OK', "Produto Cadastrado com sucesso");
  //     navigation.navigate('Login')
  //     setLoading(false)
  //     resetField('name')
  //     resetField('preco')
  //     resetField('unidadeM')
  //   } catch (error) {
  //     console.log("test", error)
  //     setLoading(false)
  //   }
  // }

  const handleGoBack = async () => {
    await appStackNav()
    navigation.goBack()
  }

  useEffect(() => {
    setLoading(true)
    try {
      Get_ProductsFair()
      setTimeout(() => setLoading(false), 1500)
    } catch (error) {
      setTimeout(() => setLoading(false), 1500)
    }
  }, [])

  const handleAddProduct = () => {
    if (!addProduct) {
      setAddProduct(true)
    } else {
      setAddProduct(false)
    }
  }

  return (
    <S.Container>
      <HeaderScreens onPress={() => handleGoBack()} />
      <S.Title>Produtos da Feira</S.Title>

      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        products?.length > 0 ? (
          <FlatList
            data={products}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
              // onRefresh={handleRefresh}
              />
            }
            keyExtractor={(item) => item?.objectId.toString()}
            renderItem={({ item, index }) =>
              <ListItem item={item} key={item?.objectId.toString()} />
            }
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nenhum Produto cadastrado</Text>
          </View>
        ))}

    </S.Container>
  )
}