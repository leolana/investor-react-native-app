import React, { useState, useEffect } from 'react'

import {
    Container,
    Text,
    SafeArea,

} from './styles'

import { useSelector } from 'react-redux'
import { Animated, Easing, TouchableWithoutFeedback } from 'react-native'

import store from '../../store'

import { showToast, destroyToast } from  '../../store/actions'

import {
    IconClose,
    IconCheckAll
} from '../../assets/icons'

import {
    white,
    toastError,
    toastSuccess,
    toastInfo
} from '../../assets/colors'

export const ToastView = props => {

    // States 

    const [ isVisible, setIsVisible ] = useState(false)

    const [ opacity ] = useState( new Animated.Value(0) )


    // vars

    const toastParams = useSelector( ({toastParams}) => toastParams )

    const style = { opacity } 

    // methods

    opacity.addListener( ({value}) => {

        if(value != 0) return

        destroy()


    }) 

    const destroy = () => {

        if(!isVisible) return

        store.dispatch(destroyToast())

        setIsVisible(false)

    }

    const getParamsByType = type => {

        const params = {
            'success': {
                icon: <IconCheckAll width={16} height={16} stroke={white} />,
                color: toastSuccess
            },
            'error': {
                icon: <IconClose width={16} height={16} stroke={white} />,
                color: toastError
            },
            'info': {
                icon: <IconClose width={16} height={16} stroke={white} />,
                color: toastInfo
            }
        }

        return params[type]
    }

    const baseToast = () => {

        if(toastParams === undefined || toastParams === null) return 

        const { type, text } = toastParams

        const { color, icon } = getParamsByType(type)


        return (

            <TouchableWithoutFeedback onPress={ () => destroy() } >

                <Container background={color} >
                    {icon}
                    <Text>{text}</Text>
                </Container>

            </TouchableWithoutFeedback>
        
        )
    }

    const baseAnimation = (toValue, duration, delay) => Animated.timing(opacity,{
        toValue,
        duration,
        delay,
        ease: Easing.ease

    })

    // Effects

    useEffect( () => {

        if(toastParams === undefined || toastParams === null ) return

        setIsVisible(true)

        const duration = toastParams.duration || 450

        const show = baseAnimation(1, duration)
        const hide = baseAnimation(0, duration, 2000)

        Animated.sequence([show, hide]).start()


    }, [toastParams])



    // render

    return (

        (isVisible) ? (
            <SafeArea style={style} > 
                {baseToast()}  
            </SafeArea>
        ) : null

    )
}

export const Toast = {
    'showSuccess': (text) => store.dispatch(showToast({ type: 'success', text })),
    'showError': (text) => store.dispatch(showToast({ type: 'error', text }))
}