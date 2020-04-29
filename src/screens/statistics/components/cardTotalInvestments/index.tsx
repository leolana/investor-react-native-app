import React, { useState, useEffect } from 'react';

import {
  Card,
  Body,
  Title,
  ItemArea,
  ItemText,
  ScoreArea,
  Circle,
  Buttons,
  TouchableOpacity,
  ButtomText,
} from './styles';

import { greyDD, black66 } from '../../../../assets/colors';

import { convertScoreByColor, formatMoney } from '../../../../utils';

export const CardTotalInvestiments = (props) => {
  const { Rendimento, Scores } = props.data;

  const [toggleValue, setToggleValue] = useState(true);

  const renderItem = (title, value, fontSize) => (
    <ItemArea withoutBoder={title === 'Total'}>
      <ItemText fontSize={fontSize}> {title} </ItemText>

      <ItemText fontSize={fontSize}> {value} </ItemText>
    </ItemArea>
  );

  const renderItemScore = (title, value) => (
    <ItemArea withoutBoder={title === 'HR'}>
      <ScoreArea>
        <Circle background={convertScoreByColor(title)} size={16} />

        <ItemText fontSize={'HelveticaNeue-Bold'}> {title} </ItemText>
      </ScoreArea>

      <ItemText> {value} </ItemText>
    </ItemArea>
  );

  return (
    <Card>
      <Body>
        <ItemArea withDivisor={true}>
          <Title> Total de investimentos </Title>

          <Title fontSize="20"> {Rendimento.TotalInvestimentos.Numero} </Title>
        </ItemArea>

        {renderItem('Atual', 0)}

        {renderItem('Período de carência', 0)}

        {renderItem('1-15 dias de atraso', 0)}

        {renderItem('16-30 dias de atraso', 0)}

        {renderItem('31 a 60 dias de atraso', 0)}

        {renderItem('+60 dias de atraso', 0)}

        {renderItem('Débitos renegociados', 0)}

        {renderItem('Cobrança extrajudicial', 0)}

        {renderItem('Cobrança judicial', 0)}

        {renderItem('Total', 0, 'HelveticaNeue-Bold')}
      </Body>

      <Body>
        <ItemArea withoutBoder={true}>
          <Title> Investimentos por Score </Title>
        </ItemArea>

        {renderItemScore('AA', toggleValue ? formatMoney(Scores.AA.Valor) : Scores.AA.Numero)}

        {renderItemScore('A', toggleValue ? formatMoney(Scores.A.Valor) : Scores.A.Numero)}

        {renderItemScore('B', toggleValue ? formatMoney(Scores.B.Valor) : Scores.B.Numero)}

        {renderItemScore('C', toggleValue ? formatMoney(Scores.C.Valor) : Scores.C.Numero)}

        {renderItemScore('D', toggleValue ? formatMoney(Scores.D.Valor) : Scores.D.Numero)}

        {renderItemScore('E', toggleValue ? formatMoney(Scores.E.Valor) : Scores.E.Numero)}

        {renderItemScore('HR', toggleValue ? formatMoney(Scores.HR.Valor) : Scores.HR.Numero)}
      </Body>

      <Buttons>
        <TouchableOpacity onPress={() => setToggleValue(true)} background={greyDD}>
          <ButtomText color={black66}> Por valores </ButtomText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setToggleValue(false)}>
          <ButtomText> Por números </ButtomText>
        </TouchableOpacity>
      </Buttons>
    </Card>
  );
};
