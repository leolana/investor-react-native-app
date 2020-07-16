import styled from 'styled-components/native';

import { grey99, tealish, greyDD, dusk, white } from '../../assets/colors';

import { StyleSheet } from 'react-native';

export const ScrollView = styled.ScrollView`
  margin-horizontal: 16px;
  margin-vertical: 10px;
`;

export const Border = styled.View`
  border-bottom-color: ${greyDD};
  border-bottom-width: 2px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: OpenSans-Bold;
`;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans-Regular;
`;

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${dusk};
`;

export const Note = styled.Text`
  font-size: 14px;
  color: ${dusk};
  margin-bottom: 15px;
`;

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const ContainerLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextLink = styled.Text`
  font-size: 14px;
  color: ${tealish};
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;

export const Button = styled.TouchableOpacity`
    background: ${tealish}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const styles = StyleSheet.create({
  input: {
    borderColor: greyDD,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
    height: 40,
    fontSize: 16,
    alignSelf: 'stretch',
    marginBottom: 30,
  },
});

export default styles;
