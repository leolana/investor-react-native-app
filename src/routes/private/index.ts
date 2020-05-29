import { createStackNavigator } from 'react-navigation-stack';

import { Opportunities } from '../../screens/opportunities';

import { Invest } from '../../screens/invest';

import { Notifications } from '../../screens/notifications';

import { Statistics } from '../../screens/statistics';

import { Profile } from '../../screens/profile';

import { ChangePassword } from '../../screens/changePassword';

import { Wallet } from '../../screens/wallet';

import { WalletSheetModal } from '../../screens/walletSheetModal';

import { WalletReceipt } from '../../screens/walletReceipt';

import { WalletHistoric } from '../../screens/walletHistoric';

import { TransferWalletBalance } from '../../screens/transferWalletBalance';

import { TransferWalletBalanceConfirmation } from '../../screens/transferWalletBalanceConfirmation';

import { TransferWalletBalanceSuccess } from '../../screens/transferWalletBalanceSuccess';

import { FinancialIndicators } from '../../screens/financialIndicators';

import { ComplementaryIndicators } from '../../screens/complementaryIndicators';

import { SocioInformation } from '../../screens/socioInformation';

import { Picker } from '../../screens/picker';

import { OpportunitieProfile } from '../../screens/opportunitieProfile';

import { Company } from '../../screens/company';

import { Menu } from '../../screens/menu';

import { DatePicker } from '../../screens/datePicker';

import { ReinvestmentSheetModal } from '../../screens/reinvestmentSheetModal';

import { Historic } from '../../screens/historic';

import { HistoricFilter } from '../../screens/historicFilter';

import { HistoricProfile } from '../../screens/historicProfile';

import { HistoricPayment } from '../../screens/historicPayment';

import { Configurations } from '../../screens/configurations';

import { CCBsList } from '../../screens/CCBsList';

import { CCBSign } from '../../screens/CCBSign';

import { CCBSignSuccess } from '../../screens/CCBSignSuccess';

import { Calculator } from '../../screens/calculator';

import { InvestWaitingListSuccess } from '../../screens/investWaitingListSuccess';

import { CancelInvestment } from '../../screens/cancelInvestment';

import { Documents } from '../../screens/documents';

import { PhotoViewer } from '../../screens/photoViewer';

import { VideoViewer } from '../../screens/videoViewer';

import { SignUpInvestorStepWelcome } from '../../screens/signUpInvestorStepWelcome';

import { SignUpInvestorStepOne } from '../../screens/signUpInvestorStepOne';

import { SignUpInvestorStepTwo } from '../../screens/signUpInvestorStepTwo';

import { SignUpInvestorStepThree } from '../../screens/signUpInvestorStepThree';

import { SignUpInvestorStepFour } from '../../screens/signUpInvestorStepFour';

import { SignUpInvestorStepFive } from '../../screens/signUpInvestorStepFive';

import { SignUpInvestorStepSix } from '../../screens/signUpInvestorStepSix';

import { SignUpInvestorStepSeven } from '../../screens/signUpInvestorStepSeven';

import { SignUpInvestorStepEight } from '../../screens/signUpInvestorStepEight';

import { SignUpInvestorStepNine } from '../../screens/signUpInvestorStepNine';

import { SignUpInvestorStepTen } from '../../screens/signUpInvestorStepTen';

import { SignUpInvestorStepEleven } from '../../screens/signUpInvestorStepEleven';

import { SignUpInvestorStepTwelve } from '../../screens/signUpInvestorStepTwelve';

import { SignUpInvestorStepThirteen } from '../../screens/signUpInvestorStepThirteen';

import { SignUpInvestorStepFourteen } from '../../screens/signUpInvestorStepFourteen';

import { SignUpInvestorStepFifteen } from '../../screens/signUpInvestorStepFifteen';

import { tealish, white } from '../../assets/colors';

import { storeData } from '../../utils';

import { SuitabilityWelcome } from '../../screens/formSuitabilityStepWelcome';

import { SuitabilityOne } from '../../screens/formSuitabilityStepOne';

import { SuitabilityTwo } from '../../screens/formSuitabilityStepTwo';

import { SuitabilityThree } from '../../screens/formSuitabilityStepThree';

import { SuitabilityFour } from '../../screens/formSuitabilityStepFour';

import { ExpoCamera } from '../../screens/camera';

// Vars

const mainScreenRoutesConfig = {
  defaultNavigationOptions: ({ navigation }) => {
    navigation.addListener('willFocus', ({ state }) => storeData('RouteName', state.routeName));

    return {
      headerBackTitle: 'Voltar',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: tealish,
      },
      headerTitleStyle: {
        color: white,
        fontFamily: 'Montserrat-Regular',
      },
    };
  },
};

const translateAnim = (props) => {
  const { layout, position, scene } = props;

  const index = scene.index;
  const height = layout.initHeight;

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });

  return {
    transform: [{ translateX }, { translateY }],
  };
};

const modalScreenRoutesConfig = {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    transparentCard: true,
    gestureEnabled: false,
    gestureResponseDistance: { vertical: 1000 },
    cardStyle: {
      opacity: 1.0,
    },
  },
  transitionConfig: () => ({ screenInterpolator: translateAnim }),
};

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
    Calculator,
    Statistics,
    WalletReceipt,
    WalletHistoric,
    TransferWalletBalance,
    OpportunitieProfile,
    Configurations,
    CCBsList,
    CCBSign,
    Company,
    FinancialIndicators,
    ComplementaryIndicators,
    SocioInformation,
    Invest,
    TransferWalletBalanceConfirmation,
    InvestWaitingListSuccess,
    Documents,
    PhotoViewer,
    VideoViewer,
    Menu,
    SignUpInvestorStepWelcome,
    SignUpInvestorStepOne,
    SignUpInvestorStepTwo,
    SignUpInvestorStepThree,
    SignUpInvestorStepFour,
    SignUpInvestorStepFive,
    SignUpInvestorStepSix,
    SignUpInvestorStepSeven,
    SignUpInvestorStepEight,
    SignUpInvestorStepNine,
    SignUpInvestorStepTen,
    SignUpInvestorStepEleven,
    SignUpInvestorStepTwelve,
    SignUpInvestorStepThirteen,
    SignUpInvestorStepFourteen,
    SignUpInvestorStepFifteen,
    SuitabilityWelcome,
    SuitabilityOne,
    SuitabilityTwo,
    SuitabilityThree,
    SuitabilityFour,
    ExpoCamera,
  },
  mainScreenRoutesConfig,
);

export const PrivateRoutes = createStackNavigator(
  {
    ScreenRoutes,
    WalletSheetModal,
    ReinvestmentSheetModal,
    CancelInvestment,
    DatePicker,
    TransferWalletBalanceSuccess,
    CCBSignSuccess,
    Picker,
  },
  modalScreenRoutesConfig,
);
