import styled from 'styled-components/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { grey66, greyDD, grey99 } from '../../../../../../assets/colors';

import { Animated } from 'react-native';

export const LegendContainer = styled(Animated.View)`
  width: ${wp(35)};
  height: ${hp(6)};
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.View`
  width: ${wp(35)};
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: ${greyDD};
  border-bottom-width: 4px;
  border-bottom-color: ${grey99};
`;

export const ItemTitle = styled.Text`
  color: ${grey66};
  font-size: 10px;
  font-family: OpenSans-Regular;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
`;
