import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SafeAreaView, TextInput, Buttom, ButtomText, Error } from './styles';

import { Request, UrlPerfilSenhaAlterar } from '../../services';

import { setInputError } from '../../store/actions';

export const ChangePasswordComponent = () => {
  // props

  // states

  const [oldPassword, setOldPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [isValidOldPassword, setIsValidOldPassword] = useState(true);

  const [isValidNewPassword, setIsValidNewPassword] = useState(true);

  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const [disabled, setDisabled] = useState(true);

  // vars

  const dispatch = useDispatch();

  const inputErrors = useSelector((inputError) => inputError);

  const email = useSelector((store) => store.account.accountData.Email);

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const validatePassword = (item: string) => {
    if (item === 'oldPassword') {
      if (oldPassword.length < 6) {
        setIsValidOldPassword(false);
      } else {
        setIsValidOldPassword(true);
      }
    } else if (item === 'newPassword') {
      if (newPassword.length < 6) {
        setIsValidNewPassword(false);
      } else {
        setIsValidNewPassword(true);
      }
    } else if (item === 'confirmPassword') {
      if (confirmPassword.length < 6 || confirmPassword !== newPassword) {
        setIsValidConfirmPassword(false);
      } else {
        setIsValidConfirmPassword(true);
      }
    }
  };

  const changePassword = async () => {
    console.log('entrou')
    const data = {
      Password: oldPassword,
      NewPassword: newPassword,
      Email: email,
    };

    const resp = await Request.PUT({ url: UrlPerfilSenhaAlterar, data, header:'bearer',});

    if (resp.status === 200) Alert.alert('Senha alterada com sucesso.');
    else Alert.alert(resp.data.Msg);
  };

  // effects

  useEffect(() => {
    setDisabled(!isValidConfirmPassword || !isValidNewPassword || !isValidOldPassword);
  }, [isValidConfirmPassword, isValidNewPassword, isValidOldPassword]);

  // render

  return (
    <SafeAreaView>
      <TextInput
        id="oldPassword"
        title="Senha atual"
        secureTextEntry={true}
        onChangeText={(value) => setOldPassword(value)}
        onBlur={() => validatePassword('oldPassword')}
      />
      {!isValidOldPassword ? <Error>Esse campo não pode ser vazio ou ter menos de 6 digitos</Error> : undefined}

      <TextInput
        id="newPassword"
        title="Nova senha"
        secureTextEntry={true}
        onChangeText={(value) => setNewPassword(value)}
        onBlur={() => validatePassword('newPassword')}
      />
      {!isValidNewPassword ? <Error>Esse campo não pode ser vazio ou ter menos de 6 digitos</Error> : undefined}

      <TextInput
        id="confirmPassword"
        title="Repetir senha"
        secureTextEntry={true}
        onChangeText={(value) => setConfirmPassword(value)}
        onBlur={() => validatePassword('confirmPassword')}
      />
      {!isValidConfirmPassword ? <Error>Os campos não conferem</Error> : undefined}

      <Buttom disabled={disabled} onPress={changePassword}>
        <ButtomText>ALTERAR SENHA</ButtomText>
      </Buttom>
    </SafeAreaView>
  );
};

export const ChangePassword = {
  screen: ChangePasswordComponent,
  navigationOptions: {
    headerTitle: 'Alterar senha',
  },
};
