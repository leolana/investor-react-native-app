import React from 'react';

import { Table, TableRow, TableText, TableDot, TableHeader, Graph } from './styles';

import { ItemText } from '../../styles';

import { formatMoney } from '../../../../utils';

import { FlatList } from 'react-native';

export const Body = (props) => {
  // Props

  const { data } = props;

  // Methods

  const renderItem = ({ item, index }) => (
    <TableRow last={data.Empresa.FaturamentoDozeMeses.length === index + 1}>
      <TableText spotlight={true}>
        {item.Mes.substring(0, 3)}/{item.Ano}
      </TableText>

      <TableDot />

      <TableText>{formatMoney(item.Valor)}</TableText>
    </TableRow>
  );

  // Render

  return (
    <>
      <Table>
        <TableHeader>
          <Graph />

          <ItemText>Faturamento dos últimos 12 meses</ItemText>
        </TableHeader>

        <FlatList data={data.Empresa.FaturamentoDozeMeses} renderItem={renderItem} key={(item) => item.index} />
      </Table>
    </>
  );
};
