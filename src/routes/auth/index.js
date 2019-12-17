
import { createStackNavigator } from 'react-navigation-stack'


import { white } from '../../assets/colors'

import Welcome from '../../screens/welcome'
import Login from '../../screens/login'


const mainConfig = {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar',
      headerTitleStyle: {
        color: white
      },
      headerStyle: {
      shadowOpacity: 0,
      elevation: 0,

      },
    },
}
export default createStackNavigator(
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