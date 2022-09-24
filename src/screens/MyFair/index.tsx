import React, { useEffect, useState } from "react";
import { Alert, FlatList } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"
import Logo from "../../assets/imagemFrutas.png";
import { AntDesign } from '@expo/vector-icons';

import data from "./data.json";


import * as S from "./styles";

export function MyFair({ navigation }: StackHeaderProps) {
  const [newData, setNewData] = useState([])


  useEffect(() => {
    setNewData(data)
  }, [])

  const editFair = () => {
    Alert.alert(
      "Editar Feira",
      "Tem certeza que deseja editar?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Editar",
          onPress: () => console.log("OK Pressed")
        }
      ]
    )
  }
  const deleteFair = (id) => {
    Alert.alert(
      "Excluir Feira",
      "Tem certeza que deseja excluir?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => {
            setNewData(newData.filter((item) => item.id !== id))
          }
        }
      ]
    )
  }

  return (
    <S.Wrapper>
      <FlatList
        data={newData}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item, index }) =>
        (
          <S.Item>
            <S.Logo source={Logo} />
            <S.ColumContent>
              <S.TitleContent>{item.nome}</S.TitleContent>
              <S.Content>{`Endereço: ${item.endereco}`}</S.Content>
            </S.ColumContent>
            <AntDesign name="edit" size={35} color="black" onPress={() => editFair()} />
            <AntDesign style={{ marginLeft: 15 }} name="delete" size={35} color="black" onPress={() => deleteFair(item.id)} />
          </S.Item>
        )}
      />
    </S.Wrapper>
  )
}