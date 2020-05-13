import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SafeAreaView, TextInput, Buttom, ButtomText } from './styles';

import { Request, UrlPerfilSenhaAlterar } from '../../services';

import { setInputError } from '../../store/actions';

export const ChangePasswordComponent = (props) => {
  // props

  // states

  const [oldPassword, setOldPassword] = useState(null);

  const [newPassword, setNewPassword] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState(null);

  const [isValid, setIsValid] = useState(false);

  // vars

  const dispatch = useDispatch();

  const inputErrors = useSelector(({ inputError }) => inputError);

  const userId = useSelector(({ accountData }) => accountData.UsuarioId);

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const validatePassword = () => {
    notifyError('oldPassword', oldPassword !== '' || oldPassword.length < 6 ? '' : 'Esse campo não pode ser vazio');

    notifyError(
      'newPassword',
      newPassword !== '' || newPassword.length < 6 ? '' : 'Esse campo não pode ser vazio ou ter menos de 6 digitos',
    );

    notifyError(
      'confirmPassword',
      confirmPassword !== '' ? '' : 'Esse campo não pode ser vazio ou ter menos de 6 digitos',
    );
  };

  const changePassword = async () => {
    if (newPassword !== confirmPassword) return alert('Os Campos não conferem.');

    const data = {
      senha: newPassword,
      senhaAtual: oldPassword,
      id: userId,
    };

    const resp = await Request.POST({ url: UrlPerfilSenhaAlterar, data });

    if (resp.status === 200) alert('Senha alterada com sucesso.');
    else alert('Os Campos não conferem.');
  };

  // effects

  useEffect(() => {
    validatePassword();
  }, [oldPassword, newPassword, confirmPassword]);

  useEffect(() => {
    if (inputErrors === undefined || inputErrors === null) return;

    const invalidsInputs = Array.from(inputErrors).filter((input) => input.message != '');

    if (invalidsInputs.length > 0) setIsValid(false);
    else if (oldPassword === null || newPassword === null || confirmPassword === null) setIsValid(false);
    else setIsValid(true);
  }, [confirmPassword, inputErrors, newPassword, oldPassword]);

  // render

  return (
    <SafeAreaView>
      <TextInput
        id="oldPassword"
        title="Senha atual"
        secureTextEntry={true}
        onChangeText={(value) => setOldPassword(value)}
      />

      <TextInput
        id="newPassword"
        title="Nova senha"
        secureTextEntry={true}
        onChangeText={(value) => setNewPassword(value)}
      />

      <TextInput
        id="confirmPassword"
        title="Repetir senha"
        secureTextEntry={true}
        onChangeText={(value) => setConfirmPassword(value)}
      />

      <Buttom disabled={!isValid} onPress={() => changePassword()}>
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
