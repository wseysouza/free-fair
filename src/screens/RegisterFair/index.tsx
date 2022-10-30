import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from "../../hooks/auth"

import * as S from './styles';

export function RegisterFair() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)
  const { registerFair, user } = useAuth()
  const [feira, setFeira] = useState({
    ID_User: user.id,
    name: "",
    cidade: "",
    endereco: "",
    telefone: "",
    horario: "",
    photo: ""
  })

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onChange = (text: string, parameter: string) => {
    const newFeira = { ...feira }
    newFeira[parameter] = text
    setFeira(newFeira)
  }
  useEffect(() => {
    const newFeira = { ...feira }
    newFeira.photo = image
    setFeira(newFeira)
  }, [image])

  const handleSave = () => {
    setLoading(true)
    if (feira.name.length < 1) {
      Alert.alert("Ops!", "Digite o Nome da feira")
      setLoading(false)
      return
    } else if (feira.cidade.length < 1) {
      Alert.alert("Ops!", "Digite a cidade")
      setLoading(false)
      return
    } else if (feira.endereco.length < 2) {
      Alert.alert("Ops!", "Digite o Endereço")
      setLoading(false)
      return
    } else if (feira.telefone.length < 6) {
      Alert.alert("Ops!", "Digite telefone válido")
      setLoading(false)
      return
    } else if (feira.horario.length < 1) {
      Alert.alert("Ops!", "Digite o horario")
      setLoading(false)
      return
    }

    feira

    try {
      registerFair(feira)
      setLoading(false)
      Alert.alert('Hoje tem Feira!!!', 'Cadastro realizado com Sucesso')
      setFeira({
        ID_User: user.id,
        name: "",
        cidade: "",
        endereco: "",
        telefone: "",
        horario: "",
        photo: ""
      })
      setImage("")
    } catch (error) {
      console.log('ERRO', error)
      setLoading(false)
    }
  }

  return (
    <S.Container>
      {image !== "" ? (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <S.ImageAttached source={{ uri: image }} />
        </View>
      ) : null}
      <S.Wrapper>
        <S.ContentText>Nome da Feira</S.ContentText>
        <S.ContenInput value={feira.name} onChangeText={(text) => onChange(text, "name")} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ContentText>Cidade</S.ContentText>
        <S.ContenInput value={feira.cidade} onChangeText={(text) => onChange(text, "cidade")} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ContentText>Endereço</S.ContentText>
        <S.ContenInput value={feira.endereco} onChangeText={(text) => onChange(text, "endereco")} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ContentText>Telefone</S.ContentText>
        <S.ContenInput value={feira.telefone} keyboardType={"numeric"} onChangeText={(text) => onChange(text, "telefone")} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ContentText>Horario de Atendimento</S.ContentText>
        <S.ContenInput value={feira.horario} onChangeText={(text) => onChange(text, "horario")} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ButtonForm title="Anexar Imagem da Feira" onPress={pickImage} />
      </S.Wrapper>
      <S.Wrapper>
        <S.ButtonForm title={loading ? "Carregando..." : "Cadastrar"} onPress={() => handleSave()} />
      </S.Wrapper>
    </S.Container>
  )
}