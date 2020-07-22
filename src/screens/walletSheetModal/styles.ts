import styled from 'styled-components/native';

import { greyDD, grey99, white, tealish, black } from '../../assets/colors';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Card = styled.View`
  padding: 20px 16px;
  width: 100%;
  height: 450;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: OpenSans-Regular;
  font-size: 14px;
  color: ${white};
`;

export const Item = styled.Text`
  margin-bottom: 20;
  font-family: OpenSans-Bold;
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${tealish};
  align-self: stretch;
  height: 38px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 10px;
`;

export const Backdrop = styled.View`
  width: ${width}px;
  height: ${height}px;
  background: ${black};
  opacity: 0.45;
`;

export const Container = styled.View`
  position: absolute;
  top: ${(props) => height / 2 - props.height / 2 || 'auto'};
  left: 20px;
  width: ${width - 40}px;
  height: ${(props) => props.height || 'auto'};
  border-radius: 5px;
  background: ${white};
  padding: 20px;
`;

export const ItemText = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Bold;
`;

export const Company = styled.Text`
  font-size: 14px;
  color: ${grey99}
  font-family: OpenSans-Bold;
  align-self: center;
`;

export const ItemTitle = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  color: ${grey99}
  font-family: OpenSans-Bold;
`;

export const ItemContainer = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

