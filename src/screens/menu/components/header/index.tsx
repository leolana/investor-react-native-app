import React from 'react';

import { Letter, Text, HeaderContent, HeaderContainer, Container, Circle } from './styles';

import { darkDusk, greenishBlue, white } from '../../../../assets/colors';

export const Header = (props) => {
  const { accountData } = props;

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <Circle size={90} borderSize={4} borderColor={white} background={[greenishBlue, darkDusk]}>
            <Letter>{accountData.Nome[0]}</Letter>
          </Circle>

          <Text fontWeight="bold" fontFamily="Montserrat-Regular">
            {accountData.Nome}
          </Text>

          <Text fontSize={14}>{accountData.Email}</Text>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  );
};
