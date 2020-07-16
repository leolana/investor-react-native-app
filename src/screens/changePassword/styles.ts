import styled from 'styled-components/native';

import { tealish, white, grey99, redTwo, greyDD } from '../../assets/colors';
import { StyleSheet } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
`;

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans-Regular;
`;

export const Buttom = styled.TouchableOpacity`
  background: ${(props): string => (props.disabled ? grey99 : tealish)};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtomText = styled.Text`
  color: ${white};
  font-family: OpenSans-Bold;
  font-size: 13px;
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
