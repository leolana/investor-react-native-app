/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { ExpoCameraComprovante } from '../../components/cameraComprovante';

import { SafeAreaView, Button, ButtonText, Title, Text, Container, ContainerTitle, Note } from './styles';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepTwelveComponent = (props) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [setPhoto] = useState(null);
  const idInvestidor = useSelector(store => store.investor.dadosInvestidor._id);

  const setOpenCamera = (value) => {
    setIsCameraVisible(value);
  };

  console.log("id que tu que", idInvestidor);

  return (
    <SafeAreaView>
      <Title>Comprovante de residência</Title>

      <Note>É necessário estar em seu nome ou em nome de seus pais</Note>

      <Container>
        <ContainerTitle>Enviar Frente</ContainerTitle>

        <Note>Conta de luz, água, telefone, fatura do cartão, tv a cabo e plano de saúde dos últimos 3 meses.</Note>

        <Button
          onPress={() => {
            setOpenCamera(true);
          }}
        >
          <ButtonText>ABRIR CÂMERA</ButtonText>
        </Button>
      </Container>

      <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('SignUpInvestorStepThirteen')}> CONTINUAR DEPOIS </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('Opportunities')}> CONTINUAR DEPOIS </Text>
      </TouchableOpacity> */}

      <ExpoCameraComprovante
        isVisible={isCameraVisible}
        navigation={props.navigation}
        step={'SignUpInvestorStepThirteen'}
        setOpenCamera={(value) => setOpenCamera(value)}
        idInvestidor={idInvestidor}
      />
    </SafeAreaView>
  );
};

export const SignUpInvestorStepTwelve = {
  screen: SignUpInvestorStepTwelveComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
