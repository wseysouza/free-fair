import React, { useRef, useEffect } from "react";
import { TextInput } from 'react-native';
import { useField } from '@unform/core';

import { Input } from './styles';


export function InputLogin({ name, placeholder }) {
    const inputRef = useRef(null);

    const {
        fieldName,
        registerField,
        defaultValue,
        error } = useField(name);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])


    return (
        <Input ref={inputRef} placeholder={placeholder} />
    )
}