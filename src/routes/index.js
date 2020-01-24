

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { PublicRoutes } from './public'
import { PrivateRoutes } from './private'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import { BottomNavigator } from '../components'

const PrivateRoutesTabs = createBottomTabNavigator(
  { 
    PrivateRoutes 
  },
  { tabBarComponent: BottomNavigator, initialRouteName: 'PrivateRoutes' }
)

export default createAppContainer(
  createSwitchNavigator( { PublicRoutes, PrivateRoutesTabs },
  { initialRouteName: 'PublicRoutes' }
))