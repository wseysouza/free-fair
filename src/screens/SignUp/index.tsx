import React from "react";

import Button from "../../components/Form/Button";

import background from "../../assets/background.png";

import { Background, ButtonInfo, ButtonRow, Container, Content } from './styles';

import { Text } from "react-native";
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
          name="otp"
          icon="lock"
          placeholder="Enter OTP"
        />
        <ButtonRow>
          <ButtonInfo>
            Resend <Text style={{ fontWeight: 'bold' }}>OTP</Text>
          </ButtonInfo>
          <Button>
            Submit
          </Button>
        </ButtonRow>
      </Content>
    </Container>
  )
}