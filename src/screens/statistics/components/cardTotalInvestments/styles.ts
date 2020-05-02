import styled from 'styled-components/native';

import { greyDD, greyF7, black55, tealish, black66, white } from '../../../../assets/colors';

import { CircleWithChild } from '../../../../components';

export const Circle = styled(CircleWithChild)`
  margin-right: 5px;
`;

export const Card = styled.View`
    border: 1px solid ${greyDD}
    background: ${greyF7}
    border-top-width: 0;
    padding-bottom: 16px;
    margin-bottom: 16px;

`;

export const Body = styled.View`
  padding: 16px;
  border-color: ${greyDD};
  border-top-width: 1px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.fontSize || '16'}px;
  font-family: OpenSans-Bold;
  color: ${black55};
`;

export const ItemArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: ${greyDD};
  border-bottom-width: 1px;
  padding: 10px 0;
  ${(props) =>
    props.withoutBoder
      ? `
            border-bottom-width: 0;

        `
      : ``}
  ${(props) =>
    props.withDivisor
      ? `
            padding: 0;
            padding-bottom: 16px;
            margin-bottom: 16px;
            border-color: ${tealish};
            border-bottom-width: 2px;
    
    `
      : ``}
`;

export const ItemText = styled.Text`
  color: ${black66};
  font-size: 14px;
  font-family: ${(props) => props.fontSize || 'OpenSans-Regular'};
`;

export const ScoreArea = styled.View`
  flex-direction: row;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const TouchableOpacity = styled.TouchableOpacity`
    background: ${(props) => props.background || tealish}
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 35px;
    border-radius: 5px;
`;

export const ButtomText = styled.Text`
  font-size: 15px;
  font-family: OpenSans-Bold;
  color: ${(props) => props.color || white};
`;
