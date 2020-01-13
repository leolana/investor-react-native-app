

import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Notifications } from '../../screens/notifications'

import { History } from '../../screens/history'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { Wallet, WalletSheetModal } from '../../screens/wallet'

import { WalletHistoric } from '../../screens/walletHistoric'

import { TransferFunds } from '../../screens/transferFunds'

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
        WalletHistoric,
        TransferFunds,
    },
    mainConfig
)

// export const PopupRoutes = createStackNavigator(
//     {
        
//     },
//     {
//         mode: 'modal',  
//         defaultNavigationOptions: ({navigation}) => (
//             {
//                 headerLeft: null,
//                 headerRight: (<ToolbarCloseButtom navigation={navigation} />),
//                 headerTintColor: white,
//                 headerStyle: {
//                     backgroundColor: tealish,
//                 },
//                 headerTitleStyle: { 
//                     color: white,
//                     fontFamily: 'Montserrat-Regular'
//                 }
                
//             }
//         )
//     }
// )

const translateAnim = (props) => {
    const { 
        layout, 
        position, 
        scene 
    } = props
  
    const index = scene.index;
    const height = layout.initHeight;
  
    const translateX = 0;
    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0]
    })
  
    return { transform: [{ translateX }, { translateY }] }
  }


export const PrivateRoutes = createStackNavigator(
    {
        ScreenRoutes,
        WalletSheetModal,
        
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
        transitionConfig: () => ({ screenInterpolator: translateAnim }),
    }
)

  