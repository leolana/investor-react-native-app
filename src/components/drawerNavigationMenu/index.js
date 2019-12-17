import React from 'react'

import {
    View,
    Circle,
    Letter,
    Text,
    ViewList,
    NavigationItem,
    HeaderContent,
    HeaderContainer,
    Header,
    IconGo,
    MenuHorizontalArea,

} from './styles'

import {
    dusk,
    darkDusk,
    tealish,
    twilight,
    greenishBlue
}   from '../../assets/colors'

import {
    IconNotification,
    IconMenu
} from '../../assets/icons'



export const ToggleMenu = () => {


    return (
        <MenuHorizontalArea>
            <IconMenu width={ 20 } height={ 20 } />
        </MenuHorizontalArea>
    )
}

export default App = props => {

    const {
        navigation
    } = props


    const getIcon = key => {
        const obj = {
            'Notification': (<IconNotification width={ 20 } height={ 20 } />),
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

    const renderHeaderContent = () => (
        <>
            <Circle colors={[greenishBlue, darkDusk]} >

                <Letter> F </Letter>

            </Circle>

            <Text
                fontWeight="bold"
                fontFamily="Montserrat-Regular"
            > 
                Fabiano Coelho Silva 
            </Text>

            <Text
                fontSize={ 14 }
            > 
                Saldo: R$ 10.000,00
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
                    {renderNavigationItem(getIcon('Notification'), 'Carteira', 'Wallet')}
                    {renderNavigationItem(getIcon('Notification'), 'Oportunidades', 'Opportunities')}
                </ViewList>
            </View>
        </>
    )
}