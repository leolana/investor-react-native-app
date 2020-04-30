import * as React from 'react';
import Routes from './routes';

import { Provider } from 'react-redux';

import Store from './store';

import { ToastView } from './components';

class App extends React.Component {
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

export default App;
