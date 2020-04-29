import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { Select } from '../../components';

import { Request, UrlLocalizacaoEstadosPegar } from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, TextInput, ScrollView, Label, Container } from './styles';

export const SignUpInvestorStepFiveComponent = (props) => {
  const [disabled, setDisabled] = useState('');
  const [emissionDate, setEmissionDate] = useState('');
  const [emissionState, setEmissionState] = useState('');
  const [emissonOrgan, setEmissionOrgan] = useState('');
  const [rg, setRg] = useState('');
  const [apiState, setApiState] = useState([
    {
      id: '',
      text: '',
      value: '',
    },
  ]);

  async function getStates() {
    const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar });

    if (resp.status === 200) setApiState(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  }

  function mapApiState() {
    getStates();

    const optionsState = apiState.map((resp) => {
      return {
        text: resp.sigla,
        value: resp.sigla,
      };
    });
    return optionsState;
  }

  const opcoesOrgaoEmissor = [
    { text: 'SSP', value: 'SSP' },
    { text: 'PM', value: 'PM' },
    { text: 'PC', value: 'PC' },
    { text: 'CNT', value: 'CNT' },
    { text: 'DIC', value: 'DIC' },
    { text: 'CTPS', value: 'CTPS' },
    { text: 'FGTS', value: 'FGTS' },
    { text: 'IFP', value: 'IFP' },
    { text: 'IPF', value: 'IPF' },
    { text: 'IML', value: 'IML' },
    { text: 'MTE', value: 'MTE' },
    { text: 'MMA', value: 'MMA' },
    { text: 'MAE', value: 'MAE' },
    { text: 'MEX', value: 'MEX' },
    { text: 'POF', value: 'POF' },
    { text: 'POM', value: 'POM' },
    { text: 'SES', value: 'SES' },
    { text: 'SJS', value: 'SJS' },
    { text: 'SJTS', value: 'SJTS' },
    { text: 'ZZZ', value: 'ZZZ' },
  ];

  // useEffect(() => {
  //     setDisabled(CEP === '' || street === ''   || state === '' || city === '' || neighborhood === ''
  //     )
  // }, [CEP, street, state, city, neighborhood])

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <TextInput title={'RG'} onChangeText={(value) => setRg(value)} />

          <Select
            title="Orgão emissor"
            options={opcoesOrgaoEmissor}
            onValueChange={(obj) => setEmissionOrgan(obj.value)}
            value={emissonOrgan}
          />

          <Select
            title="Estado de emissão"
            options={mapApiState()}
            onValueChange={(obj) => setEmissionState(obj.value)}
            value={emissionState}
          />

          <Label>Data de emissão</Label>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={emissionDate}
            onChangeText={(value) => setEmissionDate(value)}
            style={Styles.input}
          />

          <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepSix')}>
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
