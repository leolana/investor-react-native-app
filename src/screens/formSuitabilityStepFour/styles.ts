import styled from 'styled-components/native';

import { grey99, tealish, grey66 } from '../../assets/colors';

export const Button = styled.TouchableOpacity`
  background: ${tealish};
  height: 50px;
  width: 250px;
  border-radius: 5px;
  justify-content: center;
  align-self: center;
  margin-bottom: 10px;
  margin-top: 28px;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: HelveticaNeue-Bold;
  color: white;
  text-align: center;
`;
export const SafeAreaView = styled.SafeAreaView`
  margin: 14px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 22;
  font-family: HelveticaNeue;
  text-align: center;
  color: ${grey99};
`;
export const Name = styled.Text`
  font-size: 24;
  font-family: HelveticaNeue;
  text-align: center;
  margin-bottom: 30px;
  color: ${grey66};
`;

export const Info = styled.Text`
  font-size: 16;
  font-family: HelveticaNeue;
  text-align: justify;
  margin-bottom: 30px;
  color: ${grey66};
`;

export const Gratters = styled.Text`
  font-size: 16;
  font-family: HelveticaNeue-Bold;
  text-align: center;
  color: ${tealish};
  margin: 10px;
  fontweight: bold;
`;

export const ScrollView = styled.ScrollView`
  padding: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${grey66};
`;

export const Faixa = styled.View`
  border-bottom-width: 3;
  border-bottom-color: ${tealish};
  width: 60%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
