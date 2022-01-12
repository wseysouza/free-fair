import React from "react";

import Button from "../../components/Form/Button";

import background from "../../assets/background.png";

import { Background, ButtonInfo, Container, Content } from './styles';

import { Text, TextInput } from "react-native";
import { InputRow } from "../../components/Form/Input/styles";
import { Input } from "../../components/Form/Input";

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
          Resend <Text style={{ fontWeight: 'bold' }}>OTP</Text>
        </ButtonInfo>
        <Button>
          Submit
        </Button>
      </Content>
    </Container>
  )
}