

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { DrawerNavigator } from  '../components'

import { PublicRoutes } from './public'
import { PrivateRoutes } from './private'


const DrawerRoutes = createDrawerNavigator(
  {
    PrivateRoutes,
  },
  {
      initialRouteName: 'PrivateRoutes',
      contentComponent:  DrawerNavigator,
      drawerPosition: 'left',
  }
)



export default createAppContainer(
  createSwitchNavigator( { PublicRoutes, DrawerRoutes },
  { initialRouteName: 'PublicRoutes' }
))