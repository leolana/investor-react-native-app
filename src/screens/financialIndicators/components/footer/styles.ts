import styled from 'styled-components/native';

import { grey99, greyDD, tealish, black, white, grey70 } from '../../../../assets/colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconBack } from '../../../../assets/icons';

import { Dimensions } from 'react-native';

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Arrow = styled(IconBack)`
    transform: rotate(${(props) => (props.negative ? 270 : 90)}deg)
    margin-right: 10px;

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
  flex: 1;
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

export const TableRow = styled.View` 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: ${(props) => props.background || white}
    padding: 10px;
`;

export const TableRowText = styled.Text`
  color: ${grey70};
  font-size: 13px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
`;
