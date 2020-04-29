import styled from 'styled-components/native';

import { IconWalletCash } from '../../../../assets/icons';

export const IconWalletCashStyled = styled(IconWalletCash)`
  transform: rotate(15deg);
  position: absolute;
  top: ${(props) => props.y || 0}px;
  left: ${(props) => props.x || 0}px;
  opacity: 0.1;
`;
