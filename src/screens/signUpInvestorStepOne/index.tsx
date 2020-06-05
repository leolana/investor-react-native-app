import React, { useState, useEffect } from 'react';

import { SafeAreaView, Button, ButtonText } from './styles';

import { Select } from '../../components';

import { useSelector } from 'react-redux';

import { Request, UrlCadastroInvestidorAtualizar, UrlCadastroInvestidor } from '../../services';

import { getIdInvestidor } from '../../store/actions/walletRequest';

export const SignUpInvestorStepOneComponent = (props) => {
  // states

  const [Sexo, setSexo] = useState('');

  const [Nacionalidade, setNacionalidade] = useState('');

  const [disabled, setDisabled] = useState(true);

  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  const Email = useSelector((store) => store.account.accountData.Email);

  const NomeCompleto = useSelector((store) => store.account.accountData.Nome);

  // vars

  const Investidor = {
    Sexo,
    Nacionalidade,
  };

  const optionsGender = [
    { text: 'Masculino', value: 1 },
    { text: 'Feminino', value: 2 },
  ];

  const optionsNationality = [
    { text: 'Brasileiro (a) Nato (a)', value: 1 },
    { text: 'Brasileiro (a) Naturalizado (a)', value: 2 },
    { text: 'Estrangeiro (a)', value: 3 },
  ];

  const atualizarDadosInvestidor = async () => {
    if (idInvestidor === undefined) {
      const dados = { NomeCompleto, Email, ...Investidor };
      console.log('tem dado?', dados);

      const resp = await Request.POST({
        url: UrlCadastroInvestidor,
        data: dados,
        header: 'bearer',
      });

      console.log('RESPOSTA', resp);
      if (resp.status === 200) {
        getIdInvestidor(Email);
        props.navigation.navigate('SignUpInvestorStepTwo');
      }
    } else {
      const resp = await Request.PUT({
        url: UrlCadastroInvestidorAtualizar(idInvestidor, 0),
        data: Investidor,
        header: 'bearer',
      });

      console.log('id pra você', idInvestidor);
      if (resp.status === 200) {
        console.log(resp.data);
        props.navigation.navigate('SignUpInvestorStepTwo');
      } else console.log('Erro', resp.data);
    }
  };

  // effect

  useEffect(() => {
    console.log(idInvestidor);
    setDisabled(Nacionalidade === '' || Sexo === '');
  }, [Nacionalidade, Sexo]);

  // render

  return (
    <SafeAreaView>
      <Select title="Sexo *" options={optionsGender} onValueChange={(obj) => setSexo(obj.value)} value={Sexo} />

      <Select
        title="Nacionalidade *"
        options={optionsNationality}
        onValueChange={(obj) => setNacionalidade(obj.value)}
        value={Nacionalidade}
      />

      <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
        <ButtonText>Continuar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepOne = {
  screen: SignUpInvestorStepOneComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
