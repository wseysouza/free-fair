import React, { useRef, useEffect, useState } from "react";
import { useAuth } from '../../hooks/auth';
import * as S from "./styles";
import { RefreshControl, FlatList } from 'react-native'
import data from "./data.json";

import SelectDropdown from 'react-native-select-dropdown';
import Logo from "../../assets/imagemFrutas.png";

export function Home() {
  const [selectDropdom, setSelectDropdom] = useState("")
  const { Get_MyFair, myFair } = useAuth()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    Get_MyFair()
  }, [])

  const handleRefresh = () => {
    console.log("EU")
    setSelectDropdom("")
    setRefreshing(true)
    //Get_MyFair()

    setRefreshing(false)
  }

  return (
    <S.Wrapper>

      <SelectDropdown
        defaultButtonText="Clique para selecionar sua cidade"
        defaultValue="Selecione"
        rowStyle={{ height: 80 }}
        dropdownStyle={{ width: '83%' }}
        buttonStyle={{ width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 25 }}
        buttonTextStyle={{ color: "#2B6CB0" }}
        dropdownIconPosition="right"

        data={myFair}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
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
          data={myFair}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          keyExtractor={(item) => item?.objectId.toString()}
          renderItem={({ item, index }) =>
            item.cidade === selectDropdom && (
              <S.Item>
                <S.Logo source={Logo} />
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
          data={myFair}
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
                <S.Logo source={Logo} />
                <S.ColumContent>
                  <S.TitleContent>{item.name}</S.TitleContent>
                  <S.Content>{`Endereço: ${item.endereco}`}</S.Content>
                </S.ColumContent>
              </S.Item>
            )
          }
        />)}

    </S.Wrapper>
  )
}