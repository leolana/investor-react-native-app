import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { Request, UrlLocalizacaoEstadosPegar, UrlLocalizacaoCidadesPegar } from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, Label, Error } from './styles';
'';
import { Select } from '../../components';

export const SignUpInvestorStepTwoComponent = (props) => {
  // states

  const [disabled, setDisabled] = useState(true);
  const [valid, setValid] = useState(true);
  const [maritalStatus, setMaritalStatus] = useState('');
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

  const getStates = async () => {
    const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar });

    if (resp.status === 200) setApiState(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
  };

  const getCities = async () => {
    const resp = await Request.GET({ url: UrlLocalizacaoCidadesPegar(birthState) });

    if (resp.status === 200) setApiCity(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
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

  const optionsMaritalStatus = [
    { text: 'Solteiro (a)', value: 1 },
    { text: 'Casado (a)', value: 2 },
    { text: 'Divorciado (a)', value: 3 },
    { text: 'Viúvo (a)', value: 4 },
  ];

  const myAsyncEffect = async () => {
    await getStates();
  };

  const isOfAge = (year) => {
    const courentYear = new Date().getFullYear();
    const teste = courentYear - year;

    if (teste < 18) return false;
    else return true;
  };

  const validateDate = () => {
    let valid = false;
    const regex = new RegExp('^([0-9]{2})/([0-9]{2})/([0-9]{4})$');
    const matches = regex.exec(birthday);

    if (matches != null) {
      const day = parseInt(matches[1], 10);
      const month = parseInt(matches[2], 10) - 1;
      const year = parseInt(matches[3], 10);
      const date = new Date(year, month, day, 0, 0, 0, 0);
      valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
      valid = isOfAge(year);
    }

    if (valid) setValid(true);
    else setValid(false);
  };

  useEffect(() => {
    myAsyncEffect();
  }, []);

  useEffect(() => {
    setDisabled(!valid || birthday === '' || birthState === '' || birthCity === '' || maritalStatus === '');
  }, [valid, birthday, birthState, birthCity, maritalStatus]);

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
        onBlur={validateDate}
      />
      {!valid ? (
        <Error>Você deve ser maior de 18 anos ou inserir uma data válida</Error>
      ) : (
        <View style={{ marginBottom: 30 }} />
      )}

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

      <Select
        title="Estado civil"
        options={optionsMaritalStatus}
        onValueChange={(obj) => setMaritalStatus(obj.value)}
        value={maritalStatus}
      />

      <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepThree')}>
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
