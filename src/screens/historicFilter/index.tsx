import React, { useState } from 'react';

import { SafeAreaView, Row, Text, FieldInput, FieldText, Buttom, ButtomText, FieldInputDate } from './styles';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

import DatePicker from 'react-native-datepicker';

export const HistoricFilterComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [type, setType] = useState({ text: '', value: '' });

  const [dateFrom, setDateFrom] = useState(null);

  const [dateTo, setDateTo] = useState(null);

  const [score, setScore] = useState({ text: '', value: '' });

  // vars

  const typeParams = {
    options: [
      { text: 'Empréstimo Coletivo', value: 'emprestimo-coletivo' },
      { text: 'Empréstimo Social', value: 'emprestimo-social' },
    ],
    onValueChange: (value) => setType(value),
    data: type,
  };

  const scoreParams = {
    options: [
      { text: 'AA', value: 'AA' },
      { text: 'A', value: 'A' },
      { text: 'B', value: 'B' },
      { text: 'C', value: 'C' },
      { text: 'D', value: 'D' },
      { text: 'E', value: 'E' },
      { text: 'HR', value: 'HR' },
      { text: 'Todos', value: 'AA-A-B-C-D-E-HR' },
    ],
    onValueChange: (value) => setScore(value),
    data: score,
  };

  // methods

  const applyFilter = () => {
    const filter = {
      type,
      dateFrom,
      dateTo,
      score,
    };

    navigation.navigate('Historic', { filter });
  };

  const changeFrom = (value) => {
    setDateFrom(value);
  };

  const changeTo = (value) => {
    setDateTo(value);
  };

  // render

  return (
    <SafeAreaView>
      <Text>Tipo de investimento:</Text>
      <FieldInput onPress={() => navigation.navigate('Picker', typeParams)}>
        <FieldText>{type.text}</FieldText>
      </FieldInput>

      <Text>Data do investimento:</Text>
      <Row>
        <FieldInputDate width={width / 2 - 32}>
          <DatePicker
            format="DD/MM/YYYY"
            date={dateFrom}
            customStyles={{
              dateInput: {
                display: 'none',
              },
              dateIcon: {
                display: 'none',
              },
            }}
            onDateChange={changeFrom}
          />
          <FieldText>{dateFrom}</FieldText>
        </FieldInputDate>

        <Text> a </Text>

        <FieldInputDate width={width / 2 - 32}>
          <DatePicker
            format="DD/MM/YYYY"
            date={dateTo}
            customStyles={{
              dateInput: {
                display: 'none',
              },
              dateIcon: {
                display: 'none',
              },
            }}
            onDateChange={changeTo}
          />
          <FieldText width={width / 2 - 32}>{dateTo}</FieldText>
        </FieldInputDate>
      </Row>

      <Text>Score:</Text>
      <FieldInput onPress={(): void => navigation.navigate('Picker', scoreParams)}>
        <FieldText>{score.text}</FieldText>
      </FieldInput>

      <Buttom onPress={(): void => applyFilter()}>
        <ButtomText>APLICAR FILTRO</ButtomText>
      </Buttom>
    </SafeAreaView>
  );
};

export const HistoricFilter = {
  screen: HistoricFilterComponent,
  navigationOptions: {
    headerTitle: '',
  },
};
