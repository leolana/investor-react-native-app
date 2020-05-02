import styled from 'styled-components/native';

import { grey70, greyF1, black, white } from '../../assets/colors';

import { LinearGradient } from 'expo-linear-gradient';

export const BackgroundGradiant = styled(LinearGradient)`
  height: 52px;
  border-radius: 5px;
  justify-content: center;
  margin: 32px 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: Helveticaneue-Bold;
  color: ${white};
`;

export const SafeAreaView = styled.SafeAreaView``;

export const ScrollView = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: OpenSans-Bold;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Regular;
  color: ${grey70};
`;

export const ItemText = styled.Text`
  font-size: 22px;
  font-family: OpenSans-Bold;
  color: ${(props) => props.color || black};
  margin-bottom: 10px;
`;

export const InfoCard = styled.View`
  background: ${greyF1};
  border-radius: 5px;
  margin: 32px 0;
  margin-top: 0;
  padding: 10px;
`;

export const InfoText = styled.Text`
  font-size: 8px;
  font-family: OpenSans-Regular;
`;
