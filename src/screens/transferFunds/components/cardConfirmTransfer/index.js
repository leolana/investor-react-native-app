import React, { useState, useEffect } from 'react'

import {
    ButtomText,
} from '../../styles'


import {
    Title,
    Text,
    ItemTitle,
    ItemText,
    InfoText,
    Buttom,
} from './styles'

import { 
    Animated, 
    Easing 
} from 'react-native'

import {
    formatMoney,
    formatDate,
    formatBankAccountType
} from '../../../../utils'

import {
    withNavigation
} from 'react-navigation'

import { blueTwo, redTwo } from '../../../../assets/colors'

export const CardConfirmComponent = props => {


    // Props 

    const { 
        index, 
        onPress,
        data,
        navigation
    } = props

    // State

    const [ ted ] = useState( 0 )

    const [ opacity ] = useState( new Animated.Value(0) )

    const [ translate ] = useState({
        title: new Animated.Value(0),
        text: new Animated.Value(0),
        content: new Animated.Value(0),
        info: new Animated.Value(0),
        input: new Animated.Value(0),
    })

    // Methods

    translate.input.addListener( ({value}) => {

        if(value === 1) onPress()
    })

    const createAnimation = (target, toValue, delay, duration = 300) => Animated.timing(target, { 
        toValue,
        duration,
        delay,
        Easing: Easing.circle,
        useNativeDriver: true
    })

    const startAnimation = toValue => {

        const title = createAnimation(translate.title, toValue, 300)
        const text = createAnimation(translate.text, toValue, 400)
        const content = createAnimation(translate.content, toValue, 500)
        const info = createAnimation(translate.info, toValue, 600)
        const input = createAnimation(translate.input, toValue, 700)

        const fade = Animated.timing(opacity, { 
            toValue: (opacity._value === 0) ? 1 : 0,
            duration: 1000,
            delay: 100,
            Easing: Easing.circle,
            useNativeDriver: true
        })



        Animated.parallel([title, text, content, info, input, fade]).start()

    }

    const setAnimatedStyle = target => ({
        transform: [ 
            { translateX: translate[target].interpolate( { inputRange: [0, 0.5, 1], outputRange: [350, 0, -500] } ) }
        ]
    })

    // Effects


    useEffect( () => {
        
        startAnimation(0.5) 

    }, [index])

    // Render

    return (
        <Animated.View style={ { opacity: opacity }  } >
            <Title style={ setAnimatedStyle('title') } >Confirmar transfêrencia</Title>
            <Text style={ setAnimatedStyle('text') } >Transferir em {formatDate(data.dateToTransfer)}</Text>

            <Animated.View style={ setAnimatedStyle('content') } >

                <ItemTitle>Valor solicitado</ItemTitle>
                <ItemText>{formatMoney(data.valueToTransfer)}</ItemText>

                <ItemTitle>Csuto de TED</ItemTitle>
                <ItemText color={ redTwo }>- {formatMoney(ted)}</ItemText>

                <ItemTitle>Valor total da transferência</ItemTitle>
                <ItemText color={ blueTwo }>{formatMoney(data.valueToTransfer - ted)}</ItemText>

            </Animated.View >

            <Animated.View style={ setAnimatedStyle('info') }>

                <InfoText>
                    Transferência para o Banco: {data.bankData.formattedCodigoBanco} 
                    Agência: {data.bankData.Agencia} - 
                    {formatBankAccountType(data.bankData.TipoConta)}: 
                    {data.bankData.Conta}
                </InfoText>

            </Animated.View>

            <Animated.View style={ setAnimatedStyle('input') } >

                <Buttom onPress={ () => { navigation.navigate('TransferFundsConfirmation', { transferData: data } ) } } >
                    <ButtomText>SIM, TRANSFERIR</ButtomText>
                </Buttom>

                <Buttom background="transparent" onPress={ () => navigation.goBack() } >
                    <InfoText>CANCELAR</InfoText>
                </Buttom>

            </Animated.View >

        </Animated.View>
    )

}

export const CardConfirmTransfer = withNavigation(CardConfirmComponent)