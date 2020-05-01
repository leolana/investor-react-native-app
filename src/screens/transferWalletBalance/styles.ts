import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { white, greenTwo, grey66, greyF7, grey99, black } from '../../assets/colors';

import { ITextInput } from '../../components';

import { IconAddFunds } from '../../assets/icons';

import { Platform, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const TextInput = styled(ITextInput)`
  width: ${width - 64}px;
  text-align: center;
`;

export const Buttom = styled.TouchableOpacity`
  width: ${width - 64}px;
  height: 40px;
  background: ${(props) => (props.disabled ? grey99 : greenTwo)};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const ScrollView = styled.ScrollView``;

export const ButtomText = styled.Text`
  font-size: 15px;
  font-family: OpenSans-Bold;
  color: ${white};
`;

export const IconAddFundsStyled = styled(IconAddFunds)`
  transform: scaleY(-1);
  margin-bottom: 16px;
  margin-left: ${width / 2 - 50}px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled(LinearGradient)`
  position: relative;
  align-self: stretch;
  height: 200px;
  padding-top: 32px;
`;

export const HeaderTitle = styled.Text`
  font-size: 12px;
  font-family: OpenSans;
  color: ${white};
  text-align: center;
`;

export const HeaderText = styled.Text`
  font-size: 26px;
  font-family: OpenSans-Bold;
  color: ${white};
  text-align: center;
`;

export const CardPage = styled.View`
    width: ${width - 32}px
    background: ${white};
    border-radius: 5px;
    margin: 0 16px;
    padding: 32px 16px;
    transform: translateY(-90px);

`;

export const Title = styled(Animated.Text)`
  font-size: 16px;
  font-family: OpenSans-Bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const Text = styled(Animated.Text)`
  font-size: 14px;
  font-family: OpenSans;
  text-align: center;
  color: ${grey66};
  margin-bottom: 2px;
`;

export const InfoTitle = styled.Text`
  font-size: 10px;
  font-family: OpenSans;
  text-align: center;
  color: ${grey99};
`;

export const InfoText = styled.Text`
  font-size: 10px;
  font-family: OpenSans-Bold;
  text-align: center;
  color: ${black};
`;

export const AccountCard = styled(Animated.View)`
  width: ${width - 64}px;
  background: ${greyF7};
  border-radius: 5px;
  padding: 16px;
  margin-top: 16px;
`;

export const AccountCardTitle = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
`;
export const Divisor = styled.View`
  background: ${grey66};
  height: 0.2px;
  margin: 10px 0;
`;

export const ItemTitle = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Bold;
  color: ${black};
`;

export const ItemText = styled.Text`
  font-size: 12px;
  font-family: OpenSans;
  color: ${grey66};
`;

export const ItemArea = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: ${width - 128}px;
`;
