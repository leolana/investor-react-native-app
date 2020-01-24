
import { createStackNavigator } from 'react-navigation-stack'


import { white, tealish } from '../../assets/colors'

import Welcome from '../../screens/welcome'
import Login from '../../screens/login'



const mainConfig = {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerBackTitle: ' ',
      headerTintColor: tealish,
      headerTitleStyle: {
        color: white
      },
      headerStyle: {
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,
        marginHorizontal: 10,

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