import React from 'react';
import { TextInputProps } from "react-native";

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

export function Input ({ name, icon, ...rest }: InputProps) {
  return (
    <Container >
      <TextInput 
        placeholderTextColor="rgba(0, 0, 0, 0.87)"
        {...rest}
      />

      <Icon
        name={icon}
        size={25}
      />
    </Container>
  )
}
