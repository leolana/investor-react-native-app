import React, { useState, useEffect } from 'react';

import { tealish } from '../../assets/colors.js';

import { SafeAreaView, Title, Text, Note, Logo, Button, ButtonText } from './styles';

import { setIdSuitability } from '../../store/actions';

import Store from '../../store/index';

import { Request, UrlUsuarioPegar } from '../../services';

export const FormSuitabilityWelcome = (props) => {
  const logoSize = 100;

  const getSuitabilityId = async () => {
    const resp = await Request.GET({
      url: 'https://server-test.iouu.com.br/api/v1/suitability',
    });

    Store.dispatch(setIdSuitability(resp.data.insertedIds[0]));

    return;
  };

  useEffect(() => {
    getSuitabilityId();
  }, []);

  return (
    <SafeAreaView>
      <Logo fill={tealish} width={logoSize} height={logoSize} />

      <Title>Cadastro de Suitability </Title>

      <Text>
        Sua finalidade é definir seu perfil de investidor e, a partir disso, adequá-lo ao melhor tipo de investimento.
      </Text>

      <Note>Esse formulário pode levar entre 8 e 10 minutos para ser preenchido e consiste em 4 etapas.</Note>

      <Button onPress={() => props.navigation.navigate('SuitabilityOne')}>
        <ButtonText>RESPONDER SUITABILITY</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SuitabilityWelcome = {
  screen: FormSuitabilityWelcome,
};
