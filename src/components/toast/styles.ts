import styled from 'styled-components/native';

import { white } from '../../assets/colors';

import { Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('screen');

export const SafeArea = styled(Animated.View)`
  width: ${width};
  align-items: flex-end;
  position: absolute;
  top: 72px;
`;

export const Container = styled.View`
    min-height: 38px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 18px;
    background: ${white};
    elevation: 6;
    box-shadow: 1px 1px 10px rgba(0,0,0, 0.4)
    justify-content: center;
    align-items: center;
    min-width: 128px;
    max-width: ${width - 46}px;
    flex-direction: row;

`;

export const Text = styled.Text`
    font-size: 14px
    font-family: OpenSans;
    padding-left: 10px;

`;
