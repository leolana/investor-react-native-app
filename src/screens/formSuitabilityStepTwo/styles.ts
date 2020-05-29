import styled from 'styled-components/native';

import { tealish, grey99, grey33, black55, white, greyDD } from '../../assets/colors';

export const ScrollView = styled.ScrollView`
  padding: 10px;
`;

export const SafeAreaView = styled.SafeAreaView`
  margin: 12px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const Question = styled.Text`
  font-size: 16px;
  text-align: justify;
  margin-bottom: 10;
  margin-top: 20;
  font-weight: bold;
`;
export const Ponderations = styled.Text`
  font-size: 14px;
  margin-bottom: 5;
  color: ${grey33};
  width: 80%;
`;

export const PonderationsContainer = styled.View`
  align-items: center;
  margin-bottom: 20;
`;

export const Border = styled.View`
  border-bottom-color: ${greyDD};
  border-bottom-width: 1;
`;

export const OptionsTable = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: justify;
  color: ${black55};
  width: 90%;
`;

export const OptionsTableTitle = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-left: 35%;
  margin-bottom: 15;
`;

export const OptionsTableTitleText = styled.Text`
    margin-left: 4%
    font-size: 14px;
    font-weight: bold;
    color: ${black55};
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5;
`;

export const Options = styled.Text`
  font-size: 14px;
  text-align: justify;
  color: ${grey99};
  width: 90%;
`;

export const OptionsButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-vertical: 20px
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${white};
`;
