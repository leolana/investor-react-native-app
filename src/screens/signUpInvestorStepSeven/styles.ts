import styled from 'styled-components/native';

import { ITextInput } from '../../components';

export const TextInput = styled(ITextInput)``;

import { white, tealish, grey99 } from '../../assets/colors';
import { StyleSheet } from 'react-native';

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

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
`;

const styles = StyleSheet.create({
  input: {
    borderColor: '#DDD',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 16,
    alignSelf: 'stretch',
  },
});

export default styles;
