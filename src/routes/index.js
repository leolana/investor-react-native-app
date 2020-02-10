

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

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
  createStackNavigator( { PublicRoutes, PrivateRoutesTabs },
  { 
    initialRouteName: 'PublicRoutes',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
  }
))