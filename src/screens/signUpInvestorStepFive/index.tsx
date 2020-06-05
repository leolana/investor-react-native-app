/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import Styles, { SafeAreaView, Button, ButtonText, ScrollView, Label, Error, TextInput } from './styles';

import { Select } from '../../components';

import { Request, UrlLocalizacaoEstadosPegar, UrlCadastroInvestidorAtualizar } from '../../services';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepFiveComponent = (props) => {
  //states

  const [disabled, setDisabled] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [RgDataEmissao, setRgDataEmissao] = useState('');
  const [rgData, setRgData] = useState('');
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
  const idInvestidor = useSelector(store => store.investor.dadosInvestidor._id);

  //vars

  const Investidor = {
    RgNumero,
    RgOrgaoEmissor,
    RgEstadoEmissor,
    RgDataEmissao,
  };

  const formatDate = () => {
    let data = rgData;
    if (!data.includes('/')) return '--/--/----';

    data = data.split('/');

    data = `${data[2]}/${data[1]}/${data[0]}`;

    return new Date(data).toISOString();
  };

  const atualizarDadosInvestidor = async () => {
    console.log('RG BEM AQUI', RgDataEmissao);
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 4),
      data: Investidor,
      header: 'bearer',
    });

    if (resp.status === 200) {
      console.log('passo 5', resp.data);
      props.navigation.navigate('SignUpInvestorStepSix');
    }
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
    const matches = regex.exec(rgData);

    if (matches != null) {
      const day = parseInt(matches[1], 10);
      const month = parseInt(matches[2], 10) - 1;
      const year = parseInt(matches[3], 10);
      const date = new Date(year, month, day, 0, 0, 0, 0);
      valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
    }

    if (valid) {
      setValidDate(true);
      setRgDataEmissao(formatDate());
    } else setValidDate(false);
  };

  //effect

  useEffect(() => {
    setDisabled(
      !validDate || rgData === '' || RgEstadoEmissor === '' || RgOrgaoEmissor === '' || RgNumero === '',
    );
  }, [validDate, rgData, RgEstadoEmissor, RgOrgaoEmissor, RgNumero]);

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
            value={rgData}
            onChangeText={(value) => setRgData(value)}
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

          <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
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
