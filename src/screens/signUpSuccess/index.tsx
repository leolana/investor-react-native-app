import React from 'react';

import { SafeAreaView, Title, Text, Button, ButtonText } from './styles';

import { black } from '../../assets/colors';

export const SignUpSuccess = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Title>O 1º passo para você fazer parte da IOUU foi concluído com sucesso!</Title>

      <Text>
        O próximo passo é completar o <Text bold={true}>cadastro de investidor</Text>, preencher o formulário de
        suitability e aguardar o processo de análise e aprovação para começar a investir nas oportunidades da
        plataforma.
      </Text>

      <Button marginTop="32" onPress={() => navigation.navigate('SignUpInvestorStepOne')}>
        <ButtonText>Quero completar meu cadastro</ButtonText>
      </Button>

      <Button background="transparent" onPress={() => navigation.navigate('Opportunities')}>
        <ButtonText color={black}>Quero ver as oportunidades</ButtonText>
      </Button>
    </SafeAreaView>
  );
};
