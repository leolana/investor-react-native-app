import styled from 'styled-components/native';

import { grey66 } from '../../assets/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: OpenSans;
  text-align: center;
  color: ${grey66};
  margin-top: 16px;
`;
