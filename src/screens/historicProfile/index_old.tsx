import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Row,
  Title,
  Subtitle,
  ScoreCircle,
  Score,
  LoanType,
  Buttom,
  ButtomText,
  Text,
  Item,
  ItemTitle,
  ItemText,
} from './styles';

import { LinkList } from '../../components';

import {
  convertScoreByColor,
  formatCNPJ,
  formatLoanType,
  formatMoney,
  formatPercent,
  formatDate,
  formatCode,
} from '../../utils';

import { Request, UrlSolicitacaoReservaPegar } from '../../services';

import { Footer } from './components';
import { Alert } from 'react-native';

export const HistoricProfileComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [reserve, setReserve] = useState(null);

  // vars

  const data = navigation.getParam('data', null);

  const links = [
    {
      title: 'Ver todos os dados da empresa',
      onPress: () => navigation.navigate('Company', { data: reserve.SolicitacaoId }),
      disabled: reserve === null,
    },
    {
      title: 'Pagamentos',
      onPress: () => navigation.navigate('HistoricPayment', { data: reserve }),
      disabled: reserve === null,
    },
  ];

  // methods

  const getInvestmentReservation = async () => {
    const resp = await Request.GET({ url: UrlSolicitacaoReservaPegar(data._id) });

    console.log('RESPOSTA TA AQUI', resp);

    if (resp.status === 200) setReserve(resp.data);
    else Alert.alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  };

  // useeffects

  useEffect(() => {
    async function fetchData() {
      await getInvestmentReservation();
    }

    fetchData();

    navigation.setParams({ headerTitle: `ID #${formatCode(data.SolicitacaoId.IdOportunidade)}` });
  }, [data.SolicitacaoId.IdOportunidade, navigation]);

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <LinkList data={links} borderBottomWidth="1" />

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Valor investido</ItemTitle>
          <ItemText>{formatMoney(data.Valor)}</ItemText>
        </Item>

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Retorno bruto anual</ItemTitle>
          <ItemText>{formatPercent(data.SolicitacaoId.RetornoBrutoAnual)} a.a.</ItemText>
        </Item>

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Retorno bruto anual</ItemTitle>
          <ItemText>{formatPercent(data.SolicitacaoId.RetornoBrutoMensal)} a.m.</ItemText>
        </Item>

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Retorno estimado do CDI</ItemTitle>
          <ItemText>{formatPercent((data.SolicitacaoId.Cdi / 1000).toFixed(3))}</ItemText>
        </Item>

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Prazo previsto</ItemTitle>
          <ItemText>{data.SolicitacaoId.Prazo} Meses</ItemText>
        </Item>

        <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)}>
          <ItemTitle>Data do investimento</ItemTitle>
          <ItemText>{formatDate(data.Created)}</ItemText>
        </Item>
      </ScrollView>
    </SafeAreaView>
  );
};

export const HistoricProfile = {
  screen: HistoricProfileComponent,
  navigationOptions: {
    headerTitle: 'ID',
  },
};
