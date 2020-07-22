import React from 'react';

import { formatMoney, formatCNPJ } from '../../../../utils';

import { Header, Item, ItemContainer, ItemTitle, ItemText, Company } from '../../styles';

import { black } from '../../../../assets/colors';

import { AntDesign } from '@expo/vector-icons';

export const ModalInvestment = (props) => {
  // Props

  const { data } = props;

  const { Investimento } = data.Detalhes;

  // Render

  return (
    <>
      <Header>
        <Item>Informações</Item>
        <AntDesign name="close" size={24} color={black} onPress={() => props.navigation.goBack()} />
      </Header>

      <ItemContainer>
        <Company>
          {Investimento.NomeEmpresa} - {formatCNPJ(Investimento.Documento)}
        </Company>
      </ItemContainer>

      <ItemContainer>
        <ItemTitle>ID Oportunidade: </ItemTitle>
        <ItemText>{Investimento.IdOportunidade}</ItemText>
      </ItemContainer>

      <Item>Detalhes de Investimento</Item>

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
