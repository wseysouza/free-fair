import React, { useState } from "react"
import { useForm } from 'react-hook-form';
import { StackHeaderProps } from "@react-navigation/stack"

import * as S from "./styles"
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { HeaderScreens } from "../../components/HeaderScreens"
import { useAuth } from "../../hooks/auth"
import { Alert } from "react-native";

export function ProductRegistration({ navigation }: StackHeaderProps) {
  const { idFeira, appStackNav, registrationProduct } = useAuth()
  const { control, handleSubmit, resetField, getValues } = useForm()
  const [loading, setLoading] = useState(false)

  const theme = useTheme();

  console.log(">>>", idFeira)

  const onSubmit = async (data: { name: string, unidadeM: string, preco: string }) => {
    console.log()
    setLoading(true)
    if (!(data.name.length > 0)) {
      Alert.alert("Ops!", "Digite o Nome do Produto")
      setLoading(false)
      return
    } else if (!(data.unidadeM.toLocaleUpperCase().includes('KG') || data.unidadeM.toLocaleUpperCase().includes('UNIDADE'))) {
      Alert.alert("Ops!", "Digite se é a unidade ou KG")
      setLoading(false)
      return
    } else if (!(data.preco.length > 0)) {
      Alert.alert("Ops!", "Digite o preço")
      setLoading(false)
      return
    }



    const product = {
      name: data.name,
      unidadeM: data.unidadeM,
      precoUnitario: data.preco,
      idFeira: idFeira,
    }
    try {
      registrationProduct(product);
      Alert.alert('OK', "Produto Cadastrado com sucesso");
      navigation.navigate('Login')
      setLoading(false)
      resetField('name')
      resetField('preco')
      resetField('unidadeM')
    } catch (error) {
      console.log("test", error)
      setLoading(false)
    }
  }

  const handleGoBack = async () => {
    await appStackNav()
    navigation.goBack()
  }

  return (
    <S.Container>
      <HeaderScreens onPress={() => handleGoBack()} />
      <S.Title>Cadastro de Produto</S.Title>
      <S.Form showsVerticalScrollIndicator={false}>
        <Input name="name" placeholder="Nome do Produto" control={control} />
        <Input name="unidadeM" placeholder="Unidade/KG" control={control} />
        <Input name="preco" placeholder="Preço" control={control} keyboardType={"number-pad"} />

        {/* <Input name="adress" placeholder="Endereço" control={control} />
                  <Input name="publicPlace" placeholder="Logradouro" control={control} />
                  <Input name="CEP" placeholder="CEP" control={control} keyboardType={"numeric"} />
                  <Input name="number" placeholder="Numero" control={control} keyboardType={"numeric"} />
                  <Input name="state" placeholder="Estado" control={control} />
                  <Input name="city" placeholder="Cidade" control={control} /> */}


        <Button onPress={handleSubmit(onSubmit)} color={theme.colors.dark} title={loading ? "Carregando..." : "Cadastrar"} />
      </S.Form>
    </S.Container>
  )
}