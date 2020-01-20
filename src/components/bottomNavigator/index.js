import React, { useState } from 'react'


import {
    Container,
    Touchable,
    Text,
} from './styles'

import {
    IconBriefcase,
    IconProfile,
    IconWallet,
    IconMoreCirlces
} from '../../assets/icons'

import {
    grey99,
    black,
} from '../../assets/colors'

import {
    Animated
} from 'react-native'

const AnimatedTouchable = Animated.createAnimatedComponent(Touchable)

export const BottomNavigator  = ({ navigation }) => {

    const [ index, setIndex ] = useState('')


    const onPressed = route => {

        setIndex(route)

        if(route === 'menu') return navigation.openDrawer()

        navigation.navigate(route)
    }



    return (
        <Container>

            <AnimatedTouchable onPress={ () => onPressed('Opportunities') } >
                <>
                    <IconBriefcase fill={ index === 'Opportunities' ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={(index === 'Opportunities')} >Oportunidades</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('Wallet') } >
                <>
                    <IconWallet stroke={ index === 'Wallet' ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={(index === 'Wallet')} >Carteira</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('Profile') } >
                <>
                    <IconProfile fill={ index === 'Profile' ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={(index === 'Profile')} >Perfil</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('menu') } >
                <>
                    <IconMoreCirlces fill={ grey99 } width={ 24 } height={ 24 } />
                    <Text >Mais</Text>
                </>
            </AnimatedTouchable>

            
        </Container>
    )
}