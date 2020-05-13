import React, { useState, useEffect } from 'react';

import { Item, ItemTitle, ItemText, ItemArea, ItemRight } from './styles';

import { formatMoney, formatPercent, trunc, PMT } from '../../../../utils';

export const WalletHeader = (props) => {
  // Props

  const { walletData } = props;

  // States

  const [funds, setFunds] = useState(0);

  // Effect

  useEffect(() => {
    if (walletData == null) return;

    setFunds(walletData.Saldo);
  }, [walletData]);

  // Render

  return (
    <>
      <Item>
        <ItemTitle>Saldo disponível</ItemTitle>
        <ItemText>{formatMoney(funds)}</ItemText>
      </Item>
    </>
  );
};
