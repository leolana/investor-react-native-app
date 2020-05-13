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
    marginTop: 30px;
`;

export const ContainerLine = styled.View`
  flexdirection: row;
  alignitems: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'HelveticaNeue-Bold';
  color: ${white};
`;

export const ScrollView = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 20;
  font-family: HelveticaNeue-Bold;
  text-align: center;
  marginbottom: 20px;
`;
