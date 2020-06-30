import styled from 'styled-components/native';

import { grey99, grey33, tealish, redTwo, greyDD } from '../../assets/colors';

import { IButtom, ITextInput } from '../../components';

import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const TextInput = styled(ITextInput)``;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans-Regular;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  padding: 0 16px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  top: 80px;
`;
export const Buttom = styled(IButtom)``;

export const Welcome = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: ${grey99};
  margin-bottom: 30px;
`;
export const Description = styled.Text`
  text-align: center;
  color: ${grey33};
  font-size: 30px;
  font-weight: bold;
  color: ${tealish};
`;

export const Container = styled.View`
  padding: 16px;
  width: ${deviceWidth}px;
`;

export const Text = styled.Text`
  color: ${grey99};
  font-size: 14px;
`;

export const Switch = styled.Switch`
  transform: scale(0.8);
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

export const TextLine = styled.Text`
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;
  color: ${grey99};
`;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: greyDD,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
    height: 40,
    fontSize: 16,
    marginBottom: 30,
  },
});

export default styles;
