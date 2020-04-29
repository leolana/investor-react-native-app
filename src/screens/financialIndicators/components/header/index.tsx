import React from 'react';

import { Item, ItemTitle, Divisor } from './styles';

import { ItemText } from '../../styles';

import { formatMoney, formatDate } from '../../../../utils';

export const Header = (props) => {
  // Props

  const { data } = props;

  // Methods

  const formatEndividamento = (value) => (value != 0 || value != undefined ? formatMoney(value) : 'Nada Consta');

  // Render

  return (
    <>
      <Item>
        <ItemTitle>Faturamento anual</ItemTitle>
        <ItemText>{formatMoney(data.Faturamento)}</ItemText>
      </Item>

      <Item>
        <ItemTitle>Lucro líquido</ItemTitle>
        <ItemText>{formatMoney(data.Empresa.LucroMensal)}</ItemText>
      </Item>

      <Item>
        <ItemTitle>Endividamento</ItemTitle>
        <ItemText>{formatEndividamento(data.Empresa.ValorDividaBancaria)}</ItemText>

        <Divisor />

        <ItemTitle>Data base da consulta</ItemTitle>
        <ItemText>
          {formatDate(data.Empresa.DataConsultaEndividamentoTotal || data.Empresa.DataConsultaEndividamento, 'MM/yyyy')}
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Negativações</ItemTitle>
        <ItemText>{data.Empresa.Negativacoes || 'Nada consta'}</ItemText>

        <Divisor />

        <ItemTitle>Atrasos/restritivos</ItemTitle>
        <ItemText>{formatMoney(data.Empresa.Atrasos)}</ItemText>
      </Item>
    </>
  );
};
