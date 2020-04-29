import React, { useState, useEffect, useCallback } from 'react';

import { TextInputMask } from 'react-native-masked-text';

import { Request, UrlLocalizacaoEstadosPegar, UrlLocalizacaoCidadesPegar } from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, Label } from './styles';

import { Select } from '../../components';

export const SignUpInvestorStepTwoComponent = (props) => {
  const [birthday, setBirthday] = useState('');
  const [birthState, setBirthState] = useState();
  const [birthCity, setBirthCity] = useState('');
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

  async function getStates() {
    const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar });

    if (resp.status === 200) setApiState(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  }

  const myAsyncEffect = useCallback(async () => {
    await getStates();
  }, []);

  useEffect(() => {
    myAsyncEffect();
  }, [myAsyncEffect]);

  function mapApiState() {
    const optionsState = apiState.map((resp) => {
      return {
        text: resp.nome,
        value: resp.sigla,
      };
    });
    return optionsState;
  }

  async function getCities() {
    const resp = await Request.GET({ url: UrlLocalizacaoCidadesPegar(birthState) });

    if (resp.status === 200) setApiCity(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
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

  const validateDate = () => {
    const teste = birthday.isValid();

    if (teste) alert('FOI');
  };

  return (
    <SafeAreaView>
      <Label>Data de nascimento</Label>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={birthday}
        onChangeText={(value) => setBirthday(value)}
        style={Styles.input}
      />

      <Select
        title={'Estado de nascimento'}
        options={mapApiState()}
        onValueChange={(obj) => setBirthState(obj.value)}
        value={birthState}
      />
      <Select
        title={'Cidade de nascimento'}
        options={mapApiCity()}
        onValueChange={(obj) => setBirthCity(obj.value)}
        value={birthCity}
      />

      <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepThree')}>
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
