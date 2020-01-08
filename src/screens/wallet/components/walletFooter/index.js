import React, { useState, useEffect } from 'react'


import {
    FlatList
} from 'react-native-gesture-handler'

import {
    Text,
    Button,
    TitleDivisor,
    Divisor,
    View,
    ListContainer,
} from './styles'

import {
    WalletCard
} from '../index'

export const WalletFooter = props => {

    // Props

    const {
        historicData
    } = props

    // States

    const [ historic, setHistoric ] = useState(null)


    // Methods


    // Effect

    useEffect( () => {

        if(historicData !== null) setHistoric(historicData)

    }, [historicData])


    // Render

    return (
        <View> 
            <Divisor>
                <TitleDivisor> Últimas transações </TitleDivisor>
            </Divisor>

            <ListContainer>

                <FlatList
                    data={ (historic) ? historic.Carteira : []  }
                    renderItem={ data => <WalletCard data={ {...data, Investidor: historic } } /> }
                    keyExtractor={ item => item._id }
                />

            </ListContainer>

            <Button onPress={ () => {} } >

                <Text> VISUALIZAR TODOS </Text>

            </Button>
        </View>
    )
}