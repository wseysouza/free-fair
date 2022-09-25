import React, { useEffect, useState } from "react";
import { Alert, FlatList, Modal } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"
import Logo from "../../assets/imagemFrutas.png";
import { AntDesign } from '@expo/vector-icons';

import data from "./data.json";


import * as S from "./styles";

export function MyFair({ navigation }: StackHeaderProps) {
  const [newData, setNewData] = useState([])
  const [modalVisible, setModalVisible] = useState(false);


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
          onPress: () => setModalVisible(!modalVisible)
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

      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <S.ConteinerModal>

          <S.ContentModal>
            <S.RowClosed>
              <AntDesign name="close" size={30} color="black" onPress={() => setModalVisible(!modalVisible)} />
            </S.RowClosed>
            <S.WrapperModal>
              <S.ContentText>Nome da Feira</S.ContentText>
              <S.ContenInput />
            </S.WrapperModal>
            <S.WrapperModal>
              <S.ContentText>Cidade</S.ContentText>
              <S.ContenInput />
            </S.WrapperModal>
            <S.WrapperModal>
              <S.ContentText>Endereço</S.ContentText>
              <S.ContenInput />
            </S.WrapperModal>
            <S.WrapperModal>
              <S.ContentText>Telefone</S.ContentText>
              <S.ContenInput />
            </S.WrapperModal>
            <S.WrapperModal>
              <S.ContentText>Horario de Atendimento</S.ContentText>
              <S.ContenInput />
            </S.WrapperModal>
            <S.WrapperModal>
              <S.ButtonForm title="Editar" />
            </S.WrapperModal>

          </S.ContentModal>
        </S.ConteinerModal>

      </Modal>

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