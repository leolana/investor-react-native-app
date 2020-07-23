import React, { useState } from 'react';

import { ModalPaymant, ModalInvestment, ModalDeposit, ModalTransfer } from './components';

import { Container, Backdrop } from './styles';
import { TouchableWithoutFeedback } from 'react-native';

export const WalletSheetModalComponent = (props) => {
  // Props
  const { navigation } = props;

  const data = navigation.getParam('data', null);

  // Vars

  const { Tipo } = data;
  // Methods

  const getHeight = (): number => {
    if (Tipo === 'INVESTIMENTO') return 350;
    else if (Tipo === 'PAGAMENTO') return 280;

    return 200;
  };

  const renderModalByType = () => {
    const obj = {
      PAGAMENTO: <ModalPaymant data={data} navigation={navigation} />,
      TRANSFERENCIA: <ModalTransfer data={data} navigation={navigation} />,
      DEPOSITO: <ModalDeposit data={data} navigation={navigation} />,
      INVESTIMENTO: <ModalInvestment data={data} navigation={navigation} />,
      ESTORNO: <ModalTransfer data={data} navigation={navigation} />,
    };

    return obj[Tipo];
  };

  // Render

  return (
    <>
      <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
        <Backdrop />
      </TouchableWithoutFeedback>
      <Container height={getHeight()}>{renderModalByType()}</Container>
    </>
  );
};

export const WalletSheetModal = {
  screen: WalletSheetModalComponent,
};
