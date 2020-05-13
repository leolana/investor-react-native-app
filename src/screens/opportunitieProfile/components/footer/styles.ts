import styled from 'styled-components/native';

import { grey99, white, tealish, black } from '../../../../assets/colors';

export const RetangleContent = styled.View`
  border-radius: 5px;
  padding: 16px;
  background: ${(props) => props.background || tealish};
  margin-bottom: ${(props) => props.marginBottom || 16}px;
  margin-top: ${(props) => props.marginTop || 0}px;
`;

export const RetangleTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 17px;
  color: ${(props) => props.color || white};
`;

export const RetangleText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${(props) => props.color || white};
`;

export const RetangleTinyTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${grey99};
`;

export const ItemDefaultText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  font-size: 15px;
  color: ${black};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const ItemDefaultTitle = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  font-size: 12px;
  color: ${grey99};
`;
