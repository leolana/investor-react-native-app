import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import Camera from '../../components/camera';

import { SafeAreaView, Button, ButtonText, Title, Text, Container, ContainerTitle, Note } from './styles';

export const SignUpInvestorStepNineComponent = (props) => {
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
      <Title>Documento de identidade</Title>

      <Note>É necessário estar em seu nome (RG ou CNH)</Note>

      <Container>
        <ContainerTitle>Enviar Frente</ContainerTitle>

        <Button
          onPress={() => {
            setOpenCamera(true);
          }}
        >
          <ButtonText>ABRIR CÂMERA</ButtonText>
        </Button>
      </Container>

      <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('SignUpInvestorStepTen')}> CONTINUAR DEPOIS </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
                <Text onPress={() => props.navigation.navigate('Opportunities')}> CONTINUAR DEPOIS </Text>
            </TouchableOpacity> */}

      <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
        setOpenCamera={setOpenCamera}
        props={props}
        nextStep={'SignUpInvestorStepTen'}
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
