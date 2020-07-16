import styled from 'styled-components/native';

import { grey99, white, greyDD } from '../../../../assets/colors';

export const TitleDivisor = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  align-self: stretch;
`;

export const View = styled.View``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${grey99};
  align-self: stretch;
  height: 38px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

export const Divisor = styled.View`
  border-color: ${greyDD};
  border-bottom-width: 1px;
  margin: 0 16px;
  padding-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  color: ${white};
`;
