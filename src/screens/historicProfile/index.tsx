import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

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

import {
  convertScoreByColor,
  formatCNPJ,
  formatLoanType,
  formatMoney,
  formatPercent,
  formatDate,
  formatCode,
} from '../../utils';

import { LinkList } from '../../components';

import { Request, UrlSolicitacaoReservaPegar } from '../../services';
import { Footer } from './components';
import { Loading } from '../../components';

export const HistoricProfileComponent = (props) => {
  const { navigation } = props;
  const data = navigation.getParam('data', null);
  const [statusBoleto, setStatusBoleto] = useState('');
  const [loading, setLoading] = useState(true);

  const [reserve, setReserve] = useState('');

  const links = [
    {
      title: 'Ver todos os dados da empresa',
      onPress: () => navigation.navigate('Company', { data: reserve.SolicitacaoId }),
      disabled: reserve === null,
    },
    // {
    //   title: 'Pagamentos',
    //   onPress: () => navigation.navigate('HistoricPayment', { data: reserve }),
    //   disabled: reserve === null,
    // },
  ];
  const getInvestmentReservation = async () => {
    const resp = await Request.GET({ url: UrlSolicitacaoReservaPegar(data._id) });

    if (resp.status === 200) {
      setReserve(resp.data);
      setLoading(false);
    } else Alert.alert('Ocorreu um erro ao obter as informações.', 'Por favor volte mais tarde.');
  };

  const getStatus = () => {
    if (data.StatusBoleto === 'paid') setStatusBoleto('Pago');
    else if (data.StatusBoleto === 'pending') setStatusBoleto('Pendente');
    else if (data.StatusBoleto === 'expired') setStatusBoleto('Expirado');
    else if (data.StatusBoleto === 'canceled') setStatusBoleto('Cancelado');
  };

  useEffect(() => {
    getStatus();
    async function fetchData() {
      await getInvestmentReservation();
    }
    fetchData();
    //   navigation.setParams({ headerTitle: `ID #${formatCode(data.SolicitacaoId.IdOportunidade)}` });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Loading loading={loading}>
          <Row>
            <Title>{data.SolicitacaoId.Empresa.NomeFantasia}</Title>

            <Row>
              <ScoreCircle background={convertScoreByColor(data.SolicitacaoId.Score)} />
              <Score>{data.SolicitacaoId.Score}</Score>
            </Row>
          </Row>

          <Subtitle>CNPJ: {formatCNPJ(data.SolicitacaoId.Documento)}</Subtitle>
          <LoanType>{formatLoanType(data.SolicitacaoId.TipoEmprestimo, false)}</LoanType>

          <Row>
            <Buttom onPress={() => navigation.navigate('OpportunitieProfile', { data: data.SolicitacaoId })}>
              <ButtomText>VER SOLICITAÇÃO</ButtomText>
            </Buttom>

            <Text bold={true}>
              Status: <Text>{statusBoleto}</Text>
            </Text>
          </Row>
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
          <Footer data={reserve} loading={reserve === null} />
        </Loading>
      </ScrollView>
    </SafeAreaView>
  );
};

export const HistoricProfile = {
  screen: HistoricProfileComponent,
  navigationOptions: {
    headerTitle: 'Detalhes de CCB',
  },
};
