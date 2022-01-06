import React from "react";
import { Image } from 'react-native';

import background from "../../assets/background.png";
import logo from "../../assets/logo.png";

import { Logo, Background, Container } from './styles';

export function Splash() {
    return (
        <Container>
            <Background source={background} />
            <Logo source={logo} />
        </Container>
    )
}