import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { grey99, redTwo } from '../../assets/colors';

import { IButtom, ITextInput } from '../../components';

const deviceWidth = Dimensions.get('window').width;

export const Button = styled(IButtom)``;

export const TextInput = styled(ITextInput)``;

export const Container = styled.View`
  padding: 16px;
  width: ${deviceWidth}px;
`;

export const TextLineBold = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
  text-align: justify;
  font-weight: bold;
  color: ${grey99};
`;

export const Text = styled.Text`
  font-size: 14px;
  margin-bottom: 30px;
  text-align: justify;
  color: ${grey99};
`;

export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
`;

export const Error = styled.Text`
    font-family: OpenSans-Regular;
    font-size: 10px;
    color: ${redTwo}
    text-align: left;
    align-self: stretch;
    margin-top: -30px;
    margin-bottom: 30px;
`;

export const ScrollView = styled.ScrollView``;
