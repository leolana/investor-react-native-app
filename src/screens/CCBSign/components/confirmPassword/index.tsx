import React, { useState, useEffect } from 'react';

import Styles, { Bottom, BottomText, InfoText, TextInput, Label } from './styles';

import { white, grey66, grey99 } from '../../../../assets/colors';

import { useSelector, useDispatch } from 'react-redux';

import { setInputError } from '../../../../store/actions';

import { Request, UrlSenhaVerificar, UrlCCBAssinaturaAtualizar } from '../../../../services';

import { withNavigation } from 'react-navigation';

import InputPasswordToggle from 'react-native-toggle-password-visibility-expo';

export const ConfirmPasswordComponent = (props) => {
  // props

  const { data, navigation } = props;

  // states

  const [password, setPassword] = useState(null);

  // vars

  const dispatch = useDispatch();

  const userId = useSelector((store) => store.account.accountData.UsuarioId);

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const signCCB = async () => {
    console.log(data);

    const resp = await Request.GET({ url: UrlCCBAssinaturaAtualizar(data._id) });

    console.log(resp, data);

    if (resp.status == 200) {
      navigation.navigate('CCBsList');

      navigation.navigate('CCBSignSuccess');
    } else alert('Não foi possível assinar a CCB no momneto. Tente novamente mais tarde.');
  };

  const checkPassword = async () => {
    const data = { password, id: userId };

    const resp = await { url: UrlSenhaVerificar, data };

    if (resp.status === 200) {
      signCCB();

      notifyError('password', '');
    } else notifyError('password', 'Senha inválida');
  };

  // effects

  useEffect(() => {
    if (password === null) notifyError('password', '');
  }, [password]);

  return (
    <>
      <InfoText color={grey66}>
        Por favor insira sua senha no campo abaixo para finalizar a assinatura de sua CCB.
      </InfoText>

      {/* <Label>Senha</Label> */}

      <InputPasswordToggle
        placeholder="Sua senha aqui"
        style={Styles.input}
        iconColor={grey99}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <Bottom onPress={() => checkPassword()}>
        <BottomText color={white} bold={true}>
          ASSINAR
        </BottomText>
      </Bottom>

      <Bottom background="transparent" onPress={() => navigation.goBack()}>
        <BottomText>Cancelar</BottomText>
      </Bottom>
    </>
  );
};

export const ConfirmPassword = withNavigation(ConfirmPasswordComponent);
