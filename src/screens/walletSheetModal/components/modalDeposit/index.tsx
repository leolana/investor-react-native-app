import React from 'react';

import { formatMoney } from '../../../../utils';

import { Header, Item, ItemContainer, ItemTitle, ItemText } from '../../styles';

import { black } from '../../../../assets/colors';

import { AntDesign } from '@expo/vector-icons';

export const ModalDeposit = (props) => {
  // Props

  const { data } = props;

  // Render

  return (
    <>
      <Header>
        <Item>Detalhes de Recebimento</Item>
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
