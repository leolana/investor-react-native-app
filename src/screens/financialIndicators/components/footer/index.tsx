import React, { useState } from 'react';

import { ContentArea, Title, Tab, Tabs, TabText, TableRowText, TableRow, Arrow, Line } from './styles';

import { greyF3F5, greenTwo, redTwo } from '../../../../assets/colors';

import { formatMoney, formatPercent } from '../../../../utils';

import { FlatList } from 'react-native';

export const Footer = (props) => {
  // Props

  const { data } = props;

  // States

  const [selectedKey, setSelectedKey] = useState('ValorAno1');

  // Methods

  const getIndicator = ({ Classificacao, ValorAno1, ValorAno2 }) => {
    if (Classificacao === undefined) {
      if (ValorAno1 > ValorAno2) return <Arrow negative={true} stroke={redTwo} width={10} height={10} />;
      else if (ValorAno1 < ValorAno2) return <Arrow stroke={greenTwo} width={10} height={10} />;
    } else {
      if (Classificacao === 'Negativo') return <Arrow negative={true} stroke={redTwo} width={10} height={10} />;
      else if (Classificacao === 'Positivo') return <Arrow stroke={greenTwo} width={10} height={10} />;
    }
  };

  const formatDemonstrativos = (item) => {
    const { Tipo, Unidade } = item;

    const value = item[selectedKey];

    if (Unidade === '%' || Unidade === 'x') return `${formatPercent(value).replace('%', '')}${Unidade}`;
    else if (Tipo.indexOf('%') != -1) return formatPercent(value);
    else return formatMoney(value);
  };

  const renderItem = ({ item, index }) => (
    <TableRow background={index % 2 === 1 ? null : greyF3F5}>
      <TableRowText bold={true}>{item.Tipo}</TableRowText>

      <Line>
        {getIndicator(item)}
        <TableRowText>{formatDemonstrativos(item)}</TableRowText>
      </Line>
    </TableRow>
  );

  // Render

  return (
    <>
      <Title>Demonstrativos financeiros</Title>

      <ContentArea>
        <Tabs>
          <Tab selected={selectedKey === 'ValorAno1'} onPress={() => setSelectedKey('ValorAno1')}>
            <TabText selected={selectedKey === 'ValorAno1'}>{data.Empresa.Ano1} (12 meses)</TabText>
          </Tab>

          <Tab selected={selectedKey === 'ValorAno2'} onPress={() => setSelectedKey('ValorAno2')}>
            <TabText selected={selectedKey === 'ValorAno2'}>{data.Empresa.Ano2} (12 meses)</TabText>
          </Tab>

          <Tab disabled={true}>
            <TabText> </TabText>
          </Tab>
        </Tabs>

        <FlatList
          data={data.Empresa.Demonstrativos.filter((el) => el.AdicionarPerfil)}
          renderItem={renderItem}
          key={(item) => item.index}
        />
      </ContentArea>
    </>
  );
};
