import React, { useState, useEffect } from 'react';

import { SheetModal } from '../../components';

import { ModalPaymant, ModalInvestment, ModalDeposit, ModalTransfer } from './components';

import { Card } from './styles';

export const WalletSheetModalComponent = (props) => {
  // Props

  const { navigation } = props;

  // Vars

  const data = navigation.getParam('data', null);

  // Methods

  const renderModalByType = () => {
    const { Tipo } = data;

    const obj = {
      PAGAMENTO: <ModalPaymant data={data} />,
      TRANSFERENCIA: <ModalTransfer data={data} />,
      DEPOSITO: <ModalDeposit data={data} />,
      INVESTIMENTO: <ModalInvestment data={data} />,
      EXTORNO: <ModalTransfer data={data} />,
    };

    return obj[Tipo];
  };

  // Render

  return (
    <SheetModal>
      <Card>{renderModalByType()}</Card>
    </SheetModal>
  );
};

export const WalletSheetModal = {
  screen: WalletSheetModalComponent,
  navigationOptions: { gesturesEnabled: false },
};
