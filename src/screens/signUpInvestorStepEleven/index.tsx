import React from 'react';
import { TouchableOpacity } from 'react-native';

import { SafeAreaView, Button, ButtonText, Title, Text, Note } from './styles';

export const SignUpInvestorStepElevenComponent = (props) => {
  return (
    <SafeAreaView>
      <Title>Documento de identidade</Title>

      <Title>Enviado com sucesso!</Title>

      <Note>O documento enviado está em processo de análise.</Note>

      <Button onPress={() => props.navigation.navigate('SignUpInvestorStepTwelve')}>
        <ButtonText>CONFIRMAR</ButtonText>
      </Button>

      <TouchableOpacity onPress={() => props.navigation.navigate('Opportunities')}>
        <Text> CONTINUAR DEPOIS </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepEleven = {
  screen: SignUpInvestorStepElevenComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
