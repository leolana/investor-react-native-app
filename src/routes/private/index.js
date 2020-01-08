
import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Notifications } from '../../screens/notifications'

import { History } from '../../screens/history'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { Wallet } from '../../screens/wallet'

import { WalletSheetModal } from '../../screens/walletSheetModal'

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
        WalletSheetModal: {
            screen: WalletSheetModal,
            navigationOptions: {
                gestureResponseDistance: { vertical: 0 }
            },
        }

        
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
    }
)

  