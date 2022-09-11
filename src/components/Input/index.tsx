import React from "react";
import { useController, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from "react-native";

import * as S from './styles';


interface Props extends UseControllerProps {
    name: string,
    placeholder: string,
    secureTextEntry?: boolean,
    keyboardType?: 'numeric' | 'email-address' | "ascii-capable" | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad',
}

export function Input({ name, placeholder, keyboardType, secureTextEntry = false, control }: Props) {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    })


    return (
        <>
            <S.Input placeholder={placeholder} value={field.value} onChangeText={field.onChange} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
        </>
    )
}