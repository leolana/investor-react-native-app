import React, { useState, useEffect } from 'react';

import { SafeAreaView, Button, ButtonText, TextInput } from './styles';

export const SignUpInvestorStepThreeComponent = (props) => {
  //states
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');

  //render
  return (
    <SafeAreaView>
      <TextInput title={'Nome da mãe'} onChangeText={(value) => setMotherName(value)} />

      <TextInput title={'Nome do pai'} onChangeText={(value) => setFatherName(value)} />

      <Button onPress={() => props.navigation.navigate('SignUpInvestorStepFour')}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepThree = {
  screen: SignUpInvestorStepThreeComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};