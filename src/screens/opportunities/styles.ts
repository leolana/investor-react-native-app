import styled from 'styled-components/native';

import { white } from '../../assets/colors';

import { IconNewFilter } from '../../assets/icons';

export const Filter = styled(IconNewFilter)`
  margin-right: 12px;
`;

export const LoadingContainer = styled.View`
  padding: 10px;
`;

export const SafeAreaView = styled.SafeAreaView`
  background: ${white};
`;
