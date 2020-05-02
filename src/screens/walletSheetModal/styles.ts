import styled from 'styled-components/native';

import { greyDD } from '../../assets/colors';

import { IconPrinter } from '../../assets/icons';

export const IconPrinterStyled = styled(IconPrinter)`
  margin-right: 10px;
`;

export const Card = styled.View`
  padding: 20px 16px;
  width: 100%;
  height: auto;
  align-self: stretch;
`;

export const Area = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};

  ${(props) => (props.isLast ? `  border-bottom-width: 0px; ` : null)}
`;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-family: OpenSans-Regular;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-size: 12px;
`;

export const Item = styled.Text`
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-family: OpenSans-Bold;
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${greyDD};
  align-self: stretch;
  height: 38px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 10px;
`;
