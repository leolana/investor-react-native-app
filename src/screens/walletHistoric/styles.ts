import styled from 'styled-components/native';

import { Platform } from 'react-native';

import { greyTwo } from '../../assets/colors';

export const LoadingContainer = styled.View`
  padding: 10px;
`;

export const ListContainer = styled.SafeAreaView`
  flex: 1;

  ${Platform.select({
    android: `margin-bottom: 16px;`,
  })}
`;

export const Label = styled.Text`
  color: ${greyTwo};
  margin: 5px;
  font-size: 20px;
  text-align: center;
`;
