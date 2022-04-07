import React from "react";
import { Image, TextInput } from 'react-native';


import * as S from './styles';

export function Splash() {
    return (
        <S.Container>
            <S.Wrapper>
                <S.ContentText>Nome da Feira</S.ContentText>
                <S.ContenInput />
            </S.Wrapper>
            <S.Wrapper>
                <S.ContentText>Cidade</S.ContentText>
                <S.ContenInput />
            </S.Wrapper>
            <S.Wrapper>
                <S.ContentText>Endereço</S.ContentText>
                <S.ContenInput />
            </S.Wrapper>
            <S.Wrapper>
                <S.ContentText>Telefone</S.ContentText>
                <S.ContenInput />
            </S.Wrapper>
            <S.Wrapper>
                <S.ContentText>Horario de Atendimento</S.ContentText>
                <S.ContenInput />
            </S.Wrapper>
            <S.Wrapper>
                <S.ButtonForm title="Cadastrar" />
            </S.Wrapper>
        </S.Container>
    )
}