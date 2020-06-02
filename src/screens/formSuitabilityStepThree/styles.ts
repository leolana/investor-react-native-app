import styled from 'styled-components/native';

import { grey99, tealish, white } from '../../assets/colors';
import { Container } from '../opportunities/components/card/style';

export const SafeAreaView = styled.SafeAreaView`
  margin: 14px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;
export const Text = styled.Text`
  font-size: 16px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  text-align: justify;
  color: ${grey99};
  margin: 10px;
`;

export const Box = styled.View`
  border-radius: 5px;
  width: 350px;
  height: 130px;
  border: ${grey99};
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 70%;
`;

export const ContainerCheckBox = styled.View`
  flex-direction: row,
  align-items: center,
  justify-content: center,
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;

  color: ${white};
`;
