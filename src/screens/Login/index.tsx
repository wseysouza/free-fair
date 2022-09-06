import React, { useCallback, useRef } from "react";
import { Alert, View } from 'react-native';

import google from "../../assets/google.png";
import { useAuth } from '../../hooks/auth';

import { FontAwesome5 } from '@expo/vector-icons';

import * as S from "./styles";
import { Input } from "./components/Input";

import { useForm } from 'react-hook-form';
import { Button } from "./components/Button";


export function Login() {

    const { loginUser } = useAuth()

    const { control, handleSubmit, resetField, getValues } = useForm()

    const onSubmit = async (data) => {
        try {
            await loginUser(data);
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
                <S.ContentBottom>Faça seu login:</S.ContentBottom>
            </S.BackgroundTop >
            <S.BackgroundBottom>
                <S.Form>
                    <Input name={"Email"} placeholder={"Email"} control={control} />
                    <Input name={"Senha"} placeholder={"Senha"} control={control} />
                    <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
                </S.Form>
                {/* <S.ButtonGoogle onPress={handleLoginInWithGoogle}>
                    <S.ImageGoogle source={google} />
                    <S.TextGoogle>Entrar com Google</S.TextGoogle>
                </S.ButtonGoogle> */}
            </S.BackgroundBottom>

        </S.Container >
    )
}