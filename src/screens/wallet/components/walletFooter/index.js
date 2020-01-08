import React, { useState, useEffect } from 'react'

import {
    Text,
    Button,
    TitleDivisor,
    Divisor,
    View,
} from './styles'

import {
    WalletCard
} from '../../../../components'

import { withNavigation } from 'react-navigation'

export const WalletFooterComponent = props => {

    // Props

    const {
        navigation,
        walletData
    } = props

    // States

    const [ operacoes, setOperacoes ] = useState([])

    // Effect

    useEffect( () => {

        if(walletData == null) return


        const list = walletData.Operacoes

        setOperacoes(list.splice(list.lenght, 4))


    }, [walletData])


    // Render

    return (
        <View> 
            <Divisor>
                <TitleDivisor> Últimas transações </TitleDivisor>
            </Divisor>

            {

                operacoes.map( (data, i) => <WalletCard data={ data } key={i} /> )

            }

            <Button onPress={ () => navigation.navigate('WalletHistoric') } >

                <Text> VISUALIZAR TODOS </Text>

            </Button>

        </View>
    )
}

export const WalletFooter = withNavigation(WalletFooterComponent)