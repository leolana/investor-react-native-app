import styled from 'styled-components/native';

import { grey66, grey99, greenTwo } from '../../../../assets/colors';

import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Title = styled(Animated.Text)`
  font-size: 20px;
  font-family: HelveticaNeue-Bold;
  color: ${grey66};
  text-align: center;
  margin-bottom: 16px;
`;

export const Text = styled(Animated.Text)`
  font-size: 16px;
  font-family: HelveticaNeue;
  text-align: center;
  color: ${grey66};
  margin-bottom: 16px;
`;

export const ItemTitle = styled.Text`
  font-size: 12px;
  font-family: HelveticaNeue-Bold;
  text-align: center;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  font-family: HelveticaNeue-Bold;
  text-align: center;
  color: ${(props) => props.color || grey66};
  margin-bottom: 16px;
`;

export const InfoText = styled.Text`
    font-size: 12px;
    color: ${grey99}
    margin-bottom: 16px;
    text-align: center;
`;

export const Buttom = styled.TouchableOpacity`
  width: ${width - 64}px;
  height: 40px;
  background: ${(props) => props.background || greenTwo};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;
