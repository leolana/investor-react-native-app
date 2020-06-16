/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { SafeAreaView, Button, ButtonText, Title, Text, Container, ContainerTitle, Note } from './styles';

import { ExpoCamera } from '../../components/camera';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepNineComponent = (props) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [setPhoto] = useState(null);
  const idInvestidor = useSelector(store => store.investor.dadosInvestidor._id);

  const setOpenCamera = (value) => {
    setIsCameraVisible(value);
  };

  console.log('toma esse id', idInvestidor);

  return (
    <SafeAreaView>
      <Title>Documento de identidade</Title>

      <Note>É necessário estar em seu nome (RG ou CNH)</Note>

      <Container>
        <ContainerTitle>Enviar frente e verso</ContainerTitle>

        <Button onPress={() => setOpenCamera(true)}>
          <ButtonText>ABRIR CÂMERA</ButtonText>
        </Button>
      </Container>

      <ExpoCamera
        isVisible={isCameraVisible}
        navigation={props.navigation}
        step={'SignUpInvestorStepEleven'}
        setOpenCamera={(value) => setOpenCamera(value)}
        idInvestidor={idInvestidor}
      />
    </SafeAreaView>
  );
};

export const SignUpInvestorStepNine = {
  screen: SignUpInvestorStepNineComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
