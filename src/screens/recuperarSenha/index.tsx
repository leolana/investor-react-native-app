import React, { useState } from 'react';
import { ITextInput } from '../../components';

import { Container, TextLineBold, Text, Button, TextInput, Error } from './style';

import { Request, UrlRecuperarSenha } from '../../services';
import { Alert } from 'react-native';

export const recuperarSenhaComponent = (props) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const { navigation } = props;

  const validateEmail = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsValidEmail(regex.test(email));
  };

  const enviarEmailRecuperacao = async () => {
    validateEmail();
    console.log('ai o email', email);
    if (isValidEmail) {
      const resp = await Request.POST({
        url: UrlRecuperarSenha,
        data: { email: email },
        header: 'bearer',
      });
      if (resp.status === 200) {
        Alert.alert('', 'Uma solicitação foi enviada com sucesso.');
      } else Alert.alert('Ocorreu um erro.', 'Por favor, tente mais tarde.');
      console.log('ele vai recuperar?', resp);
    }
  };

  return (
    <Container>
      <TextLineBold>Esqueceu a senha?</TextLineBold>
      <Text>Digite seu endereço de e-mail logo abaixo e enviaremos as instruções para você.</Text>
      <TextInput title="Email" onChangeText={(value) => setEmail(value)} onBlur={() => validateEmail()} value={email} />
      {!isValidEmail ? <Error>Email inválido</Error> : undefined}

      <Button title="Enviar" onPress={() => enviarEmailRecuperacao()} />
    </Container>
  );
};

export const recuperarSenha = {
  screen: recuperarSenhaComponent,
  navigationOptions: {
    headerTitle: 'Recuperar Senha',
  },
};
