import React from 'react';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const VideoViewerComponent = (props) => {
  // props

  const { navigation } = props;

  // vars
  const data = navigation.getParam('data', []);

  // methods

  const onError = () => {
    navigation.goBack();

    alert('Não foi possível carregar o vídeo no momento. Tente novamente mais tarde.');
  };

  // render

  return null;
};

export const VideoViewer = {
  screen: VideoViewerComponent,
};
