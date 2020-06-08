import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native-gesture-handler';

import { WalletCard } from '../../components';

import { ActivityIndicator } from 'react-native';

import { Request, UrlCarteiraExtratoPaginado } from '../../services';

import { ListContainer, LoadingContainer } from './styles';

export const WalletHistoricPopup = (props) => {
  // States
  const [page, setPage] = useState(1);

  const [operacoes, setOperacoes] = useState([]);

  const [loading, setLoading] = useState(false);

  // Methods

  const loadOperacoes = async () => {
    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({ url: UrlCarteiraExtratoPaginado(page), header: 'bearer' });

    setPage(page + 1);

    setLoading(false);

    if (resp.status === 200) setOperacoes([...operacoes, ...resp.data.Operacoes]);
  };

  const renderItem = ({ item }) => <WalletCard data={item} />;

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <LoadingContainer>
        <ActivityIndicator />
      </LoadingContainer>
    );
  };

  // Effects

  useEffect(() => {
    async function fetchData() {
      await loadOperacoes();
    }

    fetchData();
  }, []);

  // Render

  return (
    <ListContainer>
      <FlatList
        data={operacoes}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item._id}
        onEndReached={loadOperacoes}
        onEndReachedThreshold={0.1}
      />
    </ListContainer>
  );
};

export const WalletHistoric = {
  screen: WalletHistoricPopup,
  navigationOptions: {
    headerTitle: 'HISTÓRICO',
  },
};
