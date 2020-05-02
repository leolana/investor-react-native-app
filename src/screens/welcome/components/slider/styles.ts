import styled from 'styled-components/native';

import { tealish, white } from '../../../../assets/colors';

import { Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Dots = styled(Animated.View)`
  position: ${(props) => props.position || 'relative'};
  width: 8px;
  height: 8px;
  border-radius: 16px;
  background: ${(props) => props.background || 'rgba(0,0,0, 0.2)'};
`;

export const PageIndicator = styled.View`
  position: absolute;
  top: ${height / 2};
  left: ${(width - 50) / 2};
  flex-direction: row;
  justify-content: space-between
  width: 50px;

`;

export const FlatList = styled(Animated.FlatList)`
  height: ${height};
`;

export const Title = styled.Text`
  color: ${tealish};
  font-family: OpenSans-Bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  color: ${white};
  font-family: OpenSans-Regular;
  font-size: 16px;
  text-align: center;
`;

export const Container = styled.View`
  width: ${width};
  padding: 0 16px;
  height: ${height / 1.3};
  justify-content: center;
  align-items: center;
`;
