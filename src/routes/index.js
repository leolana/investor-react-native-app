

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { DrawerNavigator, BottomNavigator } from  '../components'

import { PublicRoutes } from './public'
import { PrivateRoutes } from './private'

import { Dimensions } from 'react-native'


const { width }  = Dimensions.get('screen')


const TabRoutes = createBottomTabNavigator(
  {
    PrivateRoutes,
  },
  {
    tabBarComponent: BottomNavigator
  }
)

const DrawerRoutes = createDrawerNavigator(
  {
    TabRoutes,
  },
  {
    initialRouteName: 'TabRoutes',
    contentComponent:  DrawerNavigator,
    drawerWidth: width,
  }
)




export default createAppContainer(
  createSwitchNavigator( { PublicRoutes, DrawerRoutes },
  { initialRouteName: 'PublicRoutes' }
))