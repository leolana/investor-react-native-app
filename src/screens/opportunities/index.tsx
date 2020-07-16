import React, { useState, useEffect } from 'react';

import { Request, UrlListaOportunidades } from '../../services';

import { ActivityIndicator, TouchableOpacity, FlatList, Alert } from 'react-native';

import { LoadingContainer, SafeAreaView, Filter } from './styles';

import { OpportunitiesCard } from './components';

import { MessageBox } from '../../components';

import { NavigationEvents } from 'react-navigation';

export const PageOpportunities: React.FC = (props) => {
  // props

  const { navigation } = props;

  // states

  const [opportunities, setOpportunities] = useState([]);

  const [page, setPage] = useState(1);

  const [pageTotal, setPageTotal] = useState(1);

  const [loading, setLoading] = useState(false);

  // vars

  const filter = navigation.getParam('filter', { value: 'AA-A-B-C-D-E-HR' }).value;

  // methods

  const diffDate = (d2) => {
    const miliSecs = new Date(d2) - new Date();

    const diffDays = Number.parseInt(miliSecs / 1000 / 60 / 60 / 24) + 1;

    if (diffDays <= 0) return 'encerrado';

    return diffDays + ' dias';
  };

  const removePublicados = (arr) => {
    const remove = [];
    for (let index = 0; index < arr.length; index++) {
      arr[index].StatusAnalise == 'PUBLICADO' && diffDate(arr[index].FimCaptacao) != 'encerrado'
        ? remove.unshift(index)
        : '';
    }
    remove.forEach((element) => {
      arr.splice(element, 1);
    });
    return arr;
  };
  const pegaPublicados = (arr) => {
    const publicado = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].StatusAnalise == 'PUBLICADO' && diffDate(arr[i].FimCaptacao) != 'encerrado') {
        const porcentagem = (arr[i].ValorCaptado / arr[i].Valor) * 100;
        publicado.push({ ...arr[i], porcentagem });
      }
    }
    return publicado;
  };
  const porcentagemSort = (arr) => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].porcentagem > arr[i + 1].porcentagem) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  const loadOpportunities = async () => {
    if (page > pageTotal) return;

    if (loading) return;

    setLoading(true);

    const resp = await Request.GET({
      url: UrlListaOportunidades(page, filter),
      header: 'bearer',
    });

    if (resp.status === 200) {
      setPageTotal(resp.data.Paginas);

      let oportunidades = resp.data.ItemListagemSolicitacoes;
      const publicados = pegaPublicados(oportunidades);
      oportunidades = removePublicados(oportunidades);
      porcentagemSort(publicados);
      oportunidades.unshift(...publicados);

      console.log(oportunidades);
      setOpportunities([...opportunities, ...oportunidades]);

      setPage(page + 1);
    } else {
      navigation.setParams({ filter: 'AA-A-B-C-D-E-HR' });

      Alert.alert('', 'Nenhuma oportunidade foi encontrada.');
    }

    setLoading(false);
  };

  const renderItem = (item) => <OpportunitiesCard data={item} />;

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <LoadingContainer>
        <ActivityIndicator />
      </LoadingContainer>
    );
  };

  const resetData = () => {
    setPage(1);
    setOpportunities([]);
  }
  // effects

  useEffect(() => {
    resetData()
  }, [filter]);

  useEffect(() => {
    if (opportunities.length > 0) return;

    const fetchOpportunities = async () => {
      await loadOpportunities();
    };

    fetchOpportunities();
  }, [opportunities]);

  // render

  return (
    <SafeAreaView>
      <NavigationEvents onDidFocus={() => resetData() }/>
      <MessageBox />

      <FlatList
        data={opportunities}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={loadOpportunities}
        keyExtractor={(item) => item._id}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export const Opportunities = {
  screen: PageOpportunities,
  navigationOptions: ({ navigation }) => {
    const params = {
      options: [
        { text: 'AA', value: 'AA' },
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C' },
        { text: 'D', value: 'D' },
        { text: 'E', value: 'E' },
        { text: 'HR', value: 'HR' },
        { text: 'Todos', value: 'A-B-C-D-E-HR' },
      ],
      onValueChange: (value) => navigation.setParams({ filter: value }),
      data: navigation.getParam('filter', 'AA-A-B-C-D-E-HR'),
    };

    return {
      headerTitle: 'Oportunidades',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Picker', params)}>
          <Filter />
        </TouchableOpacity>
      ),
    };
  },
};
