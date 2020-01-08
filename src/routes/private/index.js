
import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Notifications } from '../../screens/notifications'

import { History } from '../../screens/history'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { Wallet, WalletSheetModal } from '../../screens/wallet'

import { tealish, white } from '../../assets/colors'

const mainConfig = {
    defaultNavigationOptions: {
    
    headerBackTitle: 'Voltar',
    headerTintColor: white,
    headerStyle: {
            backgroundColor: tealish,
        },
        headerTitleStyle: { 
            color: white,
            fontFamily: 'Montserrat-Regular'
        }
    },
}

export const ScreenRoutes = createStackNavigator(
    {
        Opportunities,
        Notifications,
        History,
        Statistics,
        Profile,
        Wallet,
    },
    mainConfig
)

export const PrivateRoutes = createStackNavigator(
    {
        ScreenRoutes,
        WalletSheetModal
        
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        defaultNavigationOptions: {
            gesturesEnabled: false
        },
        cardStyle: {
            opacity: 1.0
        },
    }
)

  