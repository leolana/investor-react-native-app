import React, { useState, useEffect } from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { RadioButton, Text } from 'react-native-paper';

import { SafeAreaView, Button, ButtonText, TextInput, ContainerLine, TextLine } from './styles';
import { Request, UrlCadastroInvestidorAtualizar } from '../../services';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepSevenComponent = (props) => {
  //state

  const [disabled, setDisabled] = useState(true);
  const [PessoaPoliticamenteExposta, setPessoaPoliticamenteExposta] = useState(true);
  const [RendaMensal, setRendaMensal] = useState('');
  const [Patrimonio, setPatrimonio] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  //vars
  const Investidor = {
    PessoaPoliticamenteExposta,
    Patrimonio,
    RendaMensal,
  };

  const checkButton = () => {
    if (PessoaPoliticamenteExposta === true) {
      setPessoaPoliticamenteExposta(false);
    } else {
      setPessoaPoliticamenteExposta(true);
    }
  };

  const atualizarDadosInvestidor = async () => {
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 6),
      data: Investidor,
      header: 'bearer',
    });

    console.log('passo 7', resp.data);
    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepEight');
    }
  };

  const openLinkPPE = () => {
    Linking.openURL('http://fazenda.gov.br/orgaos/coaf').catch((err) =>
      console.error('Impossível carregar página', err),
    );
  };

  //effect

  useEffect(() => {
    setDisabled(RendaMensal === '' || Patrimonio === '');
  }, [RendaMensal, Patrimonio]);

  //render

  return (
    <SafeAreaView>
      <TextInput
        title={'Renda mensal aprox. (R$)'}
        mask={'currency'}
        onValueChange={({ unMasked }) => setRendaMensal(unMasked)}
        keyboardType={'numeric'}
      />

      <TextInput
        title={'Patrimônio aprox. (R$)'}
        mask={'currency'}
        onValueChange={({ unMasked }) => setPatrimonio(unMasked)}
        keyboardType={'numeric'}
      />

      <TouchableOpacity onPress={openLinkPPE}>
        <TextLine>Você é uma Pessoa Politicamente Exposta ("PPE")?</TextLine>
      </TouchableOpacity>

      <ContainerLine>
        <RadioButton
          value={true}
          status={PessoaPoliticamenteExposta === true ? 'checked' : 'unchecked'}
          onPress={checkButton}
        />

        <Text>Declaro ser PPE</Text>
      </ContainerLine>

      <Button /*disabled={disabled}*/ onPress={atualizarDadosInvestidor}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepSeven = {
  screen: SignUpInvestorStepSevenComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
