

import { createStackNavigator } from 'react-navigation-stack'

import { Opportunities } from '../../screens/opportunities'

import { Invest } from '../../screens/invest'

import { Notifications } from '../../screens/notifications'

import { Statistics } from '../../screens/statistics'

import { Profile } from '../../screens/profile'

import { ChangePassword } from '../../screens/changePassword'

import { Wallet } from '../../screens/wallet'

import { WalletSheetModal } from '../../screens/walletSheetModal'

import { WalletReceipt } from '../../screens/walletReceipt'

import { WalletHistoric } from '../../screens/walletHistoric'

import { TransferWalletBalance } from '../../screens/transferWalletBalance'

import { TransferWalletBalanceConfirmation } from '../../screens/transferWalletBalanceConfirmation'

import { TransferWalletBalanceSuccess } from '../../screens/transferWalletBalanceSuccess'

import { FinancialIndicators } from '../../screens/financialIndicators'

import { ComplementaryIndicators } from '../../screens/complementaryIndicators'

import { SocioInformation } from '../../screens/socioInformation'

import { Picker } from '../../screens/picker'

import { OpportunitieProfile } from '../../screens/opportunitieProfile'

import { Company } from '../../screens/company'

import { Menu } from '../../screens/menu'

import { DatePicker } from '../../screens/datePicker'

import { ReinvestmentSheetModal } from '../../screens/reinvestmentSheetModal'

import { Historic } from '../../screens/historic'

import { HistoricFilter } from '../../screens/historicFilter'

import { HistoricProfile } from '../../screens/historicProfile'

import { HistoricPayment } from '../../screens/historicPayment'

import { Configurations } from '../../screens/configurations'

import { CCBsList } from '../../screens/CCBsList'

import { InvestWaitingListSuccess } from '../../screens/investWaitingListSuccess'

import { PhotoViewer } from '../../screens/photoViewer'

import { VideoViewer } from '../../screens/videoViewer'

import { tealish, white } from '../../assets/colors'

import { storeData } from '../../utils'


// Vars

const mainScreenRoutesConfig = {

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

const modalScreenRoutesConfig = {

    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    defaultNavigationOptions: {
        gesturesEnabled: false,
        gestureResponseDistance: { vertical: 1000 }
    },
    cardStyle: {
        opacity: 1.0
    },
    transitionConfig: () => ({ screenInterpolator: translateAnim }),
}

// Methods

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
  
    return { 
        transform: [{ translateX }, { translateY }] 
    }
}

// Routes

export const ScreenRoutes = createStackNavigator(
    {
        Opportunities,
        Wallet,
        Profile,
        ChangePassword,
        Notifications,
        Historic,
        HistoricProfile,
        HistoricPayment,
        HistoricFilter,
        Statistics,
        WalletReceipt,
        WalletHistoric,
        TransferWalletBalance,
        OpportunitieProfile,
        Configurations,
        CCBsList,
        Company,
        FinancialIndicators,
        ComplementaryIndicators,
        SocioInformation,
        Invest,
        TransferWalletBalanceConfirmation,
        InvestWaitingListSuccess,
        PhotoViewer,
        VideoViewer,
        Menu,
    },
    mainScreenRoutesConfig
)


export const PrivateRoutes = createStackNavigator(
    {
        ScreenRoutes,
        WalletSheetModal,
        ReinvestmentSheetModal,
        DatePicker,
        TransferWalletBalanceSuccess,
        Picker,
        
    },
    modalScreenRoutesConfig
)

  