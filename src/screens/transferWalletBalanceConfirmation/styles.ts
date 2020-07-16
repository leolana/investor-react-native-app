import styled from 'styled-components/native';

import { grey66, greenTwo, grey99, white, greyDD } from '../../assets/colors';

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
  margin-bottom: 16px;
`;

export const Info = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Regular;
  color: ${grey66};
  text-align: center;
  margin-bottom: 4px;
`;

export const Buttom = styled.TouchableOpacity`
  margin-top: 4px;
  align-self: stretch;
  height: 40px;
  background: ${(props) => {
    if (props.enabled) return greenTwo;

    return grey99;
  }};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const ButtomText = styled.Text`
  font-size: 15px;
  font-family: OpenSans-Bold;
  color: ${white};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: ${grey66};
`;

const styles = StyleSheet.create({
  input: {
    width: '70%',
    borderColor: greyDD,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
    height: 40,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 30,
  },
});

export default styles;
