import React, { useRef, useEffect, useState } from "react";
import { useAuth } from '../../hooks/auth';
import * as S from "./styles";
import { RefreshControl, FlatList, ActivityIndicator, Text, View } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"

import SelectDropdown from 'react-native-select-dropdown';
import Logo from "../../assets/camera.png";

export function Home({ navigation }: StackHeaderProps) {
  const [selectDropdom, setSelectDropdom] = useState("")
  const { Get_MyFair, fairs, user, appStackNav } = useAuth()
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Get_MyFair()
    setTimeout(() => setLoading(false), 1000);
  }, [])


  const handleRefresh = () => {
    setSelectDropdom("")
    setRefreshing(true)

    setRefreshing(false)
  }
  console.log(selectDropdom)

  const handleScreenProducts = async (idFeira) => {
    appStackNav(idFeira, 'ProductsFair')

    navigation.navigate('ProductsFair')
  }

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="##68D391" />
    </View>
  ) : (
    fairs.length > 0 ? (
      <S.Wrapper>
        <SelectDropdown
          defaultButtonText="Clique para selecionar sua cidade"
          defaultValue="Selecione"
          rowStyle={{ height: 80 }}
          dropdownStyle={{ width: '83%' }}
          buttonStyle={{ width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 25 }}
          buttonTextStyle={{ color: "#2B6CB0" }}
          dropdownIconPosition="right"

          data={fairs}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selectedo

            setSelectDropdom(selectedItem.cidade)

            return selectedItem.cidade
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown


            return item.cidade
          }}
        />

        {selectDropdom.length > 1 && <S.Title>{`Feiras Cadastradas em ${selectDropdom}`}</S.Title>}

        {selectDropdom ? (
          <FlatList
            data={fairs}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            keyExtractor={(item) => item?.objectId.toString()}
            renderItem={({ item, index }) =>
              item.cidade === selectDropdom && (
                <S.Item onPress={() => handleScreenProducts(item.objectId)}>
                  <S.Logo source={item.photo ? { uri: item.photo } : Logo} />
                  <S.ColumContent>
                    <S.TitleContent>{item.name}</S.TitleContent>
                    <S.Content>{`Endereço: ${item.endereco}`}</S.Content>
                  </S.ColumContent>
                </S.Item>

              )
            }
          />
        ) : (
          <FlatList
            data={fairs}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            keyExtractor={(item) => item?.objectId.toString()}
            renderItem={({ item, index }) =>
              item && (
                <S.Item onPress={() => handleScreenProducts(item.objectId)}>
                  <S.Logo source={item.photo ? { uri: item.photo } : Logo} />
                  <S.ColumContent>
                    <S.TitleContent>{item.name}</S.TitleContent>
                    <S.Content>{`Endereço: ${item.endereco}`}</S.Content>
                  </S.ColumContent>
                </S.Item>
              )
            }
          />
        )}
      </S.Wrapper>
    ) : (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nenhuma Feira encontrada</Text>
      </View>
    )
  )
}