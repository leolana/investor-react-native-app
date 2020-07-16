import styled from 'styled-components/native';

import { ITextInput } from '../../components';

import { tealish, grey99, white, redTwo, greyDD } from '../../assets/colors';
import { StyleSheet } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
  flex: 1;
`;

export const TextInput = styled(ITextInput)``;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
`;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans-Regular;
`;

export const ButtonText = styled.Text`
  padding: 10px;
  font-family: OpenSans-Bold;
  font-size: 18px;
  color: ${white};
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
