import React from "react";

import background from "../../assets/background.png";
import google from "../../assets/google.png"

import {
    Container,
    Background,
    Content,
    Row,
    InputRow,
    ButtonsRow,
    ButtonGoogle,
    ButtonFacebook,
    IconPhone,
    IconFacebook,
    ImageGoogle,
    TextGoogle,
    TextFacebook
} from "./styles";


export function Login() {
    return (
        <Container>
            <Background source={background} />
            <Content>
                <Row>
                    <IconPhone name="phone" size={30} />
                    <InputRow placeholder="Phone Number" />
                </Row >

                <ButtonsRow>
                    <ButtonGoogle>
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