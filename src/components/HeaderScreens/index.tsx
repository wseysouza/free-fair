import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from "./styles";

import { AntDesign } from "@expo/vector-icons";

export function HeaderScreens({ ...rest }: TouchableOpacityProps) {
    return (
        <S.Container>
            <S.ButtonArrow {...rest}>
                <AntDesign name="arrowleft" size={34} color="black" />
            </S.ButtonArrow>
        </S.Container>
    )
}