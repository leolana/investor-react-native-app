import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

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
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;
export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans;
`;

const styles = StyleSheet.create({
  input: {
    borderColor: '#DDD',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'OpenSans',
    height: 40,
    fontSize: 16,
    alignSelf: 'stretch',
    marginBottom: 30,
  },
});

export default styles;
