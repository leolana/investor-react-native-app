import React, { useEffect } from 'react';

import { IconCheckAll } from '../../assets/icons';

import { Modal } from '../../components';

import { Container, Title } from './styles';

import { greenTwo } from '../../assets/colors';

import { withNavigation } from 'react-navigation';

export const TransferWalletBalanceSuccessModal = (props) => {
  useEffect(() => {
    setTimeout(() => props.navigation.goBack(), 2200);
  }, [props.navigation]);

  return (
    <Modal height={290}>
      <Container>
        <IconCheckAll width={64} height={64} fill={greenTwo} />

        <Title>Transferência efetuada com sucesso</Title>
      </Container>
    </Modal>
  );
};

export const TransferWalletBalanceSuccess = {
  screen: withNavigation(TransferWalletBalanceSuccessModal),
  navigationOptions: {
    gestureResponseDistance: { vertical: 0 },
  },
};
