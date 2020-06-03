import styled from 'styled-components/native';

import { grey99, tealish, white } from '../../assets/colors';

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
  text-align: justify;
  color: ${grey99};
`;

export const Box = styled.View`
  border-radius: 5px;
  width: 350px;
  height: 45%;
  border: ${grey99};
  padding: 10px;
  margin-top: 20px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${white};
`;
