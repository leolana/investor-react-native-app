import React, { useState, useEffect } from 'react';

import { FlatList, Alert } from 'react-native';

import { CardHistory } from './components';

import { SafeAreaView, TouchableOpacity, Label } from './styles';

import { Request, UrlInfoInvLista } from '../../services';

import { Loading } from '../../components';

import { IconNewFilter } from '../../assets/icons';

import { isAfter, isBefore, isSameDay, parseISO } from 'date-fns';
import { white } from '../../assets/colors';

export const HistoricComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [historicList, setHistoricList] = useState(null);

  const [hasItem, setHasItem] = useState(true);

  const [hasResult, setHasResult] = useState(true);

  const [loading, setLoading] = useState(false);

  // vars

  const filter = navigation.getParam('filter', null);

  // methods

  const applyDefaultFilter = (list) => {
    list = list.filter(({ SolicitacaoId, Status }) => !(SolicitacaoId.StatusAnalise === 'ENCERRADO' && Status === 2));

    return list;
  };

  const getHistoricList = async () => {
    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({ url: UrlInfoInvLista });

    if (resp.data.length === 0) setHasItem(false);

    if (resp.status === 200) setHistoricList(applyDefaultFilter(resp.data).reverse());
    else Alert.alert('Não foi possível acessar o histórico de investimento.', 'Tente novamente mais tarde.');

    setLoading(false);
  };

  const applyTypeFilter = (list) => {
    const { type } = filter;

    setHasItem(true);
    setHasResult(true);

    const newList = list.filter(({ SolicitacaoId }) => SolicitacaoId.TipoEmprestimo === type.value);

    if (newList.length === 0) setHasResult(false);

    return newList;
  };
  const formatDate = (props) => {
    let data = props;
    if (!data.includes('/')) return '--/--/----';

    data = data.split('/');

    data = `${data[2]}/${data[1]}/${data[0]}`;

    data = parseISO(new Date(data).toISOString());

    return data;
  };
  const applyDateFromFilter = (list) => {
    let { dateFrom } = filter;

    dateFrom = formatDate(dateFrom);

    setHasItem(true);
    setHasResult(true);

    const newList = list.filter(({ Created }) => {
      const data = parseISO(Created);
      if (isSameDay(data, dateFrom)) return true;
      else if (isAfter(data, dateFrom)) return true;
    });

    if (newList.length === 0) setHasResult(false);

    return newList;
  };

  const applyDateToFilter = (list) => {
    let { dateTo } = filter;

    dateTo = formatDate(dateTo);

    setHasItem(true);
    setHasResult(true);

    const newList = list.filter(({ Created }) => {
      const data = parseISO(Created);

      if (isSameDay(data, dateTo)) return true;
      if (isBefore(data, dateTo)) return true;
    });

    if (newList.length === 0) setHasResult(false);

    return newList;
  };

  const applyScoreFilter = (list) => {
    const { score } = filter;
    let newList = null;

    setHasItem(true);
    setHasResult(true);

    if (score.value.length === 1)
      newList = list = list.filter(({ SolicitacaoId }) => SolicitacaoId.Score[0] === score.value);
    else newList = list = list.filter(({ SolicitacaoId }) => SolicitacaoId.Score === score.value);

    if (newList.length === 0) setHasResult(false);

    return newList;
  };

  const applyFilter = async () => {
    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({ url: UrlInfoInvLista });

    if (resp.status === 200) setLoading(false);
    else return Alert.alert('Não foi possível aplicar o filtro.', 'Tente novamente mais tarde.');

    let list = resp.data;

    list = applyDefaultFilter(list);

    const { type, dateFrom, dateTo, score } = filter;

    if (type.value !== '') list = applyTypeFilter(list);

    if (dateFrom != null) list = applyDateFromFilter(list);

    if (dateTo != null) list = applyDateToFilter(list);

    if (score.value !== '') list = applyScoreFilter(list);

    setHistoricList(list.reverse());
  };

  const renderHistoryCard = (data) => <CardHistory data={data.item} />;

  // useEffects

  useEffect(() => {
    if (filter === null) return;

    applyFilter();
  }, [filter]);

  useEffect(() => {
    async function fetchData() {
      await getHistoricList();
    }

    fetchData();
  }, []);

  // render

  return (
    <Loading loading={loading}>
      <SafeAreaView>
        {!hasItem && <Label>Você ainda não realizou investimentos</Label>}
        {!hasResult && <Label>Não encontramos nenhum resultado na sua busca</Label>}
        <FlatList data={historicList} renderItem={renderHistoryCard} key={(item) => item.id} />
      </SafeAreaView>
    </Loading>
  );
};

export const Historic = {
  screen: HistoricComponent,
  navigationOptions: ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('HistoricFilter')}>
          <IconNewFilter fill={white} />
        </TouchableOpacity>
      ),
      headerTitle: 'Meu Histórico',
    };
  },
};
