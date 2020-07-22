/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View, Alert } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { SafeAreaView, Button, ButtonText, Label, Error, ScrollView } from './styles';

import { Select } from '../../components';
import { useSelector } from 'react-redux';

import Styles from './styles';

import { Request, UrlCadastroInvestidorAtualizar, UrlPegarCpfInvestidor } from '../../services';

export const SignUpInvestorStepFourComponent = (props) => {
  //states

  const [disabled, setDisabled] = useState(true);
  const [validCpf, setValidCpf] = useState(true);
  const [Cpf, setCpf] = useState('');
  const [validCellPhone, setValidCellPhone] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [TelefoneFixo, setTelefoneFixo] = useState('');
  const [Celular, setCelular] = useState('');
  const [EstadoCivil, setEstadoCivil] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  //vars

  const Investidor = {
    Cpf,
    TelefoneFixo,
    Celular,
    EstadoCivil,
  };

  const atualizarDadosInvestidor = async (): Promise<void> => {
    const resp2 = await Request.GET({
      url: UrlPegarCpfInvestidor(Cpf.replace(/[^\d]+/g, '')),
      data: {},
      header: 'bearer',
    });

    if (resp2.data.Cpf !== undefined) {
      Alert.alert('CPF já cadastrado');
    } else {
      const resp = await Request.PUT({
        url: UrlCadastroInvestidorAtualizar(idInvestidor, 3),
        data: Investidor,
        header: 'bearer',
      });

      if (resp.status === 200) {
        props.navigation.navigate('SignUpInvestorStepFive');
      }
    }
  };

  const optionsMaritalStatus = [
    { text: 'Solteiro (a)', value: 1 },
    { text: 'Casado (a)', value: 2 },
    { text: 'Divorciado (a)', value: 3 },
    { text: 'Viúvo (a)', value: 4 },
  ];

  //validate functions
  const isValidPhone = (phone) => {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    const valid = regex.test(phone);

    return valid;
  };

  const validateCpf = () => {
    const CPF = Cpf.replace(/[^\d]+/g, '');

    if (CPF == '') return false;

    // Elimina CPFs invalidos conhecidos
    if (
      CPF.length != 11 ||
      CPF == '00000000000' ||
      CPF == '11111111111' ||
      CPF == '22222222222' ||
      CPF == '33333333333' ||
      CPF == '44444444444' ||
      CPF == '55555555555' ||
      CPF == '66666666666' ||
      CPF == '77777777777' ||
      CPF == '88888888888' ||
      CPF == '99999999999'
    )
      return false;

    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(CPF.charAt(i)) * (10 - i);
    let result = 11 - (add % 11);

    if (result == 10 || result == 11) result = 0;

    if (result != parseInt(CPF.charAt(9))) return false;

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(CPF.charAt(i)) * (11 - i);
    result = 11 - (add % 11);

    if (result == 10 || result == 11) result = 0;

    if (result != parseInt(CPF.charAt(10))) return false;

    return true;
  };

  //effect

  useEffect(() => {
    setDisabled(
      !validCellPhone ||
        !validPhone ||
        TelefoneFixo === '' ||
        Celular === '' ||
        !validCpf ||
        Cpf === '' ||
        EstadoCivil === '',
    );
  }, [validCellPhone, validPhone, TelefoneFixo, Celular, validCpf, Cpf, EstadoCivil]);

  // render

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <SafeAreaView>
          <Label>CPF *</Label>
          <TextInputMask
            type={'cpf'}
            value={Cpf}
            onChangeText={(value) => setCpf(value)}
            style={Styles.input}
            onBlur={() => setValidCpf(validateCpf())}
          />
          {!validCpf ? <Error>Você deve inserir um CPF válido</Error> : <View style={{ marginBottom: 30 }} />}

          <Label>Celular *</Label>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={Celular}
            onChangeText={(value) => setCelular(value)}
            style={Styles.inputMargin}
            onBlur={() => setValidCellPhone(isValidPhone(Celular))}
          />

          {!validCellPhone ? <Error>Você deve inserir um número válido</Error> : <View style={{ marginBottom: 30 }} />}

          <Label>Telefone *</Label>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={TelefoneFixo}
            onChangeText={(value) => setTelefoneFixo(value)}
            style={Styles.inputMargin}
            onBlur={() => setValidPhone(isValidPhone(TelefoneFixo))}
          />

          {!validPhone ? <Error>Você deve inserir um número válido</Error> : <View style={{ marginBottom: 30 }} />}

          <Select
            title="Estado civil *"
            options={optionsMaritalStatus}
            onValueChange={(obj) => setEstadoCivil(obj.value)}
            value={EstadoCivil}
          />

          <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const SignUpInvestorStepFour = {
  screen: SignUpInvestorStepFourComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
