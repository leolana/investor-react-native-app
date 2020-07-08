import React, { useState, useEffect } from 'react';

import { SafeAreaView, Label } from './styles';

import { Card } from './components';

import { Loading } from '../../components';

import { Request, UrlInfoInvLista } from '../../services';

import { FlatList, Alert } from 'react-native';

export const CCBsListComponent = (props) => {
  // states

  const [list, setList] = useState(null);

  const [flag, setFlag] = useState(false);

  // methods

  const renderItem = (data) => <Card data={data.item} />;

  const sort = (data) => {
    return data.sort(({ Created: a }, { Created: b }) => {
      a = new Date(a);

      b = new Date(b);

      return a > b ? 1 : -1;
    });
  };

  const filterList = (data) => {
    return data.filter((item) => {
      const { Status, SolicitacaoId } = item;

      const { StatusAnalise, CCBsAssinaturas } = SolicitacaoId;

      return SolicitacaoId != null && StatusAnalise == 'ENCERRADO' && Status == 1 && CCBsAssinaturas == true;
    });
  };

  const getCCBList = async () => {
    const resp = await Request.GET({ url: UrlInfoInvLista });
    if (resp.status === 200) {
      if (resp.data.length === 0) {
        setFlag(true);
      }
      let list = filterList(resp.data);

      list = sort(list);

      setList(list);
    } else {
      Alert.alert('Ocorreu um erro ao obter as informações.', 'Por favor volte mais tarde.');
    }
  };

  // effects

  useEffect(() => {
    async function fetchData() {
      await getCCBList();
    }

    fetchData();
  }, []);

  // render

  return (
    <Loading loading={list === null}>
      <SafeAreaView>
        {flag && <Label>No momento você não possui nehuma CCB</Label>}
        <FlatList style={{ padding: 16, paddingBottom: 0 }} data={list} renderItem={renderItem} />
      </SafeAreaView>
    </Loading>
  );
};

export const CCBsList = {
  screen: CCBsListComponent,
  navigationOptions: {
    headerTitle: "Minhas CCB's",
  },
};
