import styled from 'styled-components/native';

import { IconIouu } from '../../assets/icons';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Logo = styled(IconIouu)`
  position: absolute;
  top: 64px;
  left: ${width / 2 - 60}px;
`;

export const Buttons = styled.View`
  width: ${width}px;
  padding: 0 16px;
  position: absolute;
  bottom: 64px;
`;

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
