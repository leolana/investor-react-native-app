import React from 'react';

import { withNavigation } from 'react-navigation';

import { TouchableOpacity } from 'react-native';

import { Text, ScrollView } from './styles';

export const PickerAndroidComponent = (props) => {
  // Methods

  const onSelected = (data) => {
    props.onChange(data);

    props.navigation.goBack();
  };

  // Render

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.options.map((data, index) => (
        <TouchableOpacity onPress={() => onSelected(data)} key={index}>
          <Text>{data.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const PickerAndroid = withNavigation(PickerAndroidComponent);
