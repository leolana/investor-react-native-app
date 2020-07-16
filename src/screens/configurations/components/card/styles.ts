import styled from 'styled-components/native';

import { greyDD } from '../../../../assets/colors';

import { IconBack } from '../../../../assets/icons';

export const Arrow = styled(IconBack)`
  transform: scaleX(-1);
`;

export const Container = styled.View`
  border: 1px solid ${greyDD};
  padding: 10px;
  padding-bottom: 0px;
  border-radius: 5px;
  margin-bottom: ${(props) => props.marginBottom || 16}px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
`;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  flex: 1;
  margin-left: 5px;
`;
