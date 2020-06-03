import React, { useState, useEffect } from 'react';

import { SafeAreaView, Button, ButtonText, TextInput } from './styles';
import { useSelector } from 'react-redux';

import { Request, UrlCadastroInvestidorAtualizar } from '../../services';

export const SignUpInvestorStepThreeComponent = (props) => {
  //states
  const [NomeMae, setNomeMae] = useState('');
  const [NomePai, setFatherName] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  //vars

  const Investidor = {
    NomeMae,
    NomePai,
  };

  const atualizarDadosInvestidor = async () => {
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 2),
      data: Investidor,
      header: 'bearer',
    });

    if (resp.status === 200) {
      console.log('passo 3', resp.data);
      props.navigation.navigate('SignUpInvestorStepFour');
    }
  };

  //render
  return (
    <SafeAreaView>
      <TextInput title={'Nome da mãe'} onChangeText={(value) => setNomeMae(value)} />

      <TextInput title={'Nome do pai'} onChangeText={(value) => setFatherName(value)} />

      <Button onPress={atualizarDadosInvestidor}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepThree = {
  screen: SignUpInvestorStepThreeComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
