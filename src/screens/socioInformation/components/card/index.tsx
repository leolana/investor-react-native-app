import React from 'react';

import { Container, Row, Title, Arrow } from './styles';

import { Divisor } from '../../styles';

import { tealish } from '../../../../assets/colors';

export const Card = (props) => {
  return (
    <Container>
      <Row>
        <Arrow stroke={tealish} width={16} height={16} />
        <Title>{props.title}</Title>
      </Row>

      <Divisor />

      {props.children}
    </Container>
  );
};
