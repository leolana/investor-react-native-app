import React, { useEffect } from 'react';

import { Divisor, ItemTitle, ItemText, Table, TableText, TableRow, TableSpotlightText } from './styles';

import { Buttom, ButtomText } from '../../styles';

import { formatPercent, formatMoney } from '../../../../utils';

import { Request, UrlReservationCreate, UrlSolicitacaoReservaPegar } from '../../../../services';

import { Toast } from '../../../../components';

import { withNavigation } from 'react-navigation';

export const ConfirmationStepComponent = (props) => {
  // Props

  const { data } = props;

  // Methods

  const getBankSlipUrl = async (id) => {
    const resp = await Request.GET({ url: UrlSolicitacaoReservaPegar(id) });

    console.log(resp);

    if (resp.status === 200) return resp.data.Boleto.secure_url;
    else return null;
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

    console.log(resp);

    if (resp.status !== 200) Toast.showError(resp.data.Error);

    if (data.waitingList) {
      props.navigation.navigate('OpportunitieProfile', { data });

      props.navigation.navigate('InvestWaitingListSuccessModal');
    } else {
      const url = await getBankSlipUrl(resp.data.$__._id);

      props.onDataChange(url);

      props.onStepChange(2);
    }
  };

  // Effects

  useEffect(() => {
    props.navigation.setParams({ HeaderTitle: 'CONFIRMAR' });
  }, [props.navigation]);

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
