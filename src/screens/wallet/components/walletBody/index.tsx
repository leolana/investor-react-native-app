import React from 'react';

import { withNavigation } from 'react-navigation';

import { Text, Button, IconCoinStyled, ButtonsArea } from './styles';

export const WalletBodyComponent = (props) => (
  <ButtonsArea>
    <Button onPress={() => props.navigation.navigate('Opportunities')}>
      <>
        <IconCoinStyled width={24} height={24} />
        <Text> REINVESTIR </Text>
      </>
    </Button>

    <Button onPress={() => props.navigation.navigate('TransferWalletBalance')}>
      <Text> REALIZAR SAQUE </Text>
    </Button>
  </ButtonsArea>
);

export const WalletBody = withNavigation(WalletBodyComponent);
