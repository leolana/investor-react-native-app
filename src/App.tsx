import React, { Component } from 'react';
import Routes from './routes';

import { Provider } from 'react-redux';

import Store from './store';

import { ToastView } from './components';

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={Store}>
        <>
          <Routes />

          <ToastView />
        </>
      </Provider>
    );
  }
}
