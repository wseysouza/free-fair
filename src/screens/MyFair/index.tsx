import React, { useEffect, useState } from "react";
import { Alert, FlatList, Modal, ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { StackHeaderProps } from "@react-navigation/stack"
import Logo from "../../assets/imagemFrutas.png";
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from "../../hooks/auth"

import * as S from "./styles";

export function MyFair({ navigation }: StackHeaderProps) {
  const { Get_MyFair, myFair, DeleteFair, Put_Fair } = useAuth()
  const [modalVisible, setModalVisible] = useState(false);
  const [idFair, setIdFair] = useState('');
  const [feira, setFeira] = useState({
    cidade: "",
    endereco: "",
    horario: "",
    name: "",
    telefone: "",
  })


  useEffect(() => {
    Get_MyFair();
  }, [])

  const editFair = (id) => {
    myFair.forEach((item) => {
      if (id === item.objectId) {
        setFeira({
          cidade: item.cidade,
          endereco: item.endereco,
          horario: item.horario,
          name: item.name,
          telefone: item.telefone
        })
      }
    })
    setIdFair(id)
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
          onPress: () => setModalVisible(true)
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
            try {
              DeleteFair(id)
              Get_MyFair();
            } catch (error) {
              console.log('ERROR', error)
            }
          }
        }
      ]
    )
  }

  const handleEdit = (id) => {
    try {
      Put_Fair(id, feira)
      Get_MyFair();
      setModalVisible(false)
    } catch (error) {
      console.log('ERROR', error)
    }
  }


  const onChange = (text: string, parameter: string) => {
    const newFeira = { ...feira }
    newFeira[parameter] = text
    setFeira(newFeira)
  }

  return (
    <S.Wrapper>
      {myFair.length > 0 ? (
        <FlatList
          data={myFair}
          keyExtractor={(item) => item?.objectId.toString()}
          renderItem={({ item, index }) =>
            <S.Item>
              <S.Logo source={Logo} />
              <S.ColumContent>
                <S.TitleContent>{item.name}</S.TitleContent>
                <S.Content>{`Endereço: ${item.endereco} - ${item.cidade} `}</S.Content>
              </S.ColumContent>
              <AntDesign name="edit" size={35} color="black" onPress={() => editFair(item.objectId)} />
              <AntDesign style={{ marginLeft: 15 }} name="delete" size={35} color="black" onPress={() => deleteFair(item.objectId)} />
            </S.Item>
          }
        />
      ) : (
        // myFair.length !== 0 ?
        //   (
        //     <View style={{ flex: 1, justifyContent: "center" }}>
        //       <Text>Nenhuma Feira Cadastra</Text>
        //     </View>
        //   ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="##68D391" />
        </View>
        // )
      )}
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
          {myFair.map((item) => item.objectId === idFair &&
            <S.ContentModal key={item.objectId}>
              <S.RowClosed>
                <AntDesign name="close" size={30} color="black" onPress={() => setModalVisible(!modalVisible)} />
              </S.RowClosed>
              <S.WrapperModal>
                <S.ContentText>Nome da Feira</S.ContentText>
                <S.ContenInput value={feira.name} onChangeText={(text) => onChange(text, "name")} />
              </S.WrapperModal>
              <S.WrapperModal>
                <S.ContentText>Cidade</S.ContentText>
                <S.ContenInput value={feira.cidade} onChangeText={(text) => onChange(text, "cidade")} />
              </S.WrapperModal>
              <S.WrapperModal>
                <S.ContentText>Endereço</S.ContentText>
                <S.ContenInput value={feira.endereco} onChangeText={(text) => onChange(text, "endereco")} />
              </S.WrapperModal>
              <S.WrapperModal>
                <S.ContentText>Telefone</S.ContentText>
                <S.ContenInput value={feira.telefone} onChangeText={(text) => onChange(text, "telefone")} />
              </S.WrapperModal>
              <S.WrapperModal>
                <S.ContentText>Horario de Atendimento</S.ContentText>
                <S.ContenInput value={feira.horario} onChangeText={(text) => onChange(text, "horario")} />
              </S.WrapperModal>
              <S.WrapperModal>
                <S.ButtonForm title="Editar" onPress={() => handleEdit(item.objectId)} />
              </S.WrapperModal>
            </S.ContentModal>
          )}

        </S.ConteinerModal>

      </Modal>
    </S.Wrapper>
  )
}