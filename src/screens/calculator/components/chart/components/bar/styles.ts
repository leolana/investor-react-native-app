import styled from 'styled-components/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Animated } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const ChartBar = styled(LinearGradient)`
  width: ${wp(35)};
  height: ${hp(20)};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  position: absolute;
  bottom: 0;
`;

export const BarContainer = styled(Animated.View)`
  width: ${wp(35)};
  height: ${hp(25)};
  position: relative;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-family: HelveticaNeue-Bold;
  text-align: center;
`;

export const ItemText = styled.Text`
  font-size: 8px;
  font-family: HelveticaNeue-Bold;
  text-align: center;
`;
