import React, { useState, useEffect } from 'react'

import {
    TextInput,
    Title,
    Text,
    Buttom,
    ButtomText,
    InfoTitle,
    InfoText,
    AccountCard,
    AccountCardTitle,
    Divisor,
    ItemTitle,
    ItemText,
    ItemArea,
} from '../../styles'

import { 
    Animated, 
    View, 
    Easing

} from 'react-native'

import {
    formatMoney,
    formatBankAccountType
} from '../../../../utils'

export const CardAddValue = props => {

    // Props 

    const { 
        index, 
        onPress, 
        data 
        
    } = props

    // State

    const [ opacity ] = useState( new Animated.Value(1) )

    const [ transferValue, setTransferValue ] = useState(0)

    const [ transferValueIsValid, setTransferValueIsValid ] = useState(false)

    const [ bankName, setBankName ] = useState('')

    const [ accountType, setAccountType ] = useState('')

    const [ accountNumber, setAccountNumber ] = useState('')

    const [ translate ] = useState({
        title: new Animated.Value(1),
        text: new Animated.Value(1),
        input: new Animated.Value(1),
        info: new Animated.Value(1),
        card: new Animated.Value(1),
    })

    // Methods

    const validateInput = inputValue => {


        if(data.walletFunds === null || data.walletFunds === undefined) setTransferValueIsValid(false)

        else if(inputValue === null || inputValue === undefined) setTransferValueIsValid(false)

        else if(inputValue >= 100 && inputValue <= data.walletFunds) setTransferValueIsValid(true)

        else setTransferValueIsValid(false)
    }

    const nextStep = () => {

        if(!transferValueIsValid) return 

        if(props.getInsertedValue !== undefined) props.getInsertedValue(transferValue)

        startAnimation()
    }

    opacity.addListener( ({value}) => {

        if(value === 0) onPress()
    })

    const createAnimation = (target, delay, duration = 250) => Animated.timing(target, { 
        toValue: (index === 0) ? 0 : 1,
        duration,
        delay,
        easing: Easing.circle,
        useNativeDriver: true
    })

    const startAnimation = () => {

        const title = createAnimation(translate.title, 300)
        const text = createAnimation(translate.text, 400)
        const input = createAnimation(translate.input, 500)
        const info = createAnimation(translate.info, 600)
        const card = createAnimation(translate.card, 700)
        const fade = createAnimation(opacity, 100, 1000)

        Animated.parallel([title, text, input, info, card, fade]).start()

    }

    const setAnimatedStyle = target => ({
        transform: [ 
            { translateX: translate[target].interpolate( { inputRange: [0, 1], outputRange: [-500, 0] } ) }
        ]
    })

    // Effects 

    useEffect( () => {

        if(data.bankData === null) return 

        setBankName(data.bankData.formattedCodigoBanco)


        const type = formatBankAccountType(data.bankData.TipoConta)

        setAccountType(type)

        const number = data.bankData.Conta

        setAccountNumber(number)

    }, [data.bankData])


    // Render

    return(
        <Animated.View style={ { opacity: opacity }  } >

            <Title style={ setAnimatedStyle('title') } >Qual o valor que deseja sacar?</Title>
            <Text style={ setAnimatedStyle('text') } >Digite quanto você quer transferir:</Text>

            <Animated.View style={ setAnimatedStyle('input') } >

                <TextInput
                    mask={ 'currency' } 
                    onValueChange={ ({unMasked}) => {
                
                            setTransferValue(unMasked)

                            validateInput(unMasked)


                        } 
                    } 
                    keyboardType={'numeric'}
                />
                <Buttom 
                    enabled={ transferValueIsValid }
                    onPress={ () => nextStep() } 
                >
                    <ButtomText>PRÓXIMO</ButtomText>
                </Buttom>

            </Animated.View >
            
            <Animated.View style={ setAnimatedStyle('info') }>
                <InfoTitle>Valor mínimo para transferência: <InfoText>R$ 100,00</InfoText></InfoTitle>
                <InfoTitle>Saldo disponível para transferência: <InfoText>{formatMoney(data.walletFunds)}</InfoText></InfoTitle>
                <InfoTitle>Custo de TED: <InfoText>R$ 0,00</InfoText></InfoTitle>

            </Animated.View>

            <AccountCard style={ setAnimatedStyle('card') }>
                <AccountCardTitle>Transferir para:</AccountCardTitle>

                <Divisor />

                <ItemTitle>Nome do banco</ItemTitle>
                <ItemText>{bankName}</ItemText>

                <ItemArea>
                    <View>
                        <ItemTitle>Tipo de conta</ItemTitle>
                        <ItemText>{accountType}</ItemText>
                    </View>
                    
                    <View>
                        <ItemTitle>Número da conta</ItemTitle>
                        <ItemText>{accountNumber}</ItemText>
                    </View>

                </ItemArea>


            </AccountCard>
        


        </Animated.View>
    )

}