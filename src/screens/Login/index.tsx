import React from "react";

import { useAuth } from '../../hooks/auth';

import { FontAwesome5 } from '@expo/vector-icons';

import * as S from "./styles";
import { Input } from "../../components/Input";

import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";

import { useTheme } from "styled-components/native"

import { StackHeaderProps } from '@react-navigation/stack';


export function Login({ navigation }: StackHeaderProps) {

    const { loginUser, userInvalid } = useAuth()

    const { control, handleSubmit, resetField, getValues } = useForm()

    const onSubmit = async (data: {}) => {
        try {
            await loginUser(data);
        } catch (error) {
            console.log("test", error)
        }
    }

    const theme = useTheme();

    return (
        <S.Container>
            <S.BackgroundTop >
                <S.ContentTop>Hoje tem Feira</S.ContentTop>
                <FontAwesome5 name="store" size={120} color="white" />
            </S.BackgroundTop >
            <S.BackgroundBottom>
                <S.Form>
                    <S.ContentBottom>Faça seu Login</S.ContentBottom>

                    <Input name={"email"} placeholder={"Email"} control={control} />
                    <Input name={"password"} placeholder={"Senha"} control={control} secureTextEntry />
                    {userInvalid && <S.TextUserInvalid>*Email ou senha incorreto</S.TextUserInvalid>}
                    <Button title="Entrar" onPress={handleSubmit(onSubmit)} color={theme.colors.dark} />
                    <Button title="Não tenho uma conta" onPress={() => navigation.navigate("UserRegister")} color={theme.colors.facebook} />
                </S.Form>
            </S.BackgroundBottom>

        </S.Container >
    )
}