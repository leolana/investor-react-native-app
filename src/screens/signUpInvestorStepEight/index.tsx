import React, { useState, useEffect } from 'react';

import { RadioButton, Text } from 'react-native-paper';

import { Select } from '../../components';

import { SafeAreaView, Button, ButtonText, TextInput, ScrollView, ContainerLine, Title } from './styles';
import { Request, UrlCadastroInvestidorAtualizar } from '../../services';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepEightComponent = (props) => {
  //states

  const [disabled, setDisabled] = useState(true);
  const [CodigoBanco, setCodigoBanco] = useState('');
  const [tipo, setTipo] = useState('');
  const [TipoConta, setTipoConta] = useState(0);
  const [Agencia, setAgencia] = useState('');
  const [Conta, setConta] = useState('');
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  const Investidor = {
    // NaoTemContaBancaria,
    DadosBancarios: {
      CodigoBanco,
      Agencia,
      Conta,
      TipoConta,
    },
  };

  const atualizarDadosInvestidor = async () => {
    Investidor.DadosBancarios.TipoConta = parseInt(tipo);
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 7),
      data: Investidor,
      header: 'bearer',
    });

    console.log(Investidor);

    console.log('passo 8', resp.data);
    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepNine');
    }
  };

  //vars

  const optionsBank = [
    { value: '001', text: 'Banco do Brasil S.A.' },
    { value: '033', text: 'Banco Santander (Brasil) S.A.' },
    { value: '104', text: 'Caixa Econômica Federal' },
    { value: '237', text: 'Banco Bradesco S.A.' },
    { value: '341', text: 'Itaú Unibanco S.A.' },
    { value: '041', text: 'Banco Banrisul' },
    { value: '748', text: 'Sicredi' },
    { value: '756', text: 'Sicoob' },
    { value: '077', text: 'Banco Intermedium S.A.' },
    { value: '070', text: 'BRB' },
    { value: '085', text: 'Via Credi' },
    { value: '655', text: 'Banco Neon' },
    { value: '260', text: 'NuBank' },
    { value: '290', text: 'PagSeguro' },
    { value: '212', text: 'Banco Original' },
  ];

  //effect

  useEffect(() => {
    setDisabled(CodigoBanco === '' || tipo === '' || Agencia === '' || Conta === '');
  }, [CodigoBanco, tipo, Agencia, Conta]);

  //render

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>Os dados informados devem ser do titular da conta</Title>

        <Select
          title="Banco"
          options={optionsBank}
          onValueChange={(obj) => setCodigoBanco(obj.value)}
          value={CodigoBanco}
        />

        <TextInput title={'Agência'} onChangeText={(value) => setAgencia(value)} keyboardType={'numeric'} />

        <TextInput title={'Conta'} onChangeText={(value) => setConta(value)} keyboardType={'numeric'} />

        <RadioButton.Group onValueChange={(value) => setTipo(value)} value={tipo}>
          <ContainerLine>
            <RadioButton value="1" />
            <Text>Conta poupança</Text>
          </ContainerLine>

          <ContainerLine>
            <RadioButton value="2" />
            <Text>Conta corrente</Text>
          </ContainerLine>
        </RadioButton.Group>

        <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepEight = {
  screen: SignUpInvestorStepEightComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
