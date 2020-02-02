
import { createStackNavigator } from 'react-navigation-stack'


import { tealish } from '../../assets/colors'

import Welcome from '../../screens/welcome'
import Login from '../../screens/login'



const mainConfig = {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar',
      headerTintColor: tealish,
      headerTitleStyle: {
        color: tealish
      },
      headerStyle: {
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,

      },
    },
}


export const PublicRoutes = createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
        navigationOptions: {
          headerShown: false,
        }
      },
      Login
      
    },
    mainConfig
  )