

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../actions/manageAuth.js';
import Oportunities from '../screens/opportunities/index';


export default createAppContainer(
  createStackNavigator(
        {
          Login: {
            screen: Login,
            navigationOptions: {
              headerShown: false,
            }
          },

          Oportunities: {
            screen: Oportunities,
            navigationOptions: {
              title: 'Oportunidades'
            }
          },

        },
        {
          initialRouteName: 'Login',
          defaultNavigationOptions: {
            
          },
        }
    )
);