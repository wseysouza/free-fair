import React from "react";
import { TextInput, Text, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import background from "../../assets/background.png";
import google from "../../assets/google.png"

import { Container, Background, Content, InputRow, ButtonsRow, ButtonGoogle, ButtonFacebook } from "./styles";


export function Login() {
    return (
        <Container>
            <Background source={background} />
            <Content>
                <InputRow>
                    <MaterialCommunityIcons name="phone" />
                    <TextInput placeholder="Phone Number" />
                </InputRow >

                <ButtonsRow>
                    <ButtonGoogle>
                        <Image source={google} />
                        <Text>Google</Text>
                    </ButtonGoogle>

                    <ButtonFacebook>
                        <FontAwesome name="facebook" />
                        <Text>Facebook</Text>
                    </ButtonFacebook>
                </ButtonsRow>
            </Content>
        </Container >
    )
}