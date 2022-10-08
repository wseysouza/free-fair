import React, { useState } from "react"
import { useForm } from 'react-hook-form';
import { StackHeaderProps } from "@react-navigation/stack"

import * as S from "./styles"
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { HeaderScreens } from "../../components/HeaderScreens"
import { useAuth } from "../../hooks/auth"
import { Alert } from "react-native";

export function UserRegister({ navigation }: StackHeaderProps) {
    const { createUser } = useAuth()
    const { control, handleSubmit, resetField, getValues } = useForm()
    const [loading, setLoading] = useState(false)

    const theme = useTheme();

    const onSubmit = async (data: { name: string, email: string, password: string, confirmationPassword: string, phone: number, CPF_CNPJ: string }) => {
        setLoading(true)
        if (!data.name.includes(' ')) {
            Alert.alert("Ops!", "Nome deve ser completo")
            setLoading(false)
            return
        } else if (!data.email.includes('@' && '.com')) {
            Alert.alert("Ops!", "email inválido")
            setLoading(false)
            return
        } else if (data.CPF_CNPJ.length < 9) {
            Alert.alert("Ops!", "cpf/cnpj inválido")
            setLoading(false)
            return
        } else if (!data.phone) {
            Alert.alert("Ops!", "Telefone inválido")
            setLoading(false)
            return
        } else if (data.password.length < 6) {
            Alert.alert("Ops!", "Senha deve conter no minimo 6 caracteres")
            setLoading(false)
            return
        } else if (data.password !== data.confirmationPassword) {
            Alert.alert("Ops!", "Senhas devem ser iguais")
            setLoading(false)
            return
        }

        const user = {
            nome: data.name,
            email: data.email,
            senha: data.password,
            cpfCnpj: data.CPF_CNPJ,
            telefone: data.phone,
            idUsuario: 'sdfdfdgdfv',
        }
        try {
            createUser(user);
            Alert.alert('OK', "Cadastrado com sucesso");
            navigation.navigate('Login')
            setLoading(false)
            // resetField('name')
            // resetField('email')
            // resetField('CPF_CNPJ')
            // resetField('phone')
            // resetField('password')
            // resetField('confirmationPassword')

        } catch (error) {
            console.log("test", error)
            setLoading(false)
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
                <Input name="phone" placeholder="Telefone" control={control} keyboardType={"numeric"} />
                {/* <Input name="adress" placeholder="Endereço" control={control} />
                <Input name="publicPlace" placeholder="Logradouro" control={control} />
                <Input name="CEP" placeholder="CEP" control={control} keyboardType={"numeric"} />
                <Input name="number" placeholder="Numero" control={control} keyboardType={"numeric"} />
                <Input name="state" placeholder="Estado" control={control} />
                <Input name="city" placeholder="Cidade" control={control} /> */}
                <Input name="password" placeholder="Senha" secureTextEntry control={control} />
                <Input name="confirmationPassword" placeholder="Confirme a Senha" secureTextEntry control={control} />

                <Button onPress={handleSubmit(onSubmit)} color={theme.colors.dark} title={loading ? "Carregando..." : "Cadastrar"} />
            </S.Form>
        </S.Container>
    )
}