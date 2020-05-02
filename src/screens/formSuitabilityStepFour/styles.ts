import styled from 'styled-components/native';

import { grey99, tealish } from '../../assets/colors';

export const Button = styled.TouchableOpacity`
  background: ${tealish};
  height: 50px;
  width: 250px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 28px;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  color: white;
`;
export const SafeAreaView = styled.SafeAreaView`
  margin: 14px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 22;
  font-family: OpenSans-Regular;
  text-align: center;
  margin-bottom: 30px;
  color: ${grey99};
`;
export const Text = styled.Text`
  font-size: 24;
  font-family: OpenSans-Regular;
  text-align: center;
  margin-bottom: 30px;
`;

export const Gratters = styled.Text`
  font-size: 16;
  font-family: OpenSans-Bold;
  text-align: justify;
  color: ${tealish};
  margin: 10px;
  fontweight: bold;
`;
