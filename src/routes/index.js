

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthRoutes from './auth'
import MainRoutes from './main'


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthRoutes,
      MainRoutes,
    },
  {
    initialRouteName: 'AuthRoutes',
  }
))