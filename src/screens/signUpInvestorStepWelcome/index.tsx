import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import { useSelector } from 'react-redux';

import { tealish } from '../../assets/colors';
import { SafeAreaView, Title, Text, Note, Logo, Button, ButtonText, ScrollView } from './styles';

import { getIdInvestidor } from '../../store/actions/walletRequest';
import onInit from '../../store/actions/getAccountData';

export const SignUpInvestorStepWelcomeComponent = (props) => {
  const email = useSelector((store) => store.account.accountData.Email);
  const logoSize = 100;

  useEffect(() => {
    getIdInvestidor(email);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <Logo fill={tealish} width={logoSize} height={logoSize} />
        <View>
          <Title>Queremos dar as boas-vindas! </Title>

          <Text>Agora precisamos de algumas informações para continuar seu cadastro de investidor!</Text>

          <Note> Os campos com * são de preenchimento obrigatório!</Note>

          <Button onPress={() => props.navigation.navigate('SignUpInvestorStepOne')}>
            <ButtonText>CONTINUAR CADASTRO</ButtonText>
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export const SignUpInvestorStepWelcome = {
  screen: SignUpInvestorStepWelcomeComponent,
  navigationOptions: {
    headerTitle: '',
  },
};
