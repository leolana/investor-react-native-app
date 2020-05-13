import styled from 'styled-components/native';

import { tealish, white } from '../../assets/colors';

export const TouchableOpacity = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: ${(props) => props.height || 40}px;
  background: ${(props) => props.background || tealish};
`;

export const Text = styled.Text`
  font-size: ${(props) => props.fontSize || '18px'};
  color: ${(props) => props.color || white};
  font-weight: bold;
`;
