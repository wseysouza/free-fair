// import react, { Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Wrapper } from "./styles";
import { Buttons } from "./components"
import { StackHeaderProps } from '@react-navigation/stack';

export function Most({ navigation }: StackHeaderProps) {

  const { logout } = useAuth();

  return (
    <Wrapper>
      <Buttons Title='Sair' TypeIcon='exit' onPress={logout} />
    </Wrapper>
  )

}