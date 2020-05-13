import React, { useState, useEffect } from 'react';

import { SafeAreaView, TextInput, Button, ButtonText } from './styles';

import { useDispatch, useSelector, useRef } from 'react-redux';

import { setInputError } from '../../store/actions';

import { Request, UrlCadastroUsuario } from '../../services';

import { storeData } from '../../utils';

export const SignUpUser = (props) => {
  // props

  const { navigation } = props;

  // states

  const [name, setName] = useState(null);

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const [disabled, setDisabled] = useState(true);

  // vars

  const dispatch = useDispatch();

  const inputErrors = useRef(useSelector(({ inputError }) => inputError));

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const handleEmptyMessage = (id, isEmpty) => {
    const msg = isEmpty ? 'Você precisa preencher esse campo' : '';

    dispatch(notifyError(id, msg));
  };

  const emailIsValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  };

  const signUpSuccess = async (data) => {
    await storeData('Authorization', data.Authorization);

    navigation.navigate('SignUpSuccess');
  };

  const signUp = async () => {
    const data = {
      name,
      email,
      password,
    };

    const resp = await Request.POST({ url: UrlCadastroUsuario, data });

    console.log(resp);

    if (resp.status === 200) signUpSuccess(resp.data);
    else alert(resp.data.Msg);
  };

  // effstcs

  useEffect(() => {
    if (inputErrors === undefined || inputErrors === null) return;

    inputErrors.current = Array.from(inputErrors.current);

    if (name === null || email === null || password === null) return;

    if (inputErrors[0].message === '' && inputErrors[1].message === '' && inputErrors[2].message === '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, inputErrors, name, password]);

  useEffect(() => {
    if (name === null) notifyError('name', '');

    if (email === null) notifyError('email', '');

    if (password === null) notifyError('password', '');
  }, [email, name, password]);

  useEffect(() => {
    if (name === null) return;

    handleEmptyMessage('name', name.length === 0);
  }, [name]);

  useEffect(() => {
    if (email === null) return;

    handleEmptyMessage('email', email.length === 0);

    if (email.length === 0) return;

    const isValid = emailIsValid(email);

    if (isValid) notifyError('email', '');
    else notifyError('email', 'Você deve fornecer um email ');
  }, [email]);

  useEffect(() => {
    if (password === null) return;

    handleEmptyMessage('password', password.length === 0);

    if (password.length < 6) notifyError('password', 'A senha deve conter mais de 6 dígitos');
    else notifyError('password', '');
  }, [password]);

  return (
    <SafeAreaView>
      <TextInput id="name" title="Nome Completo" onChangeText={(value) => setName(value)} />

      <TextInput id="email" title="Email" onChangeText={(value) => setEmail(value)} />

      <TextInput id="password" title="Senha" secureTextEntry={true} onChangeText={(value) => setPassword(value)} />

      <Button disabled={disabled} onPress={() => signUp()}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};
