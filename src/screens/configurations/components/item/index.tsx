import React from 'react';

import { Container, Text } from './styles';

import { Switch } from 'react-native';

export const Item = (props) => {
  // render

  return (
    <Container>
      <Text>{props.title}</Text>

      <Switch {...props} />
    </Container>
  );
};
