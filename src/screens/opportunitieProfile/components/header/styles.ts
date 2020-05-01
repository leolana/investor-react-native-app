import styled from 'styled-components/native';

import { greyDD, grey99 } from '../../../../assets/colors';

export const Retangle = styled.TouchableOpacity`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const IconArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

export const TinyTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  margin-left: 16px;
`;

export const TinyText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${grey99};
`;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 16px;
`;

export const Text = styled.Text`
  font-family: OpenSans;
  font-size: 16px;
`;
