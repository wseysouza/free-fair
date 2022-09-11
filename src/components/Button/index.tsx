import React from 'react';
import * as S from './styles';

import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
    title: string;
    color: string;
}

export function Button({ color, title, ...rest }: Props) {
    return (
        <S.Container {...rest} color={color}>
            <MaterialIcons name="keyboard-arrow-right" size={40} color={color} />
            <S.Title>{title}</S.Title>
            <MaterialIcons name="keyboard-arrow-right" size={40} color="white" />
        </S.Container>
    )
}