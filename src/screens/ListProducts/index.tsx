import React, { useRef, useEffect, useState } from "react";
import { useAuth } from '../../hooks/auth';
import * as S from "./styles";
import { RefreshControl, FlatList, ActivityIndicator, Text, View, Linking } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"

import SelectDropdown from 'react-native-select-dropdown';
import Logo from "../../assets/camera.png";
import { Button } from "../../components/Button/";

export function ListProducts({ navigation }: StackHeaderProps) {
  const [selectDropdom, setSelectDropdom] = useState("")
  const { addProductList } = useAuth()
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [valueTotal, setValueTotal] = useState("")
  let valorTotal = 0

  const handleRefresh = () => {
    setSelectDropdom("")
    setRefreshing(true)

    setRefreshing(false)
  }
  console.log(selectDropdom)

  // const handleScreenProducts = async (idFeira) => {
  //   appStackNav(idFeira, 'ProductsFair')

  //   navigation.navigate('ProductsFair')
  // }

  const handleWhats = () => {
    let ListItens = "Ola, segue a Lista: ";
    addProductList.forEach((item) => {
      ListItens += item.name + " ,"
    })
    Linking.openURL(`https://api.whatsapp.com/send?phone=5551984500860&text=${ListItens}`)
  }

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="##68D391" />
    </View>
  ) : (
    addProductList.length > 0 ? (
      <S.Wrapper>

        <FlatList
          data={addProductList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          keyExtractor={(item) => item?.objectId.toString()}
          renderItem={({ item, index }) => {

            valorTotal += parseFloat(item.precoUnitario.replace(",", "."))

            setValueTotal(valorTotal.toString())

            return (
              item && (
                <S.Item>
                  <S.Logo source={item.photo ? { uri: item.photo } : Logo} />
                  <S.ColumContent>
                    <S.TitleContent>{item.name}</S.TitleContent>
                    <S.Content>{`R$ ${item.precoUnitario}`}</S.Content>
                  </S.ColumContent>
                </S.Item>
              )
            )
          }}
        />
        <S.RowValueTotal>
          <S.TextValueTotal>Valor Total:</S.TextValueTotal>
          <S.TextValueTotal>R$ {valueTotal.replace(".", ",")}</S.TextValueTotal>

        </S.RowValueTotal>
        <Button title="Enviar Lista via Whats" color="#68D391" onPress={() => handleWhats()} />
      </S.Wrapper>
    ) : (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nenhum Produto na sua Lista de Compras</Text>
      </View>
    )
  )
}