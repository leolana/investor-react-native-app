import React, { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';

import { tealish } from '../../assets/colors';

import {
  SafeAreaView,
  Title,
  Text,
  Note,
  TextOpportunities,
  TextSuitability,
  Logo,
  ScrollView,
  Button,
} from './styles';

import onInit from '../../store/actions/getAccountData';

export const SignUpInvestorStepFifteenComponent = (props) => {
  const logoSize = 100;

  const avancarTelaInicial = async () => {
    const success = await onInit();
    if (success) props.navigation.navigate('Opportunities', { authenticated: true });
    // else alert('Ocorreu um erro. Por favor tente mais tarde.');
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <Logo fill={tealish} width={logoSize} height={logoSize} />

        <Title>Seu cadastro de investidor foi concluído com sucesso</Title>

        <Text>Agora, farermos uma análise e em até 24 horas você receberá uma resposta.</Text>

        <Note>
          Ah, não esqueça de preencher o formulário de suitability, ele é muito importante para mapear o seu perfil de
          investimento e indicamos os produtos, serviços e operações mais adequadas às suas necessidades.
        </Note>

        <Button onPress={() => props.navigation.navigate('SuitabilityWelcome')}>
          <TextSuitability>PREENCHER O SUITABILITY</TextSuitability>
        </Button>

        <Button onPress={avancarTelaInicial}>
          <TextOpportunities>VER OPORTUNIDADES</TextOpportunities>
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
};

export const SignUpInvestorStepFifteen = {
  screen: SignUpInvestorStepFifteenComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
