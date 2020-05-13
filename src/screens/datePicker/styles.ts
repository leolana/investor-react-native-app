import styled from 'styled-components/native';

import RNDateTimePicker from '@react-native-community/datetimepicker';

import { black, white, grey99 } from '../../assets/colors';

export const DatePickerStyled = styled(RNDateTimePicker)`
  margin: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: OpenSans-SemiBold;
  text-align: right;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity``;
