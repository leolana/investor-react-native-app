import React, { useEffect } from 'react';

import { tealish } from '../../assets/colors';

import { SafeAreaView, Title, Text, Note, Logo, Button, ButtonText } from './styles';

import { getSuitabilityId } from '../../store/actions/walletRequest';
import { useSelector } from 'react-redux';

export const FormSuitabilityWelcome = (props) => {
  const logoSize = 100;

  const idSuitability = useSelector((store) => store.investor.dadosSuitability);

  console.log('id welcome', idSuitability);

  useEffect(() => {
    getSuitabilityId();
  }, []);

  return (
    <SafeAreaView>
      <Logo fill={tealish} width={logoSize} height={logoSize} />

      <Title>Cadastro de Suitability </Title>

      <Text>
        Sua finalidade é definir seu perfil de investidor e, a partir disso, adequá-lo ao melhor tipo de investimento.
      </Text>

      <Note>Esse formulário pode levar entre 8 e 10 minutos para ser preenchido e consiste em 4 etapas.</Note>

      <Button onPress={() => props.navigation.navigate('SuitabilityStepOne')}>
        <ButtonText>RESPONDER SUITABILITY</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SuitabilityWelcome = {
  screen: FormSuitabilityWelcome,
  navigationOptions: {
    headerTitle: '',
  },
};
