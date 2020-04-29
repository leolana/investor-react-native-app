import { createStackNavigator } from 'react-navigation-stack';

import { tealish } from '../../assets/colors';

import { Welcome } from '../../screens/welcome';
import Login from '../../screens/login';

import { SignUpUser } from '../../screens/signUpUser';

import { SignUpSuccess } from '../../screens/signUpSuccess';

// vars

const mainConfig = {
  initialRouteName: 'Welcome',
  defaultNavigationOptions: {
    headerBackTitle: 'Voltar',
    headerTintColor: tealish,
    headerTitleStyle: {
      color: tealish,
    },
    headerStyle: {
      shadowOpacity: 0,
      elevation: 0,
      borderBottomWidth: 0,
    },
  },
};

export const PublicRoutes = createStackNavigator(
  {
    Welcome,
    Login,
    SignUpUser,
    SignUpSuccess,
  },
  mainConfig,
);
