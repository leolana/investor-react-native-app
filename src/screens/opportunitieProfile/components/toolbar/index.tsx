import React from 'react';

import { BottomToolbar, ToolbarTitle, ToolbarText, ToolbarButtom, ToolbarButtomText, Container } from './styles';

import { Item } from '../../styles';

import { formatPercent, diffDaysForOpportunitie } from '../../../../utils';

import { greyTwo, redTwo, greenTwo } from '../../../../assets/colors';

import { withNavigation } from 'react-navigation';

export const ToolbarComponent = (props) => {
  // Props

  const { data, navigation, reserveData } = props;

  // Methods

  const itsFinished = () => {
    const { FimCaptacao, StatusAnalise } = data;

    return StatusAnalise == 'ENCERRADO' || diffDaysForOpportunitie(FimCaptacao) == 'encerrado';
  };

  const getRemainingTime = () => {
    if (itsFinished()) return 0;

    const date = new Date(data.FimCaptacao);

    const miliSecs = date.getTime() + 86400000 - new Date().getTime();

    if (miliSecs > 0) return Number.parseInt(miliSecs / 1000 / 60 / 60 / 24);
    else return 0;
  };

  const waitingList = () => {
    const { Valor, ValorCaptado, ChamadaListaEspera } = data;

    const value = Valor - ValorCaptado;

    return getRemainingTime() <= 0 || ChamadaListaEspera;
  };

  const getStatus = () => {
    if (itsFinished()) return 'Encerrado';

    if (reserveData != null && reserveData.Status != 0) {
      if (reserveData.StatusBoleto != 'paid') return 'Cancelar';

      return 'Investido';
    } else if (waitingList()) return 'Lista de espera';

    return 'Investir';
  };

  const getStatusColor = () => {
    const colors = {
      Encerrado: greyTwo,
      Cancelar: redTwo,
      'Lista de espera': greenTwo,
      Investir: greenTwo,
    };

    return colors[getStatus()];
  };

  const onPress = () => {
    const status = getStatus();

    const waitingList = status === 'Lista de espera';

    data.waitingList = waitingList;

    if (status === 'Investir') navigation.navigate('Invest', { data });
    else if (status === 'Lista de espera') navigation.navigate('Invest', { data });
    else if (status === 'Cancelar') navigation.navigate('CancelInvestment', { data: reserveData });
  };

  // Render

  return (
    <Container>
      <BottomToolbar>
        <Item>
          <ToolbarTitle>Rendimento</ToolbarTitle>
          <ToolbarText>{formatPercent(data.Rendimento)} a.a</ToolbarText>
        </Item>

        <ToolbarButtom
          disabled={getStatus() === 'Encerrado' || getStatus() === 'Investido'}
          background={getStatusColor()}
          onPress={() => onPress()}
        >
          <ToolbarButtomText>{getStatus()}</ToolbarButtomText>
        </ToolbarButtom>
      </BottomToolbar>
    </Container>
  );
};

export const Toolbar = withNavigation(ToolbarComponent);
