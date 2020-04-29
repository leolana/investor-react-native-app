import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Styles, { SafeAreaView, Button, ButtonText, Label } from './styles';

import { Select } from '../../components';

export const SignUpInvestorStepFourComponent = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');

  const optionsMaritalStatus = [
    { text: 'Solteiro (a)', value: 1 },
    { text: 'Casado (a)', value: 2 },
    { text: 'Divorciado (a)', value: 3 },
    { text: 'Viúvo (a)', value: 4 },
  ];

  useEffect(() => {
    setDisabled(maritalStatus === '' || cpf === '' || phone === '' || cellPhone === '');
  }, [maritalStatus, cpf, phone, cellPhone]);

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <Label>CPF</Label>
        <TextInputMask type={'cpf'} value={cpf} onChangeText={(value) => setCPF(value)} style={Styles.input} />

        <Select
          title="Estado civil"
          options={optionsMaritalStatus}
          onValueChange={(obj) => setMaritalStatus(obj.value)}
          value={maritalStatus}
        />

        <Label>Celular</Label>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={cellPhone}
          onChangeText={(value) => setCellPhone(value)}
          style={Styles.input}
        />

        <Label>Telefone</Label>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={phone}
          onChangeText={(value) => setPhone(value)}
          style={Styles.input}
        />

        <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepFive')}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const SignUpInvestorStepFour = {
  screen: SignUpInvestorStepFourComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
