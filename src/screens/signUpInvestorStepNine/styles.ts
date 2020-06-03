/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/native';

import { white, tealish, greyDD, grey99, grey66 } from '../../assets/colors';

export const Title = styled.Text`
  font-size: 24px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 20px;
`;
export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
  align-items: center;
`;

export const Container = styled.View`
  border-radius: 5px;
  padding: 20px;
  margin: 25px;
  width: 350px;
  border: ${greyDD};
  justify-content: center;
`;

export const ContainerTitle = styled.Text`
    font-size: 16px;
    font-weight: bold,
    color: ${grey99};
    align-self: center;
`;

export const Note = styled.Text`
    font-size: 14px
    font-weight: bold,
    color: ${grey66};
`;
export const Text = styled.Text`
    font-size: 14px;
    font-weight: bold,
    color: ${grey66};
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;
