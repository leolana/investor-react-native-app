import styled from 'styled-components/native';

import { IconIouu } from '../../assets/icons';

import { Dimensions } from 'react-native';

import { tealish } from '../../assets/colors';

const { width } = Dimensions.get('screen');

export const Logo = styled(IconIouu)`
  position: relative;
  bottom: 30px;
  left: ${width / 2 - 60};
`;

export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
`;

export const Text = styled.Text`
  font-size: 18;
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 22;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const Note = styled.Text`
  font-size: 16;
  margin-bottom: 30px;
  text-align: center;
`;
export const TextSuitability = styled.Text`
  font-size: 16;
  margin-bottom: 20px;
  text-align: center;
  color: ${tealish};
`;

export const TextOpportunities = styled.Text`
  font-size: 16;
  text-align: center;
`;
