

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/welcome/index.js'
import Login from '../store/actions/manageAuth.js'
import Oportunities from '../screens/opportunities/index.js'


export default createAppContainer(
  createStackNavigator(
        {
        
          Welcome: {
            screen: Welcome,
            navigationOptions: {
              headerShown: false,
            }
          },

          Login: {
            screen: Login,
            navigationOptions: {
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
            }
          },

          Oportunities: {
            screen: Oportunities,
            navigationOptions: {
              title: 'Oportunidades',
            }
          },

        },
        {
          initialRouteName: 'Welcome',
          defaultNavigationOptions: {
            headerBackTitle: 'Voltar'
          },
        }
    )
);