import React, { useState, useEffect } from 'react';

import { SheetModal, Toast } from '../../components';

import { setInputError } from '../../store/actions';

import { Container, TextInput, InfoText, Text, Buttom, ButtomText } from './styles';

import { IconCurrencyExchange } from '../../assets/icons';

import { greenTwo, grey99 } from '../../assets/colors';

import { useSelector, useDispatch } from 'react-redux';

import { formatMoney } from '../../utils';

import { Keyboard } from 'react-native';

export const ReinvestmentSheetModal = (props) => {
  // states

  const [reinvestmentValue, setReinvestmentValue] = useState(0);

  const [isValid, setIsValid] = useState(false);

  const [additionalHeight, setAdditionalHeight] = useState(0);

  // vars

  const dispatch = useDispatch();

  const name = useSelector((store) => store.account.accountData.Nome);

  const data = props.navigation.getParam('data', null);

  const onValueChange = props.navigation.getParam('onValueChange', () => null);

  // methods

  Keyboard.addListener('keyboardDidShow', () => setAdditionalHeight(50));

  Keyboard.addListener('keyboardDidHide', () => setAdditionalHeight(0));

  // Effects

  useEffect(() => {
    onValueChange(reinvestmentValue);

    const errorData = {
      id: 'reinvestment',
      message: '',
    };

    if (reinvestmentValue > data.value) {
      errorData.message = `O valor deve ser menor ou igual ao investido: ${formatMoney(data.value)}.`;

      setIsValid(false);
    } else if (reinvestmentValue > data.walletBalance) {
      errorData.message = `Saldo indisponível para o reinvestimento. Valor máximo: ${formatMoney(data.walletBalance)}.`;

      setIsValid(false);
    } else if (reinvestmentValue < 0) {
      errorData.message = `Valor para o reinvestimento não pode ser negativo.`;

      setIsValid(false);
    } else {
      setIsValid(true);
    }

    dispatch(setInputError(errorData));
  }, [data.value, data.walletBalance, onValueChange, reinvestmentValue]);

  // render

  return (
    <SheetModal>
      <Container additionalHeight={additionalHeight}>
        <IconCurrencyExchange fill={greenTwo} width={64} height={64} />

        <InfoText>
          <Text>{name}</Text>, você possuí saldo em sua Carteira virtual. Gostaria de reinvestir como parte do
          pagamento?
        </InfoText>

        <InfoText>
          Saldo: <Text>{formatMoney(data.walletBalance)}</Text>
        </InfoText>

        <TextInput
          id="reinvestment"
          mask={'currency'}
          onValueChange={({ unMasked }) => setReinvestmentValue(unMasked)}
          keyboardType={'numeric'}
        />

        <Buttom disabled={!isValid} onPress={() => props.navigation.goBack()}>
          <ButtomText>REINVESTIR</ButtomText>
        </Buttom>

        <Buttom background={'transparent'} onPress={() => props.navigation.goBack()}>
          <ButtomText color={grey99}>INVESTIR SEM SALDO</ButtomText>
        </Buttom>
      </Container>
    </SheetModal>
  );
};
