import styled from 'styled-components/native';

import { grey88, greyDD } from '../../../../assets/colors';

export const Title = styled.Text`
  font-size: 15px;
  font-family: OpenSans-Bold;
  align-self: stretch;
`;

export const Text = styled.Text`
  margin-top: 2px;
  font-size: 14px;
  font-family: OpenSans-Regular;
  align-self: stretch;
  color: ${grey88};
`;

export const View = styled.View`
  align-items: center;
  flex: 1;
  margin-left: 16px;
  padding: 30px;
`;

export const Container = styled.TouchableOpacity`
  height: 90px;
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
