import React, { useState } from 'react';

import { Container, Title, Text, Info, Buttom, ButtomText, TextInput } from './styles';

import { useSelector } from 'react-redux';

import { TouchableOpacity, Alert } from 'react-native';

import { Request, UrlCarteiraEnviarTransferencia } from '../../services';

export const TransferWalletBalanceConfirmationComponent = (props) => {
  // Props

  const { navigation } = props;

  const transferData = navigation.getParam('transferData', null);

  // States

  const [password, setPassword] = useState('');

  // Vars

  const accountData = useSelector((store) => store.account.accountData);

  // Methods

  const subimitTransfer = async () => {
    if (password === '' || transferData === null || password === null) return;

    const { investorId, dateToTransfer, balanceToTransfer, bankData } = transferData;

    const carteira = {
      Data: new Date(dateToTransfer).toISOString(),
      Valor: balanceToTransfer,
      DadosBancarios: bankData,
      InvestidorId: investorId,
    };

    const resp = await Request.PUT({
      url: UrlCarteiraEnviarTransferencia,
      data: carteira,
      header: 'bearer',
    });

    console.log('MINHA RESP', resp.data);
    if (resp.status !== 200) {
      Alert.alert(resp.data.Error);

      navigation.navigate('Wallet');
    } else if (resp.data.msg === 'SaldoInsuficiente') {
      Alert.alert('SaldoInsuficiente');

      navigation.navigate('Wallet');
    } else {
      navigation.navigate('Wallet');

      navigation.navigate('TransferWalletBalanceSuccess');
    }
  };

  // Effects

  // Render

  return (
    <Container>
      <Title>{accountData.Nome}, informe sua senha!</Title>

      <Info>Por favor insira sua senha no campo abaixo para finalizar seu pedido de transferência.</Info>

      <TextInput secureTextEntry={true} onChangeText={(value) => setPassword(value)} />

      <Buttom enabled={password} onPress={() => subimitTransfer()}>
        <ButtomText>ASSINAR</ButtomText>
      </Buttom>

      <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </Container>
  );
};

export const TransferWalletBalanceConfirmation = {
  screen: TransferWalletBalanceConfirmationComponent,
  navigationOptions: {
    headerTitle: 'INFORME SUA SENHA',
  },
};
