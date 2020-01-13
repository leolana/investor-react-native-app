import React, { useState, useEffect } from 'react'

import {
    TextInput,
    Title,
    Text,
    Buttom,
    ButtomText,
    InfoTitle,
} from '../../styles'

import { 
    Animated, 
    Easing 

} from 'react-native'

export const CardAddDate = props => {


    // Props 

    const { index, onPress } = props

    // State

    const [ opacity ] = useState( new Animated.Value(0) )

    const [ translate ] = useState({
        title: new Animated.Value(0),
        text: new Animated.Value(0),
        input: new Animated.Value(0),
        info: new Animated.Value(0),
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
        const input = createAnimation(translate.input, toValue, 500)
        const info = createAnimation(translate.info, toValue, 600)

        const fade = Animated.timing(opacity, { 
            toValue: (opacity._value === 0) ? 1 : 0,
            duration: 1000,
            delay: 100,
            Easing: Easing.circle,
            useNativeDriver: true
        })



        Animated.parallel([title, text, input, info, fade]).start()

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
            <Title style={ setAnimatedStyle('title') } >Transferir quando?</Title>
            <Text style={ setAnimatedStyle('text') } >Transferir hoje</Text>

            <Animated.View style={ setAnimatedStyle('input') } >

                <TextInput />
                <Buttom onPress={ () => startAnimation(1) } >
                    <ButtomText>PRÓXIMO</ButtomText>
                </Buttom>

            </Animated.View >

            <Animated.View style={ setAnimatedStyle('info') }>

                <InfoTitle>
                    Transferências para outros brancos em finais de semana, 
                    feriados nacionais ou fora de horário limite serão efetuados no próximo dia útil.
                </InfoTitle>

            </Animated.View>

        </Animated.View>
    )

}