import React, { useEffect } from 'react';

import { Divisor, ItemTitle, ItemText, Table, TableText, TableRow, TableSpotlightText } from './styles';

import { Buttom, ButtomText } from '../../styles';

import { formatPercent, formatMoney } from '../../../../utils';

import { Request, UrlReservationCreate, UrlSolicitacaoReservaPegar, UrlBoletoCriar } from '../../../../services';

import { withNavigation } from 'react-navigation';

import { Alert } from 'react-native';

export const ConfirmationStepComponent = (props) => {
  // Props

  const { data } = props;

  // Methods

  const getBankSlipUrl = async (id) => {
    const resp = await Request.GET({ url: UrlSolicitacaoReservaPegar(id) });

    console.log(resp);

    if (resp.status === 200) {
      props.navigation.navigate('Opportunities');
      return resp.data.Boleto.secure_url;
    } else return null;
  };

  const invest = async () => {
    const config = {
      Valor: Number.parseFloat(data.value),
      ReInvestimento: Number.parseFloat(data.reinvestmentValue),
      listaEspera: data.waitingList,
    };

    const resp = await Request.POST({
      url: UrlReservationCreate(data._id),
      data: config,
      header: 'bearer',
    });

    const boleto = await Request.POST({
      url: UrlBoletoCriar(),
      data: { IDReserva: resp.data._id },
      header: 'bearer',
    });

    console.log(boleto.data.LinhaDigitavel);
    console.log(resp);

    if (resp.status !== 200) {
      Alert.alert(resp.data.Error);
      props.navigation.navigate('OpportunitieProfile');
    }

    if (data.waitingList) {
      props.navigation.navigate('InvestWaitingListSuccessModal');

      props.navigation.navigate('OpportunitieProfile', { data });
    } else {
      const url = await getBankSlipUrl(resp.data.$__._id);

      props.onDataChange(url);

      props.onStepChange(2);
    }
  };

  // Render

  return (
    <>
      <Divisor side="up">
        <ItemTitle>Vaor do investimento</ItemTitle>
        <ItemText>{formatMoney(data.value)}</ItemText>
      </Divisor>
      <Divisor side="up">
        <ItemTitle>Rendimento</ItemTitle>
        <ItemText>{formatPercent(data.Rendimento)} a.a.</ItemText>
      </Divisor>

      <Table>
        <TableRow showBorder={true}>
          <TableText>Reinvestimento</TableText>
          <TableText bold={true}>{formatMoney(data.reinvestmentValue)}</TableText>
        </TableRow>

        <TableRow showBorder={true}>
          <TableText>Valor do boleto</TableText>
          <TableText bold={true}>{formatMoney(data.value - data.reinvestmentValue)}</TableText>
        </TableRow>

        <TableRow>
          <TableSpotlightText>Total investido</TableSpotlightText>
          <TableSpotlightText>{formatMoney(data.value)}</TableSpotlightText>
        </TableRow>
      </Table>

      <Buttom onPress={() => invest()}>
        <ButtomText>CONFIRMAR INVESTIMENTO</ButtomText>
      </Buttom>
    </>
  );
};

export const ConfirmationStep = withNavigation(ConfirmationStepComponent);
