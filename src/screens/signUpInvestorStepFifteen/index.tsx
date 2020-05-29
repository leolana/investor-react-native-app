import React, { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';

import { tealish } from '../../assets/colors';

import { SafeAreaView, Title, Text, Note, TextOpportunities, TextSuitability, Logo, ScrollView } from './styles';

export const SignUpInvestorStepFifteenComponent = (props) => {
  const logoSize = 100;

  return (
    <ScrollView>
      <SafeAreaView>
        <Logo fill={tealish} width={logoSize} height={logoSize} />

        <Title>Cadastro concluído com sucesso</Title>

        <Text>Agora, farermos uma análise e em até 24 horas você receberá uma resposta.</Text>

        <Note>
          Ah, não esqueça de preencher o formulário de suitability, ele é muito importante para mapear o seu perfil de
          investimento e indicamos os produtos, serviços e operações mais adequadas às suas necessidades.
        </Note>

        <TouchableOpacity onPress={() => props.navigation.navigate('SuitabilityWelcome')}>
          <TextSuitability>PREENCHER O SUITABILITY</TextSuitability>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Opportunities')}>
          <TextOpportunities>VER OPORTUNIDADES</TextOpportunities>
        </TouchableOpacity>
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
