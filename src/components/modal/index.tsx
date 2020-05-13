import React from 'react';

import { Container, Backdrop } from './styles';

import { withNavigation } from 'react-navigation';

import { TouchableWithoutFeedback } from 'react-native';

export const ModalComponent = (props) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
        <Backdrop />
      </TouchableWithoutFeedback>

      <Container height={props.height}>{props.children}</Container>
    </>
  );
};

export const Modal = withNavigation(ModalComponent);
