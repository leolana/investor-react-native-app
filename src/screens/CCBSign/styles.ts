import styled from 'styled-components/native';

import { grey66, grey99, greyDD, greenTwo } from '../../assets/colors';

import { Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('screen');

export const AnimatedView = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  margin: 32px 0;
  font-size: 20px;
  font-family: OpenSans-Bold;
  color: ${grey66};
`;

export const Field = styled.View`
  width: ${width - 32}px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${greyDD};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: HelveticaNeue;
  color: ${(props) => props.color || grey99};
`;

export const Bottom = styled.TouchableOpacity`
  margin-bottom: 5px;
  width: ${width - 32}px;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.background || greenTwo};
`;

export const BottomText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
  color: ${(props) => props.color || grey66};
`;
