import React from 'react'

import {
    Text,
    NavigationItem,
    IconGo,

} from './styles'


import {
    tealish,
} from '../../../../assets/colors'

import { withNavigation } from 'react-navigation'

export const ItemComponent = props => {

    const { 
        route,
        children,
        title,
        navigation
    
    } = props


    return (
        <NavigationItem onPress={ () => navigation.navigate(route) }>
            { children }
            <Text textAlign="left" > { title } </Text>
            <IconGo stroke={ tealish } width={ 16 } height={ 16 }/>
        </NavigationItem>
    )
}

export const Item = withNavigation(ItemComponent)