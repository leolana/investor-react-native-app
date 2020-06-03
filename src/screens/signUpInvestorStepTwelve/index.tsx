import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import Camera from '../../components/camera';

import { SafeAreaView, Button, ButtonText, Title, Text, Container, ContainerTitle, Note } from './styles';

export const SignUpInvestorStepTwelveComponent = (props) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [setPhoto] = useState(null);

  const setOpenCamera = (value) => {
    setIsCameraVisible(value);
  };

  const onChangePhoto = (newPhoto) => {
    setPhoto(newPhoto);
    setOpenCamera(false);
  };

  const onCloseCamera = () => {
    setOpenCamera(false);
  };

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

      {/* <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
        setOpenCamera={setOpenCamera}
        props={props}
        nextStep={'SignUpInvestorStepThirteen'}
      /> */}
    </SafeAreaView>
  );
};

export const SignUpInvestorStepTwelve = {
  screen: SignUpInvestorStepTwelveComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
