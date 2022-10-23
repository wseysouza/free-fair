import React from "react";
import { useController, UseControllerProps } from 'react-hook-form';
import { createNumberMask } from 'react-native-mask-input';


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


  const realMask = createNumberMask({
    prefix: ['R', '$', ' '],
    delimiter: '.',
    separator: ',',
    precision: 2,
  })

  return (
    <>
      <S.Input
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        mask={name === "preco" ? realMask : null}
      />
    </>
  )
}