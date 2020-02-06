import React, { useState, useEffect } from 'react'

import {
    View,
    Letter,
    Text,
    ViewList,
    NavigationItem,
    HeaderContent,
    HeaderContainer,
    Header,
    Circle,
    IconGo,
    MenuHorizontalArea,
    IconSafeArea,
    NotificationDot,

} from './styles'

import {
    useSelector
} from 'react-redux'

import {
    dusk,
    darkDusk,
    tealish,
    twilight,
    greenishBlue,
    white,
    redTwo
}   from '../../assets/colors'

import {
    IconBell,
    IconMenu,
    IconOfficeArchive,
    IconBriefcase,
    IconCalculator,
    IconPieChart,
    IconProfile,
    IconBubbleDialog,
    IconWallet,
} from '../../assets/icons'

import {
    formatMoney,
    trunc
} from '../../utils'

import {
    Request,
    UrlCarteiraPegar
} from '../../services'


export const MenuComponent = props => {

    const userName = useSelector( ({accountData}) => (accountData !== undefined) ? accountData.Nome : '' )

    const [ walletFunds, setWalletFunds ] = useState(null)

    const { navigation } = props

    useEffect(() => getWallet(), [navigation.state.isDrawerOpen] )

    const formatWalletFunds = ({ debito, credito }) => {

        const availableFunds = 
            ( parseFloat ( trunc(credito) ) -  parseFloat( trunc(debito) ) )

        const funds = 
            (parseFloat(availableFunds) > -0.1 && availableFunds < 0.01) ? 0 : availableFunds


        setWalletFunds(funds)
    }

    const getWallet = () => {
        
        const promise = Request.GET( { url: UrlCarteiraPegar } )

        promise.then( resp => formatWalletFunds(resp.data) )

    }


    const renderIconBell = () => (
        <IconSafeArea> 
                 
            <IconBell fill={ white } width={ 24 } height={ 24 } /> 

            <NotificationDot 
                background={ redTwo }
                borderSize={ 2 }
                borderColor={ white }
                size={ 10 }
            />

        </IconSafeArea>
    )



    const getIcon = key => {
        const obj = {
            'Notification': renderIconBell(),
            'Opportunitie': (<IconBriefcase fill={ white } width={ 24 } height={ 24 } />),
            'Wallet': (<IconWallet stroke={ white } width={ 24 } height={ 24 } />),
            'History': (<IconOfficeArchive fill={ white } width={ 24 } height={ 24 } />),
            'Calculator': (<IconCalculator fill={ white } width={ 24 } height={ 24 } />),
            'Statistics': (<IconPieChart fill={ white } width={ 24 } height={ 24 } />),
            'Profile': (<IconProfile fill={ white } width={ 24 } height={ 24 } />),
            'Contact': (<IconBubbleDialog fill={ white } width={ 24 } height={ 24 } />),

        }

        return obj[key]
    }


    const renderNavigationItem = (icon, title, route) => (
        <NavigationItem onPress={ () => navigation.navigate(route) }>
            { icon }
            <Text textAlign="left" > { title } </Text>
            <IconGo stroke={ tealish } width={ 16 } height={ 16 }/>
        </NavigationItem>
    )


    const renderLetter = () => (<Letter>{userName[0]}</Letter>)

    const renderHeaderContent = () => (
        <>
            <Circle
                size={ 90 }
                borderSize={ 4 }
                borderColor={ white }
                background={[greenishBlue, darkDusk]} 
                child={renderLetter()}
            />

            <Text
                fontWeight="bold"
                fontFamily="Montserrat-Regular"
            > 
                { userName }
            </Text>

            <Text
                fontSize={ 14 }
            > 
                Saldo: { formatMoney(walletFunds) }
            </Text>
        </>
    )

    return (
        <>
            <Header>
                <HeaderContainer>
                    <HeaderContent>

                        {renderHeaderContent()}

                    </HeaderContent>
        
                </HeaderContainer>
            </Header>
            <View colors={[dusk, twilight]} > 
                <ViewList>
                    {renderNavigationItem(getIcon('Notification'), 'Notificações', 'Notifications')}
                    {renderNavigationItem(getIcon('History'), 'Meu histórico', 'History')}
                    {renderNavigationItem(getIcon('Statistics'), 'Estatísticas', 'Statistics')}
                    {renderNavigationItem(getIcon('Calculator'), 'Calculadora', 'Opportunities')}
                    {renderNavigationItem(getIcon('Contact'), 'Atendimento', null)}
                </ViewList>
            </View>
        </>
    )
}

export const Menu = {
    screen: MenuComponent,
    navigationOptions: {
        header: null
    }
}