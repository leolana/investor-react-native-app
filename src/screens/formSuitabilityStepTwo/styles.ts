import styled from 'styled-components/native';

import { tealish, grey99, grey33 } from '../../assets/colors';

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
  margin-bottom: 10;
  margin-top: 20;
  fontweight: bold;
`;
export const Ponderations = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Regular;
  margin-bottom: 5px;
  color: ${grey33};
  width: 80%;
`;

export const PonderationsContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const OptionsBox = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  border-bottom-color: ${grey99};
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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