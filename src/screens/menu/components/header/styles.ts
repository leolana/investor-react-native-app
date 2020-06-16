import styled from 'styled-components/native';

import { CircleWithChild } from '../../../../components/circle';

import { twilight, white } from '../../../../assets/colors';

export const Container = styled.View`
  background: ${twilight};
  height: 238px;
  flex-direction: column-reverse;
`;

export const HeaderContainer = styled.View`
  background: rgba(0, 0, 0, 0.6);
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.View`
  transform: translateY(-38px);
  justify-content: center;
  align-items: center;
`;

export const Circle = styled(CircleWithChild)`
  margin-bottom: 25px;
`;

export const Letter = styled.Text`
  text-align: center;
  font-size: 38px;
  color: ${white};
  font-family: OpenSans-Bold;
`;

export const Text = styled.Text`
  padding: 2px;
  align-self: stretch;
  text-align: ${(props) => props.textAlign || 'center'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${white};
  font-family: ${(props) => props.fontFamily || 'OpenSans-SemiBold'};
`;
