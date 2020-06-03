import styled from 'styled-components/native';

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
    margin-top: 30px;

`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;

export const ContainerLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.Text`
  font-size: 20px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 20px;
`;
