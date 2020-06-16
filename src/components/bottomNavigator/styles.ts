import styled from 'styled-components/native';

import { grey99, greyDD, white } from '../../assets/colors';

import { Dimensions, Animated, Platform } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  background: ${white};
  border: 1px solid ${greyDD};
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  height: ${(props) => (Platform.OS === 'ios' ? 90 : 70)}px;
  flex-direction: row;
`;

export const Touchable = styled.TouchableOpacity`
  width: ${width / 3}px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Animated.Text)`
  font-family: OpenSans-Bold;
  font-size: 12px;
  margin-top: 5px;

  ${(props) => {
    if (!props.isSelected) return `color: ${grey99};`;
  }}
`;
