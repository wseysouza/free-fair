import React, { useCallback, useRef } from "react";
import { Alert } from 'react-native'

import background from "../../assets/background.png";
import google from "../../assets/google.png";
import Button from '../../components/Form/Button';
import { InputLogin } from './components/InputLogin';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Background,
    Content,
    Row,
    ButtonsRow,
    ButtonGoogle,
    ButtonFacebook,
    IconPhone,
    IconFacebook,
    ImageGoogle,
    TextGoogle,
    TextFacebook,
    RowForm
} from "./styles";


export function Login() {
    const { loginInWithGoogle } = useAuth();

    // async function handleLoginInWithGoogle() {

    //     const test = await loginInWithGoogle();
    //     console.log("test >>>", test);


    // }


    const formRef = useRef(null);


    function handleSubmit(data: object): void {
        console.log(data)
    }

    return (
        <Container>
            <Background source={background} />
            <Content>
                <Row >
                    <IconPhone name="phone" size={30} />

                    <RowForm ref={formRef} onSubmit={handleSubmit} >
                        <InputLogin placeholder="Phone Number" name="phone" />
                        <Button children="Send OPT" onPress={() =>
                            formRef.current.submitForm()} />
                    </RowForm>
                </Row >

                <ButtonsRow>
                    <ButtonGoogle onPress={() => loginInWithGoogle()}>
                        <ImageGoogle source={google} />
                        <TextGoogle>Google</TextGoogle>
                    </ButtonGoogle>

                    <ButtonFacebook>
                        <IconFacebook name="facebook" size={25} />
                        <TextFacebook>Facebook</TextFacebook>
                    </ButtonFacebook>
                </ButtonsRow>
            </Content>
        </Container >
    )
}