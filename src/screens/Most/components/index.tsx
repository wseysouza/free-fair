import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  Title: string,
  TypeIcon: string,
}

export function Buttons({ Title, TypeIcon, ...rest }: Props) {
  return (
    <S.BorderView>
      <S.ButtonReturn {...rest}>
        {TypeIcon === "exit" && <MaterialCommunityIcons name="exit-run" size={24} color="black" />}
        {TypeIcon === "myFair" && <FontAwesome5 name="store" size={24} color="black" />}
        <S.ExitText>{Title}</S.ExitText>
      </S.ButtonReturn>
    </S.BorderView>
  )
}