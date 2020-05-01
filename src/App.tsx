import * as React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Routes from './routes';
import Store from './store';
import { ToastView } from './components';

const customFonts = {
  'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.otf'),
  'Montserrat-ExtraBold': require('./assets/fonts/montserrat/Montserrat-ExtraBold.otf'),
  'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.otf'),
  'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.otf'),
  'OpenSans-Bold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
  'OpenSans-ExtraBold': require('./assets/fonts/open-sans/OpenSans-ExtraBold.ttf'),
  'OpenSans-Light': require('./assets/fonts/open-sans/OpenSans-Light.ttf'),
  'OpenSans-SemiBold': require('./assets/fonts/open-sans/OpenSans-SemiBold.ttf'),
  'OpenSans-Regular': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
};

class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    console.disableYellowBox = true;
  }

  render() {
    if (this.state.fontsLoaded === false) {
      return <AppLoading />;
    }

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
