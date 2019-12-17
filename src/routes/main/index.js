import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'


import Opportunities from '../../screens/opportunities/index.js'
import DrawerNavigationMenu, { ToggleMenu } from  '../../components/drawerNavigationMenu'

import { tealish, white } from '../../assets/colors'

const mainConfig = {
    defaultNavigationOptions: {
    
    headerBackTitle: 'Voltar',
    headerStyle: {
            backgroundColor: tealish,
        },
        headerTitleStyle: { 
            color: white,
            fontFamily: 'Montserrat-Regular'
        }
    },
}

export const MainRoutes = createStackNavigator(
    {
        Opportunities: {
        screen: Opportunities,
            navigationOptions: {
                headerTitle: "OPORTUNIDADES",
                headerLeft: ToggleMenu
            }
        },
    },
    mainConfig
)


export default createDrawerNavigator(
    {
        MainRoutes,
    },
    {
        initialRouteName: 'MainRoutes',
        contentComponent:  DrawerNavigationMenu,
        drawerPosition: 'left',
    }
)
  