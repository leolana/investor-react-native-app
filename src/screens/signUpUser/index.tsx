import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

import { SafeAreaView, TextInput, Button, ButtonText, Error } from './styles';

import { Request, UrlCadastroUsuario } from '../../services';

import { storeData } from '../../utils';

export const SignUpUserComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [name, setName] = useState(null);

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const [disabled, setDisabled] = useState(true);

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [isValidPassword, setIsValidPassword] = useState(true);

  // methods
  const validatePassword = () => {
    console.log('password', password);

    if (password === null) setIsValidPassword(false);
    else if (password.length < 6) {
      setIsValidPassword(false);
      Alert.alert('A senha deve ter mais de 6 digitos');
    } else setIsValidPassword(true);
  };

  const validateEmail = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsValidEmail(regex.test(email));
  };

  const signUpSuccess = async (data) => {
    await storeData('Authorization', data.Authorization);

    navigation.navigate('SignUpSuccess');
  };

  const signUp = async () => {
    if (name === null || email === null || password === null) return Alert.alert('Preencha todos os campos');

    if (!isValidEmail || !isValidPassword) return Alert.alert('Preencha os campos corretamente');

    const data = {
      name,
      email,
      password,
    };

    const resp = await Request.POST({ url: UrlCadastroUsuario, data: data });

    console.log(resp);

    if (resp.status === 200) signUpSuccess(resp.data);
    else Alert.alert(resp.data.Msg);
  };

  return (
    <SafeAreaView>
      <TextInput id="name" title="Nome Completo" onChangeText={(value) => setName(value)} />

      <TextInput id="email" title="Email" onChangeText={(value) => setEmail(value)} onBlur={() => validateEmail()} />

      {!isValidEmail ? <Error>Email inválido</Error> : undefined}

      <TextInput
        id="password"
        title="Senha"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        onBlur={() => validatePassword()}
      />

      {!isValidPassword ? <Error>Esse campo não pode ter menos de 6 digitos</Error> : undefined}

      <Button onPress={() => signUp()}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export const SignUpUser = {
  screen: SignUpUserComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Usuário',
  },
};
