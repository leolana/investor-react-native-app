import React, { useState, useEffect } from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { RadioButton, Text } from 'react-native-paper';

import {
  SafeAreaView,
  Button,
  ButtonText,
  TextInput,
  ContainerLine,
  TextLine,
  OptionsContainer,
  Label,
} from './styles';
import Styles from './styles';
import { Request, UrlCadastroInvestidorAtualizar } from '../../services';
import { useSelector } from 'react-redux';

import { TextInputMask } from 'react-native-masked-text';

export const SignUpInvestorStepSevenComponent = (props) => {
  //state

  const [disabled, setDisabled] = useState(true);
  const [PessoaPoliticamenteExposta, setPessoaPoliticamenteExposta] = useState(false);
  const [pessoa, setPessoa] = useState('');
  const [RendaMensal, setRendaMensal] = useState('');
  const [renda, setRenda] = useState('');
  const [Patrimonio, setPatrimonio] = useState('');
  const [patri, setPatri] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  //vars

  const checkOption = () => {
    if (pessoa === '1') {
      console.log('ih ali');
      setPessoaPoliticamenteExposta(true);
    } else {
      setPessoaPoliticamenteExposta(false);
    }
  };

  const atualizarDadosInvestidor = async () => {
    const Investidor = {
      PessoaPoliticamenteExposta,
      Patrimonio: patri.getRawValue(),
      RendaMensal: renda.getRawValue(),
    };
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 6),
      data: Investidor,
      header: 'bearer',
    });
    console.log('passo 7', [resp.data, Investidor]);
    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepEight');
    }
  };

  const openLinkPPE = () => {
    Linking.openURL(
      'https://www.fazenda.gov.br/orgaos/coaf/legislacao-e-normas/normas-coaf/resolucao-no-29-de-7-de-dezembro-de-2017-1',
    ).catch((err) => console.error('Impossível carregar página', err));
  };

  //effect
  useEffect(() => {
    checkOption();
    setDisabled(RendaMensal === '' || Patrimonio === '' || pessoa === '');
  }, [RendaMensal, Patrimonio, pessoa]);

  //render

  return (
    <SafeAreaView>
      <Label>Renda Mensal (R$) *</Label>
      <TextInputMask
        type={'money'}
        value={RendaMensal}
        style={Styles.input}
        onChangeText={(value) => setRendaMensal(value)}
        ref={(ref) => setRenda(ref)}
      />

      <Label>Patrimônio aprox. (R$) *</Label>
      <TextInputMask
        type={'money'}
        value={Patrimonio}
        style={Styles.input}
        onChangeText={(value) => setPatrimonio(value)}
        ref={(ref) => setPatri(ref)}
      />

      <TouchableOpacity onPress={openLinkPPE}>
        <TextLine>Você é uma Pessoa Politicamente Exposta ("PPE")? *</TextLine>
      </TouchableOpacity>

      <RadioButton.Group onValueChange={(value) => setPessoa(value)} value={pessoa}>
        <OptionsContainer>
          <RadioButton value="1" />
          <Text>Declaro ser PPE</Text>

          <RadioButton value="2" />
          <Text>Declaro não ser PPE</Text>
        </OptionsContainer>
      </RadioButton.Group>

      <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
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
