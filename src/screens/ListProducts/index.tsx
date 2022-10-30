import React, { useRef, useEffect, useState } from "react";
import { useAuth } from '../../hooks/auth';
import * as S from "./styles";
import { RefreshControl, FlatList, ActivityIndicator, Text, View } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"

import SelectDropdown from 'react-native-select-dropdown';
import Logo from "../../assets/camera.png";

export function ListProducts({ navigation }: StackHeaderProps) {
  const [selectDropdom, setSelectDropdom] = useState("")
  const { addProductList } = useAuth()
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)




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
          renderItem={({ item, index }) =>
            item && (
              <S.Item>
                <S.Logo source={item.photo ? { uri: item.photo } : Logo} />
                <S.ColumContent>
                  <S.TitleContent>{item.name}</S.TitleContent>
                  <S.Content>{`R$ ${item.precoUnitario}`}</S.Content>
                </S.ColumContent>
              </S.Item>
            )
          }
        />
      </S.Wrapper>
    ) : (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nenhum Produto na sua Lista de Compras</Text>
      </View>
    )
  )
}