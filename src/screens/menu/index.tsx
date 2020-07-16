import React from 'react';

import { View, Text, ViewList, NavigationItem, IconGo, IconSafeArea, NotificationDot } from './styles';

import { useSelector } from 'react-redux';

import { dusk, tealish, twilight, white, redTwo } from '../../assets/colors';

import {
  IconBell,
  IconOfficeArchive,
  IconBriefcase,
  IconCalculator,
  IconPieChart,
  IconProfile,
  IconBubbleDialog,
  IconWallet,
} from '../../assets/icons';

import { Header, Item } from './components';

import { UrlIouuAjuda } from '../../services';

export const MenuComponent = (props) => {
  // vars

  const accountData = useSelector((store) => store.account.accountData);

  // methods

  const renderIconBell = () => (
    <IconSafeArea>
      <IconBell fill={white} width={24} height={24} />

      <NotificationDot background={redTwo} borderSize={2} borderColor={white} size={10} />
    </IconSafeArea>
  );

  return (
    <>
      <Header accountData={accountData} />

      <View colors={[dusk, twilight]}>
        <ViewList>
          {/* <Item title="Notificações" route="Notifications">
            {renderIconBell()}
          </Item> */}

          <Item title="Meu Histórico" route="Historic">
            <IconOfficeArchive fill={white} />
          </Item>

          {/* <Item title="Estatísticas" route="Statistics">
            <IconPieChart fill={white} />
          </Item>

          <Item title="Calculadora" route="Calculator">
            <IconCalculator fill={white} />
          </Item> */}

          <Item title="Atendimento" route={UrlIouuAjuda}>
            <IconBubbleDialog fill={white} />
          </Item>
        </ViewList>
      </View>
    </>
  );
};

export const Menu = {
  screen: MenuComponent,
  navigationOptions: {
    headerShown: false,
  },
};
