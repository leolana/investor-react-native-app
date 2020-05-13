import React, { useState, useEffect } from 'react';

import { ITextInput } from '../../components';

import { Request, UrlLogin } from '../../services';

import { storeData } from '../../utils';

import { KeyboardAvoidingView, Welcome, Description, Container, Buttom } from './style';

import onInit from '../../store/actions/getAccountData';

export const Login = (props) => {
  // props

  const { navigation } = props;

  // states

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  // vars

  const authenticated = navigation.getParam('authenticated', false);

  // methods

  const loginSuccessful = async (data) => {
    await storeData('Authorization', data.Authorization);

    const success = await onInit();

    if (success) navigation.navigate('Opportunities');
  };

  const loginRequest = async (data) => {
    const resp = await Request.POST({
      url: UrlLogin,
      data,
      header: 'bearer',
    });

    if (resp.status === 200) loginSuccessful(resp.data);
    else alert(resp.data.Msg);
  };

  const validateLogin = async () => {
    if (email == null || password == null) return alert('Email e senha não podem estar vazios.');

    const form = new FormData();

    form.append('email', email.trim());

    form.append('password', password);

    loginRequest(form);
  };

  // effects

  useEffect(() => {
    if (!authenticated) return;

    navigation.navigate('Opportunities');
  }, [authenticated, navigation]);

  // render

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <Welcome> Boa tarde :) </Welcome>

      <Description> Acesso sua conta </Description>

      <Container>
        <ITextInput title={'E-mail'} onChangeText={(value) => setEmail(value)} />

        <ITextInput title={'Senha'} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />

        <Buttom title="Entrar" onPress={() => validateLogin()} />
      </Container>
    </KeyboardAvoidingView>
  );
};
