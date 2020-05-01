import styled from 'styled-components/native';

import { dusk, tealish, white } from '../../../../assets/colors';

export const Container = styled.View`
  border: 1px solid ${dusk};
  border-radius: 5px;
  margin-top: 16px;
  height: 52px;
  flex-direction: row;
`;

export const Tab = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? dusk : white)};
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: OpenSans;
  color: ${(props) => (props.selected ? tealish : dusk)};
  text-align: center;
`;
