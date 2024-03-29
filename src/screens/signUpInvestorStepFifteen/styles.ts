import styled from 'styled-components/native';

import { IconIouu } from '../../assets/icons';

import { Dimensions } from 'react-native';

import { tealish, white } from '../../assets/colors';

const { width } = Dimensions.get('screen');

export const Logo = styled(IconIouu)`
  position: relative;
  bottom: 30px;
  left: ${width / 2 - 60}px;
`;

export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
`;

export const Text = styled.Text`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const Note = styled.Text`
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
`;
export const TextSuitability = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${white};
`;

export const TextOpportunities = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${white};
`;

export const Button = styled.TouchableOpacity`
    background: ${tealish}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
`;

export const ScrollView = styled.ScrollView``;
