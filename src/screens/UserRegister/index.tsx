import React from "react"
import { useForm } from 'react-hook-form';
import { StackHeaderProps } from "@react-navigation/stack"

import * as S from "./styles"
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { HeaderScreens } from "../../components/HeaderScreens"

export function UserRegister({ navigation }: StackHeaderProps) {
    const { control, handleSubmit, resetField, getValues } = useForm()

    const theme = useTheme();

    const onSubmit = async (data: {}) => {
        console.warn("data>>", data)
        try {
            //await loginUser(data);
        } catch (error) {
            console.log("test", error)
        }
    }
    return (
        <S.Container>
            <HeaderScreens onPress={() => navigation.goBack()} />
            <S.Title>Cadastro</S.Title>
            <S.Form showsVerticalScrollIndicator={false}>
                <Input name="name" placeholder="Nome" control={control} />
                <Input name="email" placeholder="Email" control={control} keyboardType={"email-address"} />
                <Input name="CPF_CNPJ" placeholder="CPF/CNPJ" control={control} keyboardType={"numeric"} />
                <Input name="phone" placeholder="Telefone" control={control} keyboardType={"name-phone-pad"} />
                <Input name="adress" placeholder="Endereço" control={control} />
                <Input name="publicPlace" placeholder="Logradouro" control={control} />
                <Input name="CEP" placeholder="CEP" control={control} keyboardType={"numeric"} />
                <Input name="number" placeholder="Numero" control={control} keyboardType={"numeric"} />
                <Input name="state" placeholder="Estado" control={control} />
                <Input name="city" placeholder="Cidade" control={control} />
                <Input name="password" placeholder="Senha" secureTextEntry control={control} />
                <Input name="confirmationPassword" placeholder="Confirme a Senha" secureTextEntry control={control} />

                <Button onPress={handleSubmit(onSubmit)} color={theme.colors.dark} title="Cadastrar" />
            </S.Form>
        </S.Container>
    )
}