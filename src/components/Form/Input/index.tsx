import React from 'react';
import { TextInput, TextInputProps } from "react-native";

import { Container, Icon, InputRow } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

export function Input({ name, icon, ...rest }: InputProps) {
  return (
    <Container >
      <InputRow>
        <TextInput
          {...rest}
        />
        <Icon
          name={icon}
          size={25}
        />
      </InputRow>
    </Container>
  )
}
