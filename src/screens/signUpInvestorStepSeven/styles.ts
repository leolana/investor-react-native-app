import styled from 'styled-components/native';

import { ITextInput } from '../../components';

export const TextInput = styled(ITextInput)``;

import { white, tealish, grey99 } from '../../assets/colors';

export const SafeAreaView = styled.View`
  margin: 16px;
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const ContainerLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;

export const TextLine = styled.Text`
  font-size: 14px;
  color: ${tealish};
  font-weight: bold;
  margin-bottom: 15px;
`;
