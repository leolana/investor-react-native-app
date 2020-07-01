import styled from 'styled-components/native';

import { grey66, greenTwo, grey99, greyDD } from '../../../../assets/colors';

import { ITextInput } from '../../../../components';

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const Label = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: OpenSans-Regular;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Regular;
  color: ${grey66};
  text-align: center;
  width: ${width - 64}px;
  margin-bottom: 16px;
`;

export const Bottom = styled.TouchableOpacity`
  margin-bottom: 5px;
  width: ${width - 32}px;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.background || greenTwo};
`;

export const BottomText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  color: ${(props) => props.color || grey66};
`;

const styles = StyleSheet.create({
  input: {
    width: width - 32,
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
