import React, { useState, useEffect } from 'react';

import { ScrollView, Header, SafeAreaHeader, SafeAreaView } from './styles';

import { tealish, greenishBlue } from '../../assets/colors';

import { WalletHeaderBackground, WalletHeader, WalletBody, WalletFooter } from './components';

import { Request, UrlCarteiraExtratoPaginado } from '../../services';

export const PageWallet = (props) => {
  // State

  const [walletData, SetWalletData] = useState(null);

  // Methods

  const getWallet = async () => {
    const resp = await Request.GET({ url: UrlCarteiraExtratoPaginado(1), header: 'bearer' });

    SetWalletData(resp.data);
  };

  // Effect

  useEffect(() => {
    async function fetchData() {
      await getWallet();
    }

    fetchData();
  }, []);

  // Render

  return (
    <SafeAreaView>
      <ScrollView>
        <SafeAreaHeader>
          <Header colors={[tealish, greenishBlue]}>
            <WalletHeaderBackground />

            <WalletHeader walletData={walletData} />
          </Header>

          <WalletBody />
        </SafeAreaHeader>

        <WalletFooter walletData={walletData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export const Wallet = {
  screen: PageWallet,
  navigationOptions: {
    headerTitle: 'CARTEIRA',
    headerLeft: () => null,
  },
};
