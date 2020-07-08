import styled from 'styled-components/native';

import { ITextInput } from '../../components';

import { Dimensions } from 'react-native';

import { grey99, black, white, greenTwo, redTwo } from '../../assets/colors';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  padding-bottom: ${(props) => props.additionalHeight + 6}px;
`;

export const TextInput = styled(ITextInput)`
  text-align: center;
`;

export const Message = styled.Text`
    font-family: OpenSans-Regular;
    font-size: 10px;
    color: ${redTwo}
    text-align: left;
    margin-top: -30px;
    margin-bottom: 30px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Regular;
  color: ${grey99};
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
  color: ${black};
`;

export const Buttom = styled.TouchableOpacity`
  background: ${(props) => {
    if (props.background && !props.disabled) return props.background;
    else if (props.disabled) return grey99;
    else return greenTwo;
  }};
  border-radius: 5px;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const ButtomText = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: ${(props) => props.color || white};
`;
