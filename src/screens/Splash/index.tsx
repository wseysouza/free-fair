import React from "react";
import { Image } from 'react-native';

import background from "../../assets/imagem-de-frutas.jpg";

import { Background, Container } from './styles';

export function Splash() {
    return (
        <Container>
            <Background source={background} />
        </Container>
    )
}