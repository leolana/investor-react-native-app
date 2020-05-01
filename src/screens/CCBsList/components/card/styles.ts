import styled from 'styled-components/native';

import { greyDD, grey99, greenTwo, white } from '../../../../assets/colors';

import { IconBack } from '../../../../assets/icons';

export const Arrow = styled(IconBack)`
  transform: scaleX(-1);
`;

export const Container = styled.View`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
  padding-bottom: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  margin-left: 5px;
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  margin-bottom: 5px;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  font-family: HelveticaNeue;
  color: ${grey99};
`;

export const Body = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  flex-direction: row-reverse;
`;

export const Buttom = styled.TouchableOpacity`
  border-radius: 5px;
  background: ${(props) => (props.disabled ? grey99 : greenTwo)};
  padding: 5px 10px;
`;

export const ButtomText = styled.Text`
    padding: 0 20px
    font-size: 13px;
    font-family: OpenSans-Bold;
    color: ${white}
`;
