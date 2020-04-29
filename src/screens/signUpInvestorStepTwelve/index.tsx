import React from 'react';
import { TouchableOpacity } from 'react-native';

import { SafeAreaView, Button, ButtonText, Title, Text, Container, ContainerTitle, Note } from './styles';

export const SignUpInvestorStepTwelveComponent = (props) => {
  return (
    <SafeAreaView>
      <Title>Comprovante de residência</Title>

      <Note>É necessário estar em seu nome ou em nome de seus pais</Note>

      <Container>
        <ContainerTitle>Enviar Frente</ContainerTitle>

        <Note>Conta de luz, água, telefone, fatura do cartão, tv a cabo e plano de saúde dos últimos 3 meses.</Note>

        <Button>
          <ButtonText>ABRIR CÂMERA</ButtonText>
        </Button>
      </Container>

      <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('SignUpInvestorStepThirteen')}> CONTINUAR DEPOIS </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepTwelve = {
  screen: SignUpInvestorStepTwelveComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
