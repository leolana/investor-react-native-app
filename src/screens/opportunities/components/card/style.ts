import styled from 'styled-components/native';

import { IButtom } from '../../../../components/buttom';

import { white, greyEE, grey99, black } from '../../../../assets/colors';

export const Card = styled.View`
  background: ${(props) => props.background || greyEE};
  border-radius: 5px;
  margin: 16px;
  margin-bottom: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  elevation: 2;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 5px;
  height: 27px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${white};
  font-family: OpenSans-SemiBold;
`;

export const Flex5 = styled.Text`
  flex: 5;
`;

export const Body = styled.View`
  flex-direction: row;
  background: ${white};
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  min-height: 91px;
`;

export const Score = styled.Text`
  font-size: 14px;
  color: ${white};
  font-family: OpenSans-Bold;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-family: OpenSans-Bold;
`;

export const Content = styled.Text`
    font-size: 12px;
    color: ${grey99}
    margin-top: 5px;
    font-family: OpenSans-SemiBold;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${black};
  font-family: OpenSans-SemiBold;
`;

export const Container = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const Box = styled.View`
  border-radius: 5px;
  width: 24%;
  height: 60px;
  background-color: ${greyEE};
`;

export const Center = styled.View`
  height: 35px;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 10px;
  font-family: OpenSans-Bold;
`;

export const Buttom = styled(IButtom)``;
