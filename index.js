
import { AppRegistry } from 'react-native'

import App from './src/app.js'

import { name } from './app.json';

if(Platform.OS === 'android') { 
    require('intl')
    require('intl/locale-data/jsonp/pt-BR')
    require('date-time-format-timezone')
}

AppRegistry.registerComponent(name, () => App);
