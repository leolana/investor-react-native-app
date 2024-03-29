import styled from 'styled-components/native';

import { black, greyDD, grey99, black55 } from '../../../../assets/colors';

import { IconBack } from '../../../../assets/icons';

import { CircleWithChild } from '../../../../components';

export const Circle = styled(CircleWithChild)`
  margin-right: 5px;
`;

export const IconArrowRight = styled(IconBack)`
  transform: rotate(180deg);
  margin-right: 10px;
`;

export const Card = styled.View`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 10px;
  margin: 16px;
  margin-bottom: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 27px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
`;

export const HelperArea = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const ScoreArea = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || grey99};
  font-size: 14px;
  font-family: ${(props) => props.fontFamily || 'OpenSans-Regular'};
`;

export const TextItem = styled.Text`
  color: ${black};
  font-weight: normal;
  font-size: 14px;
  font-family: OpenSans-Bold;
`;

export const Body = styled.View`
  border-color: ${greyDD};
  border-bottom-width: 1px;
  border-top-width: 1px;
  padding: 10px 0;
  margin: 10px 0;
`;
