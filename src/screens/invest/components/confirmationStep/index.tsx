import React from 'react';

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

  const invest = async () => {
    const config = {
      Boleto: {},
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

    if (resp.status !== 200) {
      Alert.alert(resp.data.Error);
    }

    if (data.waitingList) {
      props.navigation.navigate('OpportunitieProfile', { data });

      props.navigation.navigate('InvestWaitingListSuccessModal');
    } else {
      if (boleto.data.linhaDigitavel !== undefined) {
        props.onBoletoChange(boleto.data.linhaDigitavel);
        props.onStepChange(2);

        props.navigation.navigate('PaymentStepComponent', { data });
      } else {
        props.onStepChange(0);
        props.navigation.navigate('OpportunitieProfile', { data });
      }
      // props.onBoletoChange(boleto.data.Error);
    }
  };

  // Render

  return (
    <>
      <Divisor side="up">
        <ItemTitle>Valor do investimento</ItemTitle>
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
