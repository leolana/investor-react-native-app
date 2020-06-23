import styled from 'styled-components/native';

import { IconBack } from '../../../../assets/icons';

import { white } from '../../../../assets/colors';

export const IconGo = styled(IconBack)`
  transform: rotate(180deg);
`;

export const Text = styled.Text`
  padding: 2px;
  align-self: stretch;
  text-align: ${(props) => props.textAlign || 'center'};
  width: 70%;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${white};
  font-family: ${(props) => props.fontFamily || 'OpenSans-SemiBold'};
`;

export const NavigationItem = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 0.4px;
  border-bottom-color: rgba(255, 255, 255, 0.4);
  padding: 11px 0;
  align-items: center;
  justify-content: space-between;
`;
