import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Styles, { SafeAreaView, Button, ButtonText, ScrollView, Label, Error } from './styles';

export const SignUpInvestorStepFiveComponent = (props) => {
  // states

  const [disabled, setDisabled] = useState(false);
  const [validCellPhone, setValidCellPhone] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [phone, setPhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');

  // Validate funcitons

  const isValidPhone = (phone) => {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    const valid = regex.test(phone);

    return valid;
  };

  //effect

  useEffect(() => {
    const isValid: boolean = !validCellPhone || !validPhone || cellPhone === '' || cellPhone === '';
    setDisabled(isValid);
  }, [validCellPhone, validPhone, cellPhone]);

  //render

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
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
            style={Styles.inputMargin}
            onBlur={() => setValidCellPhone(isValidPhone(cellPhone))}
          />

          {!validCellPhone ? <Error>Você deve inserir um número válido</Error> : <View style={{ marginBottom: 30 }} />}

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
            style={Styles.inputMargin}
            onBlur={() => setValidPhone(isValidPhone(phone))}
          />

          {!validPhone ? <Error>Você deve inserir um número válido</Error> : <View style={{ marginBottom: 30 }} />}

          <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepSix')}>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const SignUpInvestorStepFive = {
  screen: SignUpInvestorStepFiveComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
