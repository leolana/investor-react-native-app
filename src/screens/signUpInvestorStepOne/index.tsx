import React, { useState, useEffect } from 'react';

import { SafeAreaView, Button, ButtonText } from './styles';

import { Select } from '../../components';

export const SignUpInvestorStepOneComponent = (props) => {
  // states

  const [gender, setGender] = useState('');

  const [nationality, setNationality] = useState('');

  const [disabled, setDisabled] = useState(true);

  // vars

  const optionsGender = [
    { text: 'Masculino', value: 1 },
    { text: 'Feminino', value: 2 },
  ];

  const optionsNationality = [
    { text: 'Brasileiro (a) Nato (a)', value: 1 },
    { text: 'Brasileiro (a) Naturalizado (a)', value: 2 },
    { text: 'Estrangeiro (a)', value: 3 },
  ];

  // effect

  useEffect(() => {
    setDisabled(nationality === '' || gender === '');
  }, [gender, nationality]);

  // render

  return (
    <SafeAreaView>
      <Select title="Sexo" options={optionsGender} onValueChange={(obj) => setGender(obj.value)} value={gender} />

      <Select
        title="Nacionalidade"
        options={optionsNationality}
        onValueChange={(obj) => setNationality(obj.value)}
        value={nationality}
      />

      <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepTwo')}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepOne = {
  screen: SignUpInvestorStepOneComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
