import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { Loading } from '../../components';

import { Request, UrlLocalizacaoCEPPegar } from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, TextInput, ScrollView, Label, Container } from './styles';

export const SignUpInvestorStepSixComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState('');
  const [CEP, setCEP] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [contentCEP, setContentCEP] = useState('');

  const getCEP = async () => {
    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({ url: UrlLocalizacaoCEPPegar(CEP) });

    if (resp.status === 200) setContentCEP(resp.data);
    else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');

    setLoading(false);
  };

  // useEffect(() => {
  //     setDisabled(CEP === '' || street === ''   || state === '' || city === '' || neighborhood === ''
  //     )
  // }, [CEP, street, state, city, neighborhood])

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <Label>CEP</Label>
          <Container>
            <TextInputMask type={'zip-code'} value={CEP} onChangeText={(value) => setCEP(value)} style={Styles.input} />

            <Button onPress={getCEP}>
              <ButtonText>Buscar</ButtonText>
            </Button>
          </Container>

          <Loading loading={loading}>
            <TextInput title={'Logradouro'} value={contentCEP.logradouro} onChangeText={(value) => setStreet(value)} />

            <TextInput title={'Número'} onChangeText={(value) => setNumber(value)} keyboardType={'numeric'} />

            <TextInput title={'Complemento'} onChangeText={(value) => setComplement(value)} />
            <TextInput title={'Cidade'} value={contentCEP.localidade} onChangeText={(value) => setCity(value)} />

            <TextInput title={'Bairro'} value={contentCEP.bairro} onChangeText={(value) => setNeighborhood(value)} />
            <TextInput title={'Estado'} value={contentCEP.uf} onChangeText={(value) => setState(value)} />

            <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepSeven')}>
              <ButtonText>Continuar</ButtonText>
            </Button>
          </Loading>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const SignUpInvestorStepSix = {
  screen: SignUpInvestorStepSixComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
