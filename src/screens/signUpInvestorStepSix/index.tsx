import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { Loading } from '../../components';

import { Request, UrlLocalizacaoCEPPegar, UrlCadastroInvestidorAtualizar, UrlCadastroInvestidorDocs } from '../../services';

import Styles, { SafeAreaView, Button, ButtonText, TextInput, ScrollView, Label, Error } from './styles';
import { useSelector } from 'react-redux';
import investor from '../../store/reducers/investor';

export const SignUpInvestorStepSixComponent = (props) => {
  //states

  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [disabled, setDisabled] = useState('');
  const [Cep, setCep] = useState('');
  const [Logradouro, setLogradouro] = useState('');
  const [Numero, setNumber] = useState(0);
  const [num, setNum] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [Uf, setUf] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Bairro, setBairro] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  const Investidor = {
    Endereco: {
      Cep,
      Bairro,
      Complemento,
      Logradouro,
      Numero,
      Uf,
      Cidade,
    },
  };

  const atualizarDadosInvestidor = async () => {
    Investidor.Endereco.Numero = parseInt(num);
    console.log(typeof(Investidor.Endereco.Numero))
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 5),
      data: Investidor,
      header: 'bearer',
    });

    console.log('passo 6', resp.data);

    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepSeven');
    }
  };

  function contentCep(value) {
    setLogradouro(value.logradouro);
    setUf(value.uf);
    setCidade(value.localidade);
    setBairro(value.bairro);
  }

  const getCEP = async () => {
    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({ url: UrlLocalizacaoCEPPegar(Cep) });

    if (resp.data.erro) setValid(false);

    if (resp.status === 200 && !resp.data.erro) contentCep(resp.data);
    else console.log('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.');
    console.log(resp.data);

    setLoading(false);
  };

  const validaCep = () => {
    if (Cep != '') {
      const validar = /^[0-9]{5}-[0-9]{3}$/;

      if (validar.test(Cep)) {
        setValid(true);
        getCEP();
      } else setValid(false);
    }
  };

  //effect

  useEffect(() => {
    setDisabled(Cep === '' || Logradouro === '' || Uf === '' || Cidade === '' || Bairro === '' || num === '');
  }, [Cep, Logradouro, Uf, Cidade, Bairro, num]);

  //render

  return (
    <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <Label>CEP</Label>
          <TextInputMask
            type={'zip-code'}
            value={Cep}
            onChangeText={(value) => setCep(value)}
            style={Styles.input}
            onBlur={validaCep}
          />
          {!valid ? <Error>Insira um CEP válido</Error> : <View style={{ marginBottom: 30 }} />}
          <Loading loading={loading}>
            <TextInput title={'Logradouro'} value={Logradouro} onChangeText={(value) => setLogradouro(value)} />

            <TextInput title={'Número'} onChangeText={(value) => setNum(value)} keyboardType={'numeric'} />

            <TextInput title={'Complemento'} value={Complemento} onChangeText={(value) => setComplemento(value)} />
            <TextInput title={'Cidade'} value={Cidade} onChangeText={(value) => setCidade(value)} />

            <TextInput title={'Bairro'} value={Bairro} onChangeText={(value) => setBairro(value)} />
            <TextInput title={'Estado'} value={Uf} onChangeText={(value) => setUf(value)} />

            <Button /*disabled={disabled}*/ onPress={atualizarDadosInvestidor}>
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
