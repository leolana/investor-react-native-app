import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { CircleWithChild } from '../../components';

import { Dimensions, Platform } from 'react-native';

import { white, grey99 } from '../../assets/colors';

const screenWidth = Dimensions.get('window').width;

export const ListArea = styled.View`
  margin-top: 32px;
  flex: 1;
  justify-content: center;
  padding: 0 16px;
`;

export const CircleShadow = styled.View`
  transform: translate(${screenWidth / 2 - 76}px, -85px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.28);
  elevation: 3;
`;
export const Circle = styled(CircleWithChild)``;

export const Letter = styled.Text`
  text-align: center;
  font-size: 63px;
  color: ${white};
  font-family: OpenSans-Bold;
`;

export const SafeAreaView = styled.SafeAreaView`
  background: ${white};
  flex: 1;
`;

export const Header = styled.View`
  height: 255px;
`;

export const Name = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: OpenSans-Bold;
  margin-bottom: 5px;
`;

export const Email = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${grey99};
  font-family: OpenSans;
  margin-bottom: 10px;
`;

export const Background = styled(LinearGradient)`
  width: ${screenWidth};
  height: 162px;
`;
