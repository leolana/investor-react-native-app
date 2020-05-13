import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const LoadingContainer = styled.View`
  padding: 10px;
`;

export const ListContainer = styled.SafeAreaView`
  flex: 1;

  ${Platform.select({
    android: `margin-bottom: 16px;`,
  })}
`;
