

import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Notifications } from '../../screens/notifications'

import { History } from '../../screens/history'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { Wallet, WalletSheetModal } from '../../screens/wallet'

import { WalletReceipt } from '../../screens/walletReceipt'

import { WalletHistoric } from '../../screens/walletHistoric'

import { TransferWalletBalance } from '../../screens/transferWalletBalance'

import { TransferWalletBalanceConfirmation } from '../../screens/transferWalletBalanceConfirmation'

import { TransferWalletBalanceSuccess } from '../../screens/transferWalletBalanceSuccess'

import { Company } from '../../screens/company'

import { More } from '../../screens/more'

import { DatePicker } from '../../screens/datePicker'

import { tealish, white } from '../../assets/colors'

import React from 'react'

import { ToolbarCloseButtom } from '../../components'

import { storeData } from '../../utils'

export const ScreenRoutes = createStackNavigator(
    {
        Opportunities,
        Wallet,
        Profile,
        Notifications,
        History,
        Statistics,
        WalletReceipt,
        WalletHistoric,
        TransferWalletBalance,
        Company,
        More: {
            screen: More,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => {

            navigation.addListener('willFocus', ({state}) => storeData('RouteName', state.routeName))

            return {
        
                headerBackTitle: 'Voltar',
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: tealish,
                },
                headerTitleStyle: { 
                    color: white,
                    fontFamily: 'Montserrat-Regular'
                }
            }
        }
    }
)

export const PopupRoutes = createStackNavigator(
    {
        TransferWalletBalanceConfirmation
    },
    {
        mode: 'modal',  
        defaultNavigationOptions: ({navigation}) => (
            {
                headerLeft: null,
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
        PopupRoutes,
        DatePicker,
        TransferWalletBalanceSuccess,
        
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

  