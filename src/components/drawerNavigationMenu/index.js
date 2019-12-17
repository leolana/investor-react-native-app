import React, { useEffect } from 'react'

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
    useSelector
} from 'react-redux'

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



export const ToggleMenu = props => {

    


    return (
        <MenuHorizontalArea onPress={ ()=> props.scene.descriptor.navigation.openDrawer() } >
            <IconMenu width={ 20 } height={ 20 } />
        </MenuHorizontalArea>
    )
}

export default App = props => {

    const userName = useSelector( ({userData}) => (userData !== undefined) ? userData.Name : '' )

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

                <Letter> { userName[0] } </Letter>

            </Circle>

            <Text
                fontWeight="bold"
                fontFamily="Montserrat-Regular"
            > 
                { userName }
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
                    {renderNavigationItem(getIcon('Notification'), 'Notificações', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Oportunidades', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Carteira virtual', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Meu histórico', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Estatísticas', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Calculadora', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Meu perfil', 'Opportunities')}
                    {renderNavigationItem(getIcon('Notification'), 'Atendimento', null)}
                </ViewList>
            </View>
        </>
    )
}