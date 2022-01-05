import React from "react";
import { Image } from 'react-native';

import background from "../../assets/background.png";
import logo from "../../assets/logo.png";

import { Logo } from './styles';

export function Splash() {
    return (
        <>
            <Image source={background} />
            <Logo source={logo} />
        </>
    )
}