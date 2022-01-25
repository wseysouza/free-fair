import React, { useRef, useEffect } from "react";
import { useAuth } from '../../hooks/auth';
import { Wrapper, ButtonReturn } from "./styles";
import { Text } from 'react-native'

export function Home() {
  const { logout } = useAuth()

  return (
    <Wrapper>
      <ButtonReturn onPress={logout} >
        <Text>Sair</Text>
      </ButtonReturn>
    </Wrapper>
  )
}