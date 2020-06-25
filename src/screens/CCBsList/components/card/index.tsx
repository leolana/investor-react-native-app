import React from 'react';

import { Container, Header, Arrow, Title, ItemTitle, ItemText, Body, Footer, Buttom, ButtomText } from './styles';

import { tealish } from '../../../../assets/colors';

import { formatCode, formatCNPJ, formatMoney, formatCompanyName } from '../../../../utils';
import { TouchableWithoutFeedback } from 'react-native';

import { withNavigation } from 'react-navigation';

export const CardComponents = (props) => {
  // props

  const { data, navigation } = props;

  // render

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('HistoricProfile', { data })}>
      <Container>
        <Header>
          <Arrow stroke={tealish} width={16} height={16} />

          <Title> {formatCompanyName(data.SolicitacaoId)} </Title>
        </Header>

        <Body>
          <ItemTitle>
            ID: <ItemText>#{formatCode(data.SolicitacaoId.IdOportunidade)}</ItemText>
          </ItemTitle>
          <ItemTitle>
            CNPJ: <ItemText>{formatCNPJ(data.SolicitacaoId.Documento)}</ItemText>
          </ItemTitle>
          <ItemTitle>
            Valor investido: <ItemText>{formatMoney(data.Valor)}</ItemText>
          </ItemTitle>
          <ItemTitle>
            Prazo: <ItemText>{data.SolicitacaoId.Prazo} meses</ItemText>
          </ItemTitle>
        </Body>

        <Footer>
          <Buttom disabled={!data.AssinouCCB} onPress={() => navigation.navigate('CCBSign', { data })}>
            <ButtomText>{data.AssinouCCB ? 'ASSINADO' : 'ASSINAR'}</ButtomText>
          </Buttom>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export const Card = withNavigation(CardComponents);
