import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { white, tealish, grey99, redTwo } from '../../assets/colors';

import { ITextInput } from '../../components';

export const TextInput = styled(ITextInput)``;

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
  color: ${white};
`;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
`;
export const Error = styled.Text`
    font-size: 10px;
    color: ${redTwo}
    text-align: left;
    align-self: stretch;
    margin-top: 4px;
    margin-bottom: 15px;
`;

export const ScrollView = styled.ScrollView``;

const styles = StyleSheet.create({
  input: {
    borderColor: '#DDD',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 16,
    alignSelf: 'stretch',
  },
  inputMargin: {
    borderColor: '#DDD',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 16,
    alignSelf: 'stretch',
    marginBottom: 30,
  },
});

export default styles;
