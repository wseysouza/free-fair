import React from "react";
import { Text } from "react-native";

import { Input } from "../../components/Form/Input";
import Button from "../../components/Form/Button";

import background from "../../assets/background.png";

import { Background, ButtonInfo, ButtonRow, Container, Content, TextSendOtp } from './styles';

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
            Resend <TextSendOtp>OTP</TextSendOtp>
          </ButtonInfo>

          <Button>
            Submit
          </Button>
        </ButtonRow>
      </Content>
    </Container>
  )
}
