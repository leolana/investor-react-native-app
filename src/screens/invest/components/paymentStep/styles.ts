import styled from 'styled-components/native';

import { greyDD, grey99, black, greyF7, lightBlue } from '../../../../assets/colors';

import { IconPrinter, IconDevices, IconCalendarOne, IconLock } from '../../../../assets/icons';

import { SkeletonBone } from '../../../../components';

export const Skeleton = styled(SkeletonBone)``;

export const Printer = styled(IconPrinter)`
  margin-right: 16px;
`;

export const Devices = styled(IconDevices)`
  margin-right: 16px;
`;

export const Calendar = styled(IconCalendarOne)`
  margin-right: 16px;
`;

export const Lock = styled(IconLock)`
  margin-left: 16px;
`;

export const Divisor = styled.View`
  align-self: stretch;
  border-color: ${greyDD};
  padding: ${(props) => props.padding || 16}px;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.View`
  border: 1px solid ${greyDD};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const TableText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
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

export const InfoArea = styled.View`
    background: ${greyF7}
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 16px;

`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 14px;
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const ItemText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
  font-size: 12px;
  width: ${(props) => props.width || 'auto'};
`;

export const SpotlightTitle = styled.Text`
  color: ${lightBlue};
  font-size: 22px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin: 16px 0;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: ${grey99};
    font-family: HelveticaNeue 
    textDecorationLine: ${(props) => (props.underline ? 'underline' : 'none')};

`;
