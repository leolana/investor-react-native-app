import React from 'react';

import { SafeAreaView, ScrollView, ItemTitle, ItemText, Divisor } from './styles';

import { Card } from './components';

import { formatMoney, formatDate, formatPercent } from '../../utils';

import HTML from 'react-native-render-html';
import { FlatList } from 'react-native';

export const SocioInformationComponent = (props) => {
  // props

  const { navigation } = props;

  // vars

  const data = navigation.getParam('data', null);

  // methods

  const renderItem = ({ item }) => (
    <>
      <ItemTitle marginBottom="0">{item.Nome}</ItemTitle>
      <ItemText bold={true} marginBottom="5">
        {item.TipoSocio}
      </ItemText>

      {formatDate(item.DataEntrada) === '01/01/0001' ? null : (
        <>
          <ItemTitle marginBottom="0">
            Entrada: <ItemText>{formatDate(item.DataEntrada)}</ItemText>
          </ItemTitle>
          <ItemTitle>
            % Capital Total: <ItemText>{formatPercent(item.ParticipacaoCapital)}</ItemText>
          </ItemTitle>

          <ItemTitle marginBottom="0">Observações:</ItemTitle>
          <HTML html={item.Observacao} />

          <Divisor />
        </>
      )}
    </>
  );

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <Card title="Capital">
          <ItemTitle>
            Capital social: <ItemText>{formatMoney(data.Empresa.CapitalSocial)}</ItemText>
          </ItemTitle>

          <ItemTitle>
            Realizado: <ItemText>{formatMoney(data.Empresa.CapitalRealizado || 0)}</ItemText>
          </ItemTitle>

          <ItemTitle>
            Controle: <ItemText>{data.Empresa.Controle || 'Nada consta'}</ItemText>
          </ItemTitle>

          <ItemTitle>
            Natureza: <ItemText>{data.Empresa.Natureza || 'Nada consta'}</ItemText>
          </ItemTitle>
        </Card>

        <Card title="Quadro Social">
          <FlatList data={data.Empresa.Socios} key={(item) => item.index} renderItem={renderItem} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SocioInformation = {
  screen: SocioInformationComponent,
  navigationOptions: {
    headerTitle: 'Informações sobre sócios',
  },
};
