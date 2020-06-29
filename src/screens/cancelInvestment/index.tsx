import React, { useState } from 'react';

import { grey66 } from '../../assets/colors';

import { Modal } from '../../components';

import { TextInput, Container, Title, Text, Bottom, BottomText } from './styles';

import { useDispatch } from 'react-redux';

import { setInputError } from '../../store/actions';

import { Request, UrlReservationDelete } from '../../services';
import { Alert } from 'react-native';

export const CancelInvestmentComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [text, setText] = useState(null);

  // vars

  const data = navigation.getParam('data', null);

  const dispatch = useDispatch();

  // methods

  const notifyError = (id, message) => dispatch(setInputError({ id, message }));

  const validate = () => {
    if (data === null || data.Status === 0) {
      notifyError('text', 'Ocorreu um erro, favor tentar novamente mais tarde.');

      return false;
    } else if (text === null || text === '') {
      notifyError('text', 'Preencha um motivo para o cancelamento.');

      return false;
    } else if (data.StatusBoleto === 'paid') {
      notifyError('text', 'Não e possivel cancelar o investimento após o pagamento to boleto.');

      return false;
    } else {
      notifyError('text', '');

      return true;
    }
  };

  const cancelInvestment = async () => {
    const isValidToCancel = validate();

    console.log(isValidToCancel);

    if (!isValidToCancel) return;

    const resp = await Request.DELETE({
      url: UrlReservationDelete(data._id),
      data: { Motivo: text },
      header: 'bearer',
    });

    console.log('essa resp', resp.satus);

    if (resp.status === 200) {
      props.navigation.navigate('Opportunities');

      Alert.alert('O seu investimento foi cancelado.');
    } else {
      props.navigation.navigate('Opportunities');

      Alert.alert('O seu investimento foi cancelado.');
    }
  };

  // render

  return (
    <Modal height={450}>
      <Container>
        <Title>Tem certeza que deseja cancelar o seu investimento?</Title>

        <Text>
          Sentimos muito que você esteja cancelando o seu investimento na oportunidade. Por favor, nos informe abaixo o
          motivo pelo qual está cancelando o seu investimento:
        </Text>

        <TextInput id="text" onChangeText={(value) => setText(value)} multiline={true} />

        <Bottom onPress={() => cancelInvestment()}>
          <BottomText bold={true}>SIM, DESEJO CANCELAR</BottomText>
        </Bottom>

        <Bottom onPress={() => navigation.goBack()} background="transparent">
          <BottomText color={grey66}>NÃO, DESEJO MANTER</BottomText>
        </Bottom>
      </Container>
    </Modal>
  );
};

export const CancelInvestment = {
  screen: CancelInvestmentComponent,
  navigationOptions: {
    gestureResponseDistance: { vertical: 0 },
  },
};
