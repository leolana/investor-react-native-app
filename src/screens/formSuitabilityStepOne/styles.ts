import styled from 'styled-components/native';

import { tealish, grey99 } from '../../assets/colors';

export const ScrollView = styled.ScrollView`
  padding: 10px;
`;
export const SafeAreaView = styled.SafeAreaView`
  margin: 12px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: OpenSans-Bold;
  text-align: center;
`;

export const Question = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
  text-align: justify;
  margin-bottom: 10px;
  margin-top: 20px;
  fontweight: bold;
`;

export const Options = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Regular;
  text-align: justify;
  color: ${grey99};
  width: 90%;
`;
export const OptionsContainer = styled.View`
  flex-direction: row;
  alignitems: center;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${tealish};
  align-self: stretch;
  height: 38px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 28px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  color: white;
`;
