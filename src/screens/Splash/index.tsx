import React from "react";
import { Image } from 'react-native';

import background from "../../assets/imagem-de-frutas.jpg";

import { Logo, Background, Container } from './styles';

export function Splash() {
    return (
        <Container>
            <Background source={background} />
            {/* <Logo source={logo} /> */}
        </Container>
    )
}