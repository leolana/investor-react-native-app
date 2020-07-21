import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import customFonts from './assets/fonts';
import registerForPushNotifications from './services/firebase/registerForPushNotifications';

import Routes from './routes';
import store from './store';
import { ToastView } from './components';

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFontsAsync(): Promise<void> {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
    console.disableYellowBox = true;
    registerForPushNotifications();
  }, [fontsLoaded]);

  return (
    <React.Fragment>
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
        <Provider store={store}>
          <Routes />
          <ToastView />
        </Provider>
      )}
    </React.Fragment>
  );
};

export default App;
