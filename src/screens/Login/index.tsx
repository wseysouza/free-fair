import React from "react";

import background from "../../assets/background.png";
import { Container, Background, Content } from "./styles";
import { Input } from "../../components/Forms/Input";

export function Login() {
    return (
        <Container>
            <Background source={background} />
            <Content>
                <Input placeholder="Phone Number" />
            </Content>
        </Container>
    )
}