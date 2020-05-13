import styled from 'styled-components/native';

import { greyDD, grey99, black, greyF7, lightBlue } from '../../../../assets/colors';

export const Divisor = styled.View`
  align-self: stretch;
  border-color: ${greyDD};
  padding: ${(props) => props.padding || 16}px;

  ${(props) => {
    if (props.side === 'up') return `border-top-width: 1px`;

    return `border-bottom-width: 1px`;
  }}
`;

export const ItemTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: ${grey99};
  text-align: center;
`;

export const ItemText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 22px;
  color: ${black};
  text-align: center;
`;

export const Table = styled.View`
  background: ${greyF7};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const TableText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  font-size: 12px;
  color: ${(props) => (props.bold ? black : grey99)};
`;

export const TableRow = styled.View`
    border-bottom-width: ${(props) => (props.showBorder ? 1 : 0)}px
    border-color: ${greyDD};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const TableSpotlightText = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 14px;
  color: ${lightBlue};
`;
