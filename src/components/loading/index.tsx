import React from 'react';

import { SafeAreaView, LoadingView } from './styles';

import { ActivityIndicator } from 'react-native';

export const Loading = (props) => {
  // methods

  const renderLoading = () => (
    <LoadingView>
      <ActivityIndicator size="large" />
    </LoadingView>
  );

  // render

  return <SafeAreaView>{props.loading ? renderLoading() : props.children}</SafeAreaView>;
};
