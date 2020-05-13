import React from 'react';

import { SafeAreaView } from './styles';

import { Card } from './components';

import { FlatList } from 'react-native';

export const ComplementaryIndicatorsComponent = (props) => {
  // props

  const { navigation } = props;

  // vars

  const data = navigation.getParam('data', null);

  // methods

  const formatList = (oldList) => {
    if (!oldList || oldList.length <= 0) return [];

    const newList = {};

    oldList.map((el) => {
      const key = el.Grupo.replace(/[^A-Z0-9]+/gi, '');

      if (newList[key] === undefined) newList[key] = { Name: el.Grupo, List: [] };

      newList[key].List.push(el);
    });

    return Object.values(newList);
  };

  // render

  return (
    <SafeAreaView>
      <FlatList
        style={{ padding: 16 }}
        data={formatList(data.Empresa.IndicesFinanceiros)}
        renderItem={({ item }) => <Card data={item} />}
        key={(item) => item.index}
      />
    </SafeAreaView>
  );
};

export const ComplementaryIndicators = {
  screen: ComplementaryIndicatorsComponent,
  navigationOptions: {
    headerTitle: 'Índices complementares',
  },
};
