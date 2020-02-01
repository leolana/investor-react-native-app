import React, { useState, useEffect } from 'react'


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

import { retrieveData } from '../../utils'

import {
    Animated
} from 'react-native'

const AnimatedTouchable = Animated.createAnimatedComponent(Touchable)

export const BottomNavigator  = ({ navigation }) => {

    const [ index, setIndex ] = useState('Opportunities')


    const onPressed = route => navigation.navigate(route)

    const isOpportunities = (index === 'Opportunities')
    const isWallet = (index === 'Wallet')
    const isProfile = (index === 'Profile')
    const isMenu = (index === 'Menu')

    

    useEffect( () => {

        async function fetchData() {

            const routeName = await retrieveData('RouteName')

            setIndex(routeName)

        }

        fetchData()

    }, [navigation] )



    return (
        <Container>

            <AnimatedTouchable onPress={ () => onPressed('Opportunities') } >
                <>
                    <IconBriefcase fill={ isOpportunities ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={isOpportunities} >Oportunidades</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('Wallet') } >
                <>
                    <IconWallet stroke={ isWallet ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={isWallet} >Carteira</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('Profile') } >
                <>
                    <IconProfile fill={ isProfile ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={isProfile} >Perfil</Text>
                </>
            </AnimatedTouchable>

            <AnimatedTouchable onPress={ () => onPressed('Menu') } >
                <>
                    <IconMoreCirlces fill={ isMenu ? black : grey99 } width={ 24 } height={ 24 } />
                    <Text isSelected={isMenu} >Mais</Text>
                </>
            </AnimatedTouchable>

            
        </Container>
    )
}