import styled from 'styled-components/native';

import { ITextInput } from '../../components';

import { tealish, white, grey99, redTwo } from '../../assets/colors';

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
`;

export const TextInput = styled(ITextInput)``;

export const Buttom = styled.TouchableOpacity`
  background: ${(props): string => (props.disabled ? grey99 : tealish)};
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

export const Error = styled.Text`
    font-family: OpenSans-Regular;
    font-size: 10px;
    color: ${redTwo}
    text-align: left;
    align-self: stretch;
    margin-top: 4px;
    margin-bottom: 15px;
`;
