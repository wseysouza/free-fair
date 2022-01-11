import React from "react";

import { Input } from "../../components/Form/Input";
import Button from    "../../components/Form/Button";

import background from "../../assets/background.png";

import { Background, ButtonInfo, Container, Content } from './styles';

import { Text } from "react-native";

export function SignUp() {
  return (
    <Container>
      <Background source={background} />
      <Content>
        <Input
          name="name"
          placeholder="Name"
        />
        <Input
          name="password"
          icon="lock"
          placeholder="Enter OTP"
        />

        <ButtonInfo>
          Resend <Text style={{fontWeight: 'bold'}}>OTP</Text>
        </ButtonInfo>
        <Button>
          Submit
        </Button>
      </Content>
    </Container>
  )
}