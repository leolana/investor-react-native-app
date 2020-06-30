import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

import { Request, UrlLogin } from '../../services';

import { storeData } from '../../utils';

import Styles, {
  KeyboardAvoidingView,
  Welcome,
  Description,
  Container,
  Buttom,
  Error,
  TextLine,
  Label,
  TextInput,
} from './style';

import { grey99 } from '../../assets/colors';

import onInit from '../../store/actions/getAccountData';

import { Loading } from '../../components';

import InputPasswordToggle from 'react-native-toggle-password-visibility-expo';

export const Login = (props) => {
  // props

  const { navigation } = props;

  // states

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [greeting, setGreeting] = useState('Olá :)');

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [isValidPassword, setIsValidPassword] = useState(true);

  const [loading, setLoading] = useState(true);

  // vars

  const authenticated = navigation.getParam('authenticated', false);

  // methods

  const validatePassword = () => {
    if (password.length < 6) {
      setIsValidPassword(false);
      Alert.alert('A senha deve ter mais de 6 caracteres');
    } else {
      setIsValidPassword(true);
    }
  };

  const validateEmail = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsValidEmail(regex.test(email));
  };
  const newGreetings = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) setGreeting('Bom dia :)');
    else if (hour >= 12 && hour < 18) setGreeting('Boa tarde :)');
    else if (hour >= 18 && hour < 0) setGreeting('Boa noite :)');

    setLoading(false);
    return;
  };

  const loginSuccessful = async (data) => {
    await storeData('Authorization', data.Authorization);

    const success = await onInit();

    if (success) navigation.navigate('Opportunities', { authenticated: true });

    setLoading(false);
  };

  const loginRequest = async (data) => {
    setLoading(true);
    const resp = await Request.POST({
      url: UrlLogin,
      data,
      header: 'bearer',
    });

    console.log('resp', resp);
    if (resp.status === 401) {
      setLoading(false);
      Alert.alert('', 'Não foi possível acessar sua conta');
    } else if (resp.status === 200) {
      loginSuccessful(resp.data);
    } else {
      setLoading(false);
      Alert.alert(resp.data.Msg);
    }
  };

  const validateLogin = async () => {
    if (email === '' || password === '') return Alert.alert('Preencha todos os campos');

    if (!isValidEmail || !isValidPassword) return Alert.alert('Preencha os campos corretamente');

    const form = new FormData();

    form.append('email', email.trim());

    form.append('password', password);

    loginRequest(form);
  };

  // effects

  useEffect(() => {
    newGreetings();
  }, []);

  useEffect(() => {
    if (!authenticated) return;

    navigation.navigate('Opportunities');
  }, [authenticated, navigation]);

  // render

  if (loading) return <Loading loading={loading} />;
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <Welcome> {greeting} </Welcome>

      <Description> Acesse sua conta </Description>

      <Container>
        <TextInput
          title={'E-mail'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          onChangeText={(value) => setEmail(value)}
          onBlur={() => validateEmail()}
        />

        {!isValidEmail ? <Error>Email inválido</Error> : undefined}

        <Label>Senha</Label>

        <InputPasswordToggle
          style={Styles.input}
          iconColor={grey99}
          value={password}
          onChangeText={(password) => setPassword(password)}
          onBlur={() => validatePassword()}
        />

        {!isValidPassword ? <Error>Esse campo não pode ter menos de 6 digitos</Error> : undefined}

        <TextLine onPress={() => navigation.navigate('recuperarSenha')}>Esqueci minha senha</TextLine>

        <Buttom title="Entrar" onPress={() => validateLogin()} />
      </Container>
    </KeyboardAvoidingView>
  );
};
