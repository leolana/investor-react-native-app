import React, { useState } from 'react';

import { Divisor, ItemTitle, ItemText, Table, TableText, TableRow, TableSpotlightText } from './styles';

import { Buttom, ButtomText } from '../../styles';

import { formatPercent, formatMoney } from '../../../../utils';

import {
  Request,
  UrlReservationCreate,
  UrlSolicitacaoReservaPegar,
  UrlReservationCreateBankSlip,
} from '../../../../services';

import { withNavigation } from 'react-navigation';

import { Alert } from 'react-native';

import { Loading } from '../../../../components';
import { useSelector } from 'react-redux';

export const ConfirmationStepComponent = (props) => {
  // Props

  const { data } = props;
  const [loading, setLoading] = useState(false);
  const email = useSelector((store) => store.account.accountData.Email);

  // Methods

  const invest = async () => {
    setLoading(true);

    const config = {
      Boleto: {},
      Valor: Number.parseFloat(data.value),
      ReInvestimento: Number.parseFloat(data.reinvestmentValue),
      listaEspera: data.waitingList,
    };

    const dataVencimento = new Date();
    dataVencimento.setDate(dataVencimento.getDate() + 1);

    const priceCents = (data.value - data.reinvestmentValue) * 100;

    const boleto = {
      Boleto: {
        due_date: dataVencimento,
        email: email,
        items: [
          {
            description: `Oportunidade: # ${data.IdOportunidade} ${data.Empresa.RazaoSocial}`,
            quantity: 1,
            price_cents: parseInt(priceCents.toFixed(2)),
          },
        ],
      },
    };

    const resp = await Request.POST({
      url: UrlReservationCreate(data._id),
      data: config,
      header: 'bearer',
    });

    if (resp.status !== 200) {
      setLoading(false);

      Alert.alert(resp.data.Error);

      return props.navigation.navigate('OpportunitieProfile', { data });
    }

    const reservaId = resp.data._id;

    await Request.POST({
      url: UrlReservationCreateBankSlip(reservaId),
      header: 'bearer',
      data: boleto,
    });

    const respconfirm = await Request.GET({ url: UrlSolicitacaoReservaPegar(reservaId) });

    if (data.waitingList) {
      setLoading(false);

      props.navigation.navigate('OpportunitieProfile', { data });

      props.navigation.navigate('InvestWaitingListSuccessModal');
    } else if (Number.parseFloat(data.value) === Number.parseFloat(data.reinvestmentValue)) {
      setLoading(false);

      props.navigation.navigate('Opportunities');
    } else if (respconfirm.status === 200) {
      const urlBoleto = respconfirm.data.Boleto.secure_url;

      props.onBoletoChange(urlBoleto);

      setLoading(false);

      props.onStepChange(2);

      props.navigation.navigate('PaymentStepComponent', { data });
    } else {
      setLoading(false);
      Alert.alert('Erro ao gerar boleto');
      props.onStepChange(0);
      props.navigation.navigate('OpportunitieProfile', { data });
    }
  };

  // Render

  return (
    <Loading loading={loading}>
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
    </Loading>
  );
};

export const ConfirmationStep = withNavigation(ConfirmationStepComponent);
