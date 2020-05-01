import styled from 'styled-components/native';

import { greyDD } from '../../assets/colors';

import { IconBack } from '../../assets/icons';

export const IconArrowRight = styled(IconBack)`
  transform: rotate(180deg);
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-color: ${greyDD};
  border-bottom-width: ${(props) => props.borderBottomWidth || '1'}px;
`;

export const LinkTitle = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
`;
