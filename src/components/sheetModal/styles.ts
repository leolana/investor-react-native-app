import styled from 'styled-components/native';

import { black, white, grey99 } from '../../assets/colors';

import { Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Backdrop = styled.View`
  width: ${width}px;
  height: ${height + height}px;
  background: ${black};
  opacity: 0.55;
`;

export const Card = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-self: stretch;
  background: ${white};
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  align-items: center;
`;

export const Indicator = styled.View`
    margin-top: 10px
    margin-bottom: 10px;
    width: 100px;
    height: 6px;
    border-radius: 20px;
    background: ${grey99}


`;

export const SafeAreaView = styled.SafeAreaView`
  width: ${width}px;
`;
