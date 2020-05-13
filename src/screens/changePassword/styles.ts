import styled from 'styled-components/native';

import { ITextInput } from '../../components';

import { tealish, white, grey99 } from '../../assets/colors';

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
`;

export const TextInput = styled(ITextInput)``;

export const Buttom = styled.TouchableOpacity`
  background: ${(props) => (props.disabled ? grey99 : tealish)};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtomText = styled.Text`
  color: ${white};
  font-family: OpenSans-Bold;
  font-size: 13px;
`;
