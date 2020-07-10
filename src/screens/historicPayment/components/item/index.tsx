import React, { useEffect, useRef } from 'react';

import { Circle, TableText, TableRow, TableCircle } from '../../styles';

import { greenTwo, redTwo, lightYellow, greyTwo } from '../../../../assets/colors';

import { formatMoney, formatDate } from '../../../../utils';

export const Item = (props) => {
  // props

  const { showBorder } = props;
  const data = useRef(props.data);

  // methods
  const getStatusColor = (boleto) => {
    const stringDate = formatDate(boleto.Boleto.due_date);
    const spliter = stringDate.split('-');
    const boletoDate = new Date(spliter[0], spliter[1] - 1, spliter[2], 23, 59, 59);
    const today = new Date();
    const status = boleto.StatusBoleto;

    if (status === 'pending') return lightYellow;
    else if (status === 'paid') return greenTwo;
    else if (status === '' || status === undefined) return greyTwo;
    else if (boletoDate < today && status !== 'paid') return redTwo;
  };

  // render

  return (
    <TableRow showBorder={showBorder}>
      <TableText bold={true}>{data.current.IndiceFatura + 1}</TableText>
      <TableText flex="2">{formatMoney(data.current.valorParcela)}</TableText>
      <TableText flex="2">{formatDate(data.current.Boleto.due_date)}</TableText>
      <TableCircle>
        <Circle background={getStatusColor(data.current)} />
      </TableCircle>
    </TableRow>
  );
};
