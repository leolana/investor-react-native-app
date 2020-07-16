import React from 'react';

import { DatePickerStyled, Text, Button } from './styles';

import { Modal } from '../../components';

import { withNavigation } from 'react-navigation';

export const DatePickerModal = (props) => {
  const onDateChanged = props.navigation.getParam('onDateChanged');

  const date = props.navigation.getParam('date', new Date());

  return (
    <Modal height={290}>
      <Button onPress={() => props.navigation.goBack()}>
        <Text>Pronto</Text>
      </Button>

      <DatePickerStyled
        mode="date"
        value={date == null ? new Date() : date}
        onChange={(selectedDate) => onDateChanged(selectedDate)}
      />
    </Modal>
  );
};

export const DatePicker = {
  screen: withNavigation(DatePickerModal),
  navigationOptions: {
    gestureResponseDistance: { vertical: 0 },
  },
};
