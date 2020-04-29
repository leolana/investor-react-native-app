import React from 'react';

import { Retangle, TinyTitle, TinyText, Title, Text, IconArea } from './styles';

import { ContentArea } from '../../styles';

import { IconVideo, IconPhoto } from '../../../../assets/icons';

import { tealish } from '../../../../assets/colors';

import HTML from 'react-native-render-html';

import { withNavigation } from 'react-navigation';

import { Linking } from 'react-native';

export const HeaderComponent = (props) => {
  // props

  const { data, navigation } = props;

  // Methods

  const getPhotos = () => {
    if (data.Empresa.Imagens == undefined) return [];

    return data.Empresa.Imagens;
  };

  const getVideo = () => {
    if (
      data.Empresa.VimeoVideoUrl === undefined ||
      data.Empresa.VimeoVideoUrl === '' ||
      data.Empresa.VimeoVideoUrl === null
    )
      return null;

    return data.Empresa.VimeoVideoUrl;
  };

  return (
    <>
      <Retangle
        disabled={getPhotos().length === 0 ? true : false}
        onPress={() => navigation.navigate('PhotoViewer', { data: getPhotos() })}
      >
        <IconArea>
          <IconPhoto fill={tealish} width={24} height={24} />
          <TinyTitle>Fotos</TinyTitle>
        </IconArea>

        <TinyText>{getPhotos().length} fotos</TinyText>
      </Retangle>

      <Retangle disabled={getVideo() === null ? true : false} onPress={() => Linking.openURL(getVideo())}>
        <IconArea>
          <IconVideo fill={tealish} width={24} height={24} />
          <TinyTitle>Vídeos</TinyTitle>
        </IconArea>

        <TinyText>{getVideo() === null ? 0 : 1} vídeos</TinyText>
      </Retangle>

      <Title>Descrição breve sobre a empresa</Title>

      <ContentArea>
        <HTML html={data.Empresa.InformacaoInstitucional} />
      </ContentArea>
    </>
  );
};

export const Header = withNavigation(HeaderComponent);
