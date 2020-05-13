import React, { useState, useEffect } from 'react';

import { Card, Header, IconArrowRight, Title, Text, Body, Circle, HelperArea, ScoreArea } from './styles';

import { tealish, greenTwo, greyTwo, redTwo, blueTwo } from '../../../../assets/colors';

import { formatMoney, formatPercent, formatDate, convertScoreByColor, formatLoanType } from '../../../../utils';

import { withNavigation } from 'react-navigation';

import { TouchableWithoutFeedback } from 'react-native';

export const CardHistoryComponent = (props) => {
  // props

  const { data, navigation } = props;

  // states

  const [status, setStatus] = useState('');

  // vars

  const scoreColor = convertScoreByColor(data.SolicitacaoId.Score);

  // methdos

  const getStatus = () => {
    const {
      Valor,
      ValorCaptado,
      BoletosAtrasados,
      StatusAnalise,
      GerouBoletosPagamento,
      CCBsAssinaturas,
    } = data.SolicitacaoId;

    if (
      (Valor > ValorCaptado && BoletosAtrasados == undefined) ||
      (BoletosAtrasados == 0 && StatusAnalise != 'ENCERRADO')
    )
      return 'Captando';
    else if (
      (Valor <= ValorCaptado && BoletosAtrasados == undefined) ||
      (BoletosAtrasados == 0 && StatusAnalise != 'ENCERRADO')
    )
      return 'Captado';
    else if (BoletosAtrasados != undefined && BoletosAtrasados != 0) return 'Em Atraso';
    else if (
      StatusAnalise == 'ENCERRADO' &&
      !GerouBoletosPagamento &&
      (BoletosAtrasados == undefined || BoletosAtrasados == 0) &&
      data.AssinouCCB != true &&
      CCBsAssinaturas != true
    )
      return 'Aguardando formalização';
    else if (
      StatusAnalise == 'ENCERRADO' &&
      !GerouBoletosPagamento &&
      (BoletosAtrasados == undefined || BoletosAtrasados == 0) &&
      data.AssinouCCB != true &&
      CCBsAssinaturas == true
    )
      return 'Assinar CCB';
    else if (
      StatusAnalise == 'ENCERRADO' &&
      !GerouBoletosPagamento &&
      (BoletosAtrasados == undefined || BoletosAtrasados == 0) &&
      data.AssinouCCB == true &&
      CCBsAssinaturas == true
    )
      return 'Processando Desembolso';
    else if (
      StatusAnalise == 'ENCERRADO' &&
      GerouBoletosPagamento &&
      (BoletosAtrasados == undefined || BoletosAtrasados == 0)
    )
      return 'Empréstimo Ativo';
  };

  const getStatusColor = (status) => {
    const statusColors = {
      Captando: greyTwo,
      Captado: greenTwo,
      'Em Atraso': redTwo,
      'Aguardando formalização': blueTwo,
      'Assinar CCB': blueTwo,
      'Processando Desembolso': blueTwo,
      'Empréstimo Ativo': greenTwo,
    };

    return statusColors[status];
  };

  // effects

  useEffect(() => {
    const status = getStatus();

    setStatus(status);
  }, []);

  // render

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('HistoricProfile', { data: { ...data, formattedStatus: status } })}
    >
      <Card>
        <Header>
          <IconArrowRight stroke={tealish} width={10} height={18} />
          <Title> ID #{data.SolicitacaoId.IdOportunidade} </Title>

          <HelperArea>
            <Text fontFamily={'OpenSans-SemiBold'} width="178px" color={getStatusColor(status)}>
              {status}
            </Text>

            <ScoreArea>
              <Circle background={scoreColor} size={16} />
              <Text color={greyTwo}>{data.SolicitacaoId.Score}</Text>
            </ScoreArea>
          </HelperArea>
        </Header>

        <Body>
          <Text>
            {' '}
            Nome da empresa: <Text fontFamily={'OpenSans-Regular'}>
              {' '}
              {data.SolicitacaoId.Empresa.NomeFantasia}{' '}
            </Text>{' '}
          </Text>
          <Text>
            {' '}
            Participação: <Text fontFamily={'OpenSans-Regular'}> {formatMoney(data.Valor)} </Text>{' '}
          </Text>
          <Text>
            {' '}
            Tipo de empréstimo:{' '}
            <Text fontFamily={'OpenSans-Regular'}> {formatLoanType(data.SolicitacaoId.TipoEmprestimo)} </Text>{' '}
          </Text>
          <Text>
            {' '}
            Taxa de juros:{' '}
            <Text fontFamily={'OpenSans-Regular'}>
              {' '}
              {formatPercent(data.SolicitacaoId.RetornoBrutoMensal)} a.m.{' '}
            </Text>{' '}
          </Text>
          <Text>
            {' '}
            Retorno:{' '}
            <Text fontFamily={'OpenSans-Regular'}>
              {' '}
              {formatPercent(data.SolicitacaoId.RetornoBrutoAnual)} a.a.{' '}
            </Text>{' '}
          </Text>
          <Text>
            {' '}
            Duração: <Text fontFamily={'OpenSans-Regular'}> {data.SolicitacaoId.Prazo} Meses </Text>{' '}
          </Text>
        </Body>

        <Text>
          {' '}
          Data da solicitação: <Text fontFamily={'OpenSans-Regular'}>
            {' '}
            {formatDate(data.SolicitacaoId.Created)}{' '}
          </Text>{' '}
        </Text>
        <Text>
          {' '}
          Data do investimento: <Text fontFamily={'OpenSans-Regular'}> {formatDate(data.Created)} </Text>{' '}
        </Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export const CardHistory = withNavigation(CardHistoryComponent);
