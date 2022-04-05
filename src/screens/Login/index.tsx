import React, { useCallback, useRef } from "react";
import { Alert } from 'react-native';

// import background from "../../assets/imagem-de-frutas.jpg";
import google from "../../assets/google.png";
import Button from '../../components/Form/Button';
import { InputLogin } from './components/InputLogin';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    BackgroundTop,
    BackgroundBottom,
    ButtonGoogle,
    ImageGoogle,
    TextGoogle,
    ContentTop,
    ContentCenter,
    ContentBottom
} from "./styles";


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
        <Container>
            <BackgroundTop >
                <ContentTop>Feira Livre</ContentTop>
                <ContentCenter>Seu App de Feiras</ContentCenter>
                <ContentBottom>Faça seu login com uma das contas abaixo</ContentBottom>
            </BackgroundTop >
            <BackgroundBottom>
                <ButtonGoogle onPress={handleLoginInWithGoogle}>
                    <ImageGoogle source={google} />
                    <TextGoogle>Entrar com Google</TextGoogle>
                </ButtonGoogle>
            </BackgroundBottom>
        </Container >
    )
}