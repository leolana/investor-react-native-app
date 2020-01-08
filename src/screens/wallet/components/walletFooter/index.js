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
} from '../index'

export const WalletFooter = props => {

    // Props

    const {
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

                operacoes.map( data => <WalletCard data={ data } /> )

            }

            <Button onPress={ () => {} } >

                <Text> VISUALIZAR TODOS </Text>

            </Button>

        </View>
    )
}