import React, { useState, useEffect } from 'react';

import { Container, Text, InputText } from './styles';

import { TouchableWithoutFeedback, View } from 'react-native';

import { withNavigation } from 'react-navigation';

const SelectComponent = (props) => {
  const { navigation, options, value, onValueChange } = props;

  const params = {
    options,
    data: value,
    onValueChange,
  };

  const [seletedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (options === undefined || value === '') return;

    options.map((obj) => {
      if (obj.value === value) setSelectedValue(obj.text);
    });
  }, [options, value]);

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Picker', params)}>
      <View>
        <Text>{props.title}</Text>
        <Container>
          <InputText>{seletedValue}</InputText>
        </Container>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Select = withNavigation(SelectComponent);
