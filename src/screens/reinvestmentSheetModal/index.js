import React, { useState, useEffect } from 'react'

import {
    SheetModal,
    Toast
} from '../../components'

import {
    Container,
    TextInput,
    InfoText,
    Text,
    Buttom,
    ButtomText
} from './styles'

import {
    IconCurrencyExchange
} from '../../assets/icons'


import { 
    greenTwo, 
    grey99 
} from '../../assets/colors'

import { useSelector } from 'react-redux'

import { formatMoney } from '../../utils'

export const ReinvestmentSheetModal = props => {

    // states

    const [ reinvestmentValue, setReinvestmentValue ] = useState(0)

    const [ isValid, setIsValid ] = useState(false)

    // vars

    const name = useSelector( ({userData}) => userData.Name )

    const data = props.navigation.getParam('data', null)

    const onValueChange = props.navigation.getParam( 'onValueChange', () => {} )

    // Effects 

    useEffect( () => {

        onValueChange(reinvestmentValue)

        if(reinvestmentValue > data.value) {

            Toast.showError(`O valor deve ser menor ou igual ao investido: ${formatMoney(data.value)}`)
            
            return setIsValid(false)
        }

        else if(reinvestmentValue > data.walletBalance) {

            Toast.showError(`Saldo indisponível para o reinvestimento. Valor máximo: ${formatMoney(data.walletBalance)}`)

            return setIsValid(false)
        }

        else if(reinvestmentValue <= 0 ) return setIsValid(false)

        else return setIsValid(true)


    }, [reinvestmentValue]) 


    // render


    return (
        <SheetModal>

            <Container>

                <IconCurrencyExchange fill={greenTwo} width={ 64 } height={ 64 } />

                <InfoText>
                    <Text>{name}</Text>, 
                    você possuí saldo em sua Carteira virtual. 
                    Gostaria de reinvestir como parte do pagamento?
                </InfoText>

                <InfoText>Saldo: <Text>{formatMoney(data.walletBalance)}</Text></InfoText>

                <TextInput
                    mask={ 'currency' } 
                    onValueChange={ ({unMasked}) => setReinvestmentValue(unMasked) } 
                    keyboardType={'numeric'}
                />

                <Buttom disabled={ !isValid } onPress={ () => props.navigation.goBack() }>
                    <ButtomText>REINVESTIR</ButtomText>
                </Buttom>

                <Buttom background={'transparent'} onPress={ () => props.navigation.goBack() } >
                    <ButtomText color={grey99} >CANCELAR</ButtomText>
                </Buttom>


            </Container>

        </SheetModal>
    )
}