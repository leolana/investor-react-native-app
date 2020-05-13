import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Styles, { SafeAreaView, Button, ButtonText, ScrollView, Label, Error, TextInput } from './styles';

import { Select } from '../../components';

import { Request, UrlLocalizacaoEstadosPegar } from '../../services';

export const SignUpInvestorStepFiveComponent = (props) => {
  //states

  const [disabled, setDisabled] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [RgDataEmissao, setRgDataEmissao] = useState('');
  const [RgEstadoEmissor, setRgEstadoEmissor] = useState('');
  const [RgOrgaoEmissor, setRgOrgaoEmissor] = useState('');
  const [RgNumero, setRgNumero] = useState('');
  const [apiState, setApiState] = useState([
    {
      id: '',
      text: '',
      value: '',
    },
  ]);

  //vars

  const Investidor = {
    RgNumero,
    RgOrgaoEmissor,
    RgEstadoEmissor,
    RgDataEmissao,
  };

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

  //validate functions

  const validateDate = () => {
    let valid = false;
    const regex = new RegExp('^([0-9]{2})/([0-9]{2})/([0-9]{4})$');
    const matches = regex.exec(RgDataEmissao);

    if (matches != null) {
      const day = parseInt(matches[1], 10);
      const month = parseInt(matches[2], 10) - 1;
      const year = parseInt(matches[3], 10);
      const date = new Date(year, month, day, 0, 0, 0, 0);
      valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
    }

    if (valid) setValidDate(true);
    else setValidDate(false);
  };

  //effect

  useEffect(() => {
    setDisabled(
      !validDate || RgDataEmissao === '' || RgEstadoEmissor === '' || RgOrgaoEmissor === '' || RgNumero === '',
    );
  }, [validDate, RgDataEmissao, RgEstadoEmissor, RgOrgaoEmissor, RgNumero]);

  // render

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <SafeAreaView>
          <TextInput title={'RG'} onChangeText={(value) => setRgNumero(value)} value={RgNumero} />

          <Label>Data de emissão</Label>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={RgDataEmissao}
            onChangeText={(value) => setRgDataEmissao(value)}
            onBlur={validateDate}
            style={Styles.input}
          />
          {!validDate ? <Error>Você deve inserir uma data válida</Error> : <View style={{ marginBottom: 30 }} />}

          <Select
            title="Orgão emissor"
            options={opcoesOrgaoEmissor}
            onValueChange={(obj) => setRgOrgaoEmissor(obj.value)}
            value={RgOrgaoEmissor}
          />

          <Select
            title="Estado de emissão"
            options={mapApiState()}
            onValueChange={(obj) => setRgEstadoEmissor(obj.value)}
            value={RgEstadoEmissor}
          />

          <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepSix')}>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const SignUpInvestorStepFive = {
  screen: SignUpInvestorStepFiveComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
