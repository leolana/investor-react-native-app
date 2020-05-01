import styled from 'styled-components/native';

import { IconIouu } from '../../assets/icons';

import { Dimensions } from 'react-native';

import { tealish } from '../../assets/colors';

const { width } = Dimensions.get('screen');

export const Logo = styled(IconIouu)`
  position: absolute;
  top: 64px;
  left: ${width / 2 - 60};
`;

export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
`;

export const Text = styled.Text`
  fontsize: 18;
  marginbottom: 30px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 22;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const Note = styled.Text`
  fontsize: 16;
  marginbottom: 30px;
  text-align: center;
`;
export const TextSuitability = styled.Text`
  fontsize: 16;
  marginbottom: 20px;
  text-align: center;
  color: ${tealish};
`;

export const TextOpportunities = styled.Text`
  fontsize: 16;
  text-align: center;
`;
