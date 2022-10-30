import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Fontisto } from '@expo/vector-icons';

import { useTheme } from "styled-components/native";
import { useAuth } from "../../../../hooks/auth";
import Logo from "../../../../assets/camera.png";
import * as S from "./styles";

export function ListItem({ item }) {
  const { addProduct, removeProduct, addProductList } = useAuth()
  const [refreshing, setRefreshing] = useState(false)
  const [addProd, setAddProd] = useState(false)



  useEffect(() => {
    addProductList.forEach(prod => {
      if (item.objectId === prod.objectId) {
        setAddProd(true)
      }
    }
    )
  }, [])

  const handleAddProduct = (item) => {
    if (!addProd) {
      addProduct(item)
      setAddProd(true)
    } else {
      removeProduct(item.objectId)
      setAddProd(false)
    }
  }

  return (

    <S.Item >
      <S.RowContentAndImage>
        <S.Logo source={item.photo ? { uri: item.photo } : Logo} />
        <S.ColumContent>
          <S.TitleContent>{item.name}</S.TitleContent>
          <S.Content>{`R$ ${item.precoUnitario}`}</S.Content>
        </S.ColumContent>
      </S.RowContentAndImage>
      {!addProd ? (
        <Fontisto name="shopping-basket-add" size={30} color="black" onPress={() => handleAddProduct(item)} />
      ) : (
        <Fontisto name="shopping-basket-remove" size={30} color="black" onPress={() => handleAddProduct(item)} />
      )
      }
    </S.Item>

  )
}