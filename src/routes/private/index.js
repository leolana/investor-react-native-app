
import { createStackNavigator } from 'react-navigation-stack'

import { ToggleMenu } from  '../../components'


import Opportunities from '../../screens/opportunities/index.js'

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

export const PrivateRoutes = createStackNavigator(
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

  