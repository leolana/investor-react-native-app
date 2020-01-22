

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { PublicRoutes } from './public'
import { PrivateRoutes } from './private'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Opportunities } from '../screens/opportunities'

import { BottomNavigator } from '../components'

const PrivateRoutesTabs = createBottomTabNavigator(
  { 
    Opportunities,
    Opportunities,
    Opportunities,
    PrivateRoutes 
  },
  { tabBarComponent: BottomNavigator }
)

export default createAppContainer(
  createSwitchNavigator( { PublicRoutes, PrivateRoutesTabs },
  { initialRouteName: 'PublicRoutes' }
))