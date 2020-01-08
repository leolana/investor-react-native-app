

import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Notifications } from '../../screens/notifications'

import { History } from '../../screens/history'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { Wallet, WalletSheetModal } from '../../screens/wallet'

import { WalletHistoric } from '../../screens/walletHistoric'

import { tealish, white } from '../../assets/colors'

import React from 'react'
import { ToolbarCloseButtom } from '../../components'


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

export const PopupRoutes = createStackNavigator(
    {
        WalletHistoric,
    },
    {
        mode: 'modal',  
        defaultNavigationOptions: ({navigation}) => (
            {
                headerRight: (<ToolbarCloseButtom navigation={navigation} />),
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: tealish,
                },
                headerTitleStyle: { 
                    color: white,
                    fontFamily: 'Montserrat-Regular'
                }
                
            }
        )
    }
)


export const PrivateRoutes = createStackNavigator(
    {
        ScreenRoutes,
        WalletSheetModal,
        PopupRoutes,
        
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        defaultNavigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: { vertical: 1000 }
        },
        cardStyle: {
            opacity: 1.0
        },
    }
)

  