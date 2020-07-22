import React from 'react';

import { Header, Item, ItemText, ItemTitle, ItemContainer } from '../../styles';

import { formatMoney } from '../../../../utils';

import { black } from '../../../../assets/colors';

import { AntDesign } from '@expo/vector-icons';

export const ModalTransfer = (props) => {
  // Props

  const { data } = props;

  // Render

  return (
    <>
      <Header>
        <Item>Detalhes da Transferência</Item>
        <AntDesign name="close" size={24} color={black} onPress={() => props.navigation.goBack()} />
      </Header>

      <ItemContainer>
        <ItemTitle>Valor: </ItemTitle>
        <ItemText>{formatMoney(data.Valor)}</ItemText>
      </ItemContainer>

      <ItemContainer>
        <ItemTitle>ID da transação: </ItemTitle>
        <ItemText>{data.id}</ItemText>
      </ItemContainer>
    </>
  );
};
