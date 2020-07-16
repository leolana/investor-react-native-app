import React, { useEffect } from 'react';

import { IconCheckAll } from '../../assets/icons';

import { Modal } from '../../components';

import { Container, Title, Text } from './styles';

import { greenTwo } from '../../assets/colors';

import { useSelector } from 'react-redux';

export const CCBSignSuccessComponent = (props) => {
  const name = useSelector((store) => store.account.accountData.Nome);

  useEffect(() => {
    setTimeout(() => props.navigation.goBack(), 2200);
  }, [props.navigation]);

  return (
    <Modal height={290}>
      <Container>
        <IconCheckAll width={64} height={64} fill={greenTwo} />

        <Title>Obrigado {name}.</Title>

        <Text>Sua CCB foi assinada com sucesso!</Text>
      </Container>
    </Modal>
  );
};

export const CCBSignSuccess = {
  screen: CCBSignSuccessComponent,
  navigationOptions: {
    gestureResponseDistance: { vertical: 0 },
  },
};
