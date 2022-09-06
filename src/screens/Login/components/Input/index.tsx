import React from "react";
import { useController, UseControllerProps } from 'react-hook-form';


import * as S from './styles';

interface Props extends UseControllerProps {
    name: string,
    placeholder: string,
}

export function Input({ name, placeholder, control }: Props) {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    })


    return (
        <>
            <S.Input placeholder={placeholder} value={field.value} onChangeText={field.onChange} />
        </>
    )
}