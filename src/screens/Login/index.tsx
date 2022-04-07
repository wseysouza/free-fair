import React, { useCallback, useRef } from "react";
import { Alert, View } from 'react-native';

import google from "../../assets/google.png";
import { useAuth } from '../../hooks/auth';

import { FontAwesome5 } from '@expo/vector-icons';

import * as S from "./styles";


export function Login() {

    const { loginInWithGoogle } = useAuth()

    async function handleLoginInWithGoogle() {
        try {
            await loginInWithGoogle();
        } catch (error) {
            console.log("test", error)
            Alert.alert('Não foi possível conectar a conta Google')
        }
    }

    return (
        <S.Container>
            <S.BackgroundTop >
                <S.ContentTop>Hoje tem Feira</S.ContentTop>
                <S.ContentCenter>
                    <FontAwesome5 name="store" size={50} color="white" />
                    <S.RowTextFair>Seu App de Feiras</S.RowTextFair>
                </S.ContentCenter>
                <S.ContentBottom>Faça seu login com uma das contas abaixo</S.ContentBottom>
            </S.BackgroundTop >
            <S.BackgroundBottom>
                <S.ButtonGoogle onPress={handleLoginInWithGoogle}>
                    <S.ImageGoogle source={google} />
                    <S.TextGoogle>Entrar com Google</S.TextGoogle>
                </S.ButtonGoogle>
            </S.BackgroundBottom>
        </S.Container >
    )
}