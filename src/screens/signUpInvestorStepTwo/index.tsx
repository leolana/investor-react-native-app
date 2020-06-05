import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import {
  Request,
  UrlLocalizacaoEstadosPegar,
  UrlLocalizacaoCidadesPegar,
  UrlCadastroInvestidorAtualizar,
} from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, Label, Error } from './styles';

import { Select } from '../../components';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepTwoComponent = (props) => {
  // states

  const [disabled, setDisabled] = useState(true);
  const [valid, setValid] = useState(true);
  const [DataNascimento, setDataNascimento] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [Naturalidade, setNaturalidade] = useState();
  const [NaturalidadeCidade, setNaturalidadeCidade] = useState('');
  const [apiState, setApiState] = useState([
    {
      id: '',
      text: '',
      value: '',
    },
  ]);
  const [apiCity, setApiCity] = useState([
    {
      id: '',
      text: '',
      value: '',
    },
  ]);

  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  const formatDate = () => {
    let data = dataNasc;
    if (!data.includes('/')) return '--/--/----';

    data = data.split('/');

    data = `${data[2]}/${data[1]}/${data[0]}`;

    return new Date(data).toISOString();
  };

  const Investidor = {
    DataNascimento,
    Naturalidade,
    NaturalidadeCidade,
  };

  function mapApiState() {
    const optionsState = apiState.map((resp) => {
      return {
        text: resp.nome,
        value: resp.sigla,
      };
    });
    return optionsState;
  }

  const atualizarDadosInvestidor = async () => {
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 1),
      data: Investidor,
      header: 'bearer',
    });

    console.log('passo 2', resp.data);
    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepThree');
    }
  };

  async function getStates() {
    const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar });

    if (resp.status === 200) setApiState(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  }

  async function getCities() {
    const resp = await Request.GET({
      url: UrlLocalizacaoCidadesPegar(Naturalidade),
    });

    if (resp.status === 200) {
      setApiCity(resp.data);
      console.log('ai as cidade', apiCity);
    } else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  }

  function mapApiCity() {
    getCities();

    const optionsCities = apiCity.map((resp) => {
      return {
        text: resp.nome,
        value: resp.nome,
      };
    });

    return optionsCities;
  }

  async function myAsyncEffect() {
    await getStates();
  }

  const isOfAge = (year) => {
    const courentYear = new Date().getFullYear();
    const teste = courentYear - year;

    if (teste < 18) return false;
    else return true;
  };

  const validateDate = () => {
    let valid = false;
    const regex = new RegExp('^([0-9]{2})/([0-9]{2})/([0-9]{4})$');
    const matches = regex.exec(dataNasc);

    if (matches != null) {
      const day = parseInt(matches[1], 10);
      const month = parseInt(matches[2], 10) - 1;
      const year = parseInt(matches[3], 10);
      const date = new Date(year, month, day, 0, 0, 0, 0);
      valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
      valid = isOfAge(year);
    }

    if (valid) {
      setValid(true);
      setDataNascimento(formatDate());
    } else setValid(false);
  };

  useEffect(() => {
    myAsyncEffect();
  }, []);

  useEffect(() => {
    setDisabled(!valid || dataNasc === '' || Naturalidade === '' || NaturalidadeCidade === '');
  }, [valid, dataNasc, Naturalidade, NaturalidadeCidade]);

  return (
    <SafeAreaView>
      <Label>Data de nascimento *</Label>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={dataNasc}
        onChangeText={(value) => setDataNasc(value)}
        style={Styles.input}
        onBlur={validateDate}
      />
      {!valid ? (
        <Error>Você deve ser maior de 18 anos ou inserir uma data válida</Error>
      ) : (
        <View style={{ marginBottom: 30 }} />
      )}

      <Select
        title={'Estado de nascimento *'}
        options={mapApiState()}
        onValueChange={(obj) => setNaturalidade(obj.value)}
        value={Naturalidade}
      />
      <Select
        title={'Cidade de nascimento *'}
        options={mapApiCity()}
        onValueChange={(obj) => setNaturalidadeCidade(obj.value)}
        value={NaturalidadeCidade}
      />

      <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepTwo = {
  screen: SignUpInvestorStepTwoComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
