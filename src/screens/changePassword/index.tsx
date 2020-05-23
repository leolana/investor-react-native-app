import React, { useState, useEffect } from 'react';
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

  console.log('ERRORS', inputErrors);

  const userId = useSelector((store) => store.account.accountData.UsuarioId);

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const validatePassword = (item: string) => {
    console.log('MEU ITEM', item);

    console.log(typeof item);

    if (item === 'oldPassword') {
      if (oldPassword !== '' || oldPassword.length < 6) {
        console.log('OLD PASS', oldPassword, oldPassword.length);
        setIsValidOldPassword(false);
      }
    } else if (item === 'newPassword') {
      if (newPassword !== '' || newPassword.length < 6) {
        console.log('NEW PASS', newPassword, newPassword.length);
        setIsValidNewPassword(false);
      }
    } else if (item === 'confirmPassword') {
      if (confirmPassword !== '' || confirmPassword.length < 6) {
        console.log('CONFIRM PASS', confirmPassword, confirmPassword.length);
        setIsValidConfirmPassword(false);
      }
    }
  };

  // const changePassword = async () => {
  //   if (newPassword !== confirmPassword) return alert('Os Campos não conferem.');

  //   const data = {
  //     senha: newPassword,
  //     senhaAtual: oldPassword,
  //     id: userId,
  //   };

  //   const resp = await Request.POST({ url: UrlPerfilSenhaAlterar, data });

  //   if (resp.status === 200) alert('Senha alterada com sucesso.');
  //   else alert('Os Campos não conferem.');
  // };

  // effects

  useEffect(() => {
    setDisabled(isValidConfirmPassword || isValidNewPassword || isValidOldPassword);
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
      {!isValidOldPassword ? <Error>Esse campo não pode ser vazio</Error> : undefined}

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
      {!isValidConfirmPassword ? <Error>Esse campo não pode ser vazio ou ter menos de 6 digitos</Error> : undefined}

      <Buttom disabled={disabled}>
        <ButtomText>ALTERAR SENHA</ButtomText>
      </Buttom>
    </SafeAreaView>
  );
};

export const ChangePassword = {
  screen: ChangePasswordComponent,
  navigationOptions: {
    headerTitle: 'Mudar senha',
  },
};
