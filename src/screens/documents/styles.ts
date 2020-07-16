import styled from 'styled-components/native';

import { greyDD } from '../../assets/colors';
import { ScrollView } from '../invest/styles';

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
`;

export const Divisor = styled.View`
  background: ${greyDD};
  height: 1px;
  align-self: stretch;
  margin: 16px 0;
`;

export const ScrollView = styled.ScrollView`

`;
