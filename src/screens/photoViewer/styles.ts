import styled from 'styled-components/native';

import { white, greyDD } from '../../assets/colors';

import { Dimensions, Animated, Platform } from 'react-native';

import { IconBack } from '../../assets/icons';

const { width, height } = Dimensions.get('window');

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Arrow = styled(IconBack)`
  transform: scale(${(props) => (props.side === 'right' ? -1 : 1)});
`;

export const Container = styled.View`
  width: ${width}px;
`;

export const Img = styled(Animated.Image)`
  resize-mode: contain;
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 25px;
`;

export const Controllers = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 73px;
  background: ${white};
  ${Platform.select({
    android: `
                border-top-width: 1px;
                border-top-color: ${greyDD}; 
            `,
    ios: `
                box-shadow: 0 0 10px rgba(0,0,0, 0.1)
            `,
  })}
`;
