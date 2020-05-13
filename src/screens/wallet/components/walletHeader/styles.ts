import styled from 'styled-components/native';

import { white } from '../../../../assets/colors';

export const Item = styled.View`
  height: 200px;
  justify-content: center;
`;

export const ItemTitle = styled.Text`
    font-size: 14px;
    font-family: OpenSans-Regular;
    color: ${white}
    text-align: center;
`;

export const ItemText = styled.Text`
  font-size: 36px;
  font-family: OpenSans-Bold;
  color: ${white};
  text-align: center;
`;
