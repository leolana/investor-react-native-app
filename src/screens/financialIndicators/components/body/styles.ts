import styled from 'styled-components/native';

import { grey99, greyDD, tealish, black } from '../../../../assets/colors';

import { IconGraph } from '../../../../assets/icons';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Graph = styled(IconGraph)`
  margin-right: 10px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  padding: 16px;
`;

export const ItemText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 15px;
`;

export const Table = styled.View`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 16px;
`;

export const TableHeader = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TableRow = styled.View`
  border-bottom-width: ${(props) => (props.last ? 0 : 1)}px;
  border-bottom-color: ${greyDD};
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TableDot = styled.View`
    background: ${black}
    border-radius: 100px;
    width: 4px;
    height: 4px;
    margin: 0 10px;

`;

export const TableText = styled.Text`
  font-size: 14px;

  ${(props) => {
    if (props.spotlight)
      return `
                font-family: OpenSans-Bold;
                width: 64px;
            
            `;
    else
      return `
                font-family: HelveticaNeue;
                color: ${grey99}
            `;
  }}
`;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 16px;
`;

export const ContentArea = styled.View`
  border-color: ${greyDD};
  border-top-width: 1px;
  padding: 10px 0;
  margin: 10px 0;
`;

export const Tab = styled.TouchableOpacity`
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => (props.selected ? tealish : greyDD)};
    width: ${(width - 32) / 3}
    padding: 10px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 14px;
  font-family: ${(props) => (props.selected ? 'OpenSans-Bold' : 'HelveticaNeue')};
  color: ${(props) => (props.selected ? black : grey99)};
`;
