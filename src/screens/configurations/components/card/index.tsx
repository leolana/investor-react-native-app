import React from 'react';

import { Container, CardHeader, Title, Arrow } from './styles';

import { tealish } from '../../../../assets/colors';

export const Card = (props) => {
  return (
    <Container marginBottom={props.marginBottom}>
      <CardHeader>
        <Arrow stroke={tealish} width={16} height={16} />
        <Title>{props.title}</Title>
      </CardHeader>

      {props.children}
    </Container>
  );
};
