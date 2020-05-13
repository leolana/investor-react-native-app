import styled from 'styled-components/native';

import { greyDD, grey99, greyAC } from '../../assets/colors';

export const SafeAreaView = styled.SafeAreaView``;

export const Table = styled.View`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  margin: 16px;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
`;

export const Colunm = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100px;
  height: 30px;
`;

export const Circle = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 30px;
    background: ${(props) => props.background || grey99}
    margin-right: 5px;

`;

export const Text = styled.Text`
  color: ${greyAC};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${greyDD};
  margin-top: 16px;
  padding: 5px 10px;
`;

export const TableText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans-Regular')};
  font-size: 12px;
  flex: ${(props) => props.flex || 1};
`;

export const TableRow = styled.View`
  padding: 10px;
  border-bottom-width: ${(props) => (props.showBorder ? 1 : 0)}px;
  border-bottom-color: ${greyDD};
  flex-direction: row;
  align-items: center;
`;

export const TableCircle = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;
