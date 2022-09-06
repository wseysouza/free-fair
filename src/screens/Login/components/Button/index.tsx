import React from 'react';
import * as S from './styles';

import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <S.Container {...rest}>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}