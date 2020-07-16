import React, { useEffect } from 'react';

import { SafeAreaView, Title, Text, Button, ButtonText } from './styles';

import { white } from '../../assets/colors';

import onInit from '../../store/actions/getAccountData';

export const SignUpSuccessComponent = (props) => {
  const { navigation } = props;

  // const avancarCadastro = async () => {
  //   const resp = await Request.GET({
  //     url: UrlContaPegar,
  //     header: 'bearer',
  //   });

  //   if (resp.status === 200) {
  //     console.log('account data aqui', resp.data);
  //     navigation.navigate('SignUpInvestorStepWelcome');
  //     // Store.dispatch(setAccountData(resp.data));
  //   }
  // };

  const pegarDadosConta = async () => {
    const success = await onInit();

    console.log('account data aqui', success);
    if (success) navigation.navigate('Opportunities', { authenticated: true });
  };

  return (
    <SafeAreaView>
      <Title>O 1º passo para você fazer parte da IOUU foi concluído com sucesso!</Title>

      <Text>
        O próximo passo é completar o <Text bold={true}>cadastro de investidor</Text>, preencher o formulário de
        suitability e aguardar o processo de análise e aprovação para começar a investir nas oportunidades da
        plataforma.
      </Text>

      {/* <Button marginTop="32" onPress={avancarCadastro}>
        <ButtonText>Quero completar meu cadastro</ButtonText>
      </Button> */}

      <Button onPress={pegarDadosConta}>
        <ButtonText color={white}>Ver as oportunidades</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpSuccess = {
  screen: SignUpSuccessComponent,
  navigationOptions: {
    headerTitle: '',
  },
};
