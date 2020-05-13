import React, { useState } from 'react';

import { Text, Button, PickerStyled } from './styles';

import { withNavigation } from 'react-navigation';

export const PickerIOSComponent = (props) => {
  const [selectedData, setSelectedData] = useState(props.data);

  const setData = () => {
    props.onChange(selectedData);

    props.navigation.goBack();
  };

  const getData = (selectedValue) => {
    const data = props.options.filter(({ value }) => value === selectedValue);

    setSelectedData(data[0]);
  };

  return (
    <>
      <Button onPress={() => setData()}>
        <Text>Pronto</Text>
      </Button>

      <PickerStyled selectedValue={selectedData.value} onValueChange={(data) => getData(data)}>
        {props.options.map((data, index) => (
          <PickerStyled.Item label={data.text} value={data.value} key={index} />
        ))}
      </PickerStyled>
    </>
  );
};

export const PickerIOS = withNavigation(PickerIOSComponent);
