import React, { useState, useEffect }  from 'react'


import {
    Backdrop,
    Card,
    BackdropOnClick,
    BackdropAnimated,

} from './styles'

import { 
    PanGestureHandler, 
    State
} from 'react-native-gesture-handler'

 import {
    Animated,
    Easing,
    Dimensions
 } from 'react-native'
 

export const SheetDialog = props => {

    let {
        isVisible,
        height,
        onStateVisibleChanged,
        renderChildren

    } = props

    const hideSheetDialog = (Dimensions.get('window').height) * 2

    const [ translateY ] = useState( new Animated.Value( hideSheetDialog ) )

    const [ showSheetDialog, setShowSheetDialog ] = useState( false )

    const createAnimate = (toValue, duration = 550, delay) => 
        Animated.timing(translateY, { 
            toValue, 
            duration,
            delay,
            easing: Easing.ease,
            useNativeDriver: true 
        })

    useEffect( () => {

        setShowSheetDialog(isVisible)
  
        if(isVisible) createAnimate( 0, 450, 200 ).start() 
        

    }, [isVisible])

    useEffect( () => onStateVisibleChanged(showSheetDialog), [showSheetDialog])

    const onPanGestureEvent = Animated.event(
        [ 
            { 
                nativeEvent: { 
                    translationY: translateY 
                } 
            } 
        ], 
        { useNativeDriver: true })

    const onHandlerStateChange = event => {
        
        if( event.nativeEvent.oldState === State.ACTIVE ) {

            const { translationY } = event.nativeEvent

            const opened = (translationY >= 100)

            createAnimate( ( opened ? hideSheetDialog : 0 ) )
                .start( () => setShowSheetDialog(!opened) )

        }

    }

    const onClickBackdrop = () => 
        createAnimate( hideSheetDialog )
            .start( () => setShowSheetDialog(false) )
    

    const renderSheetDialog = () => (
        <>

            <PanGestureHandler
                onGestureEvent={onPanGestureEvent}
                onHandlerStateChange={ onHandlerStateChange }
            >
                

                <BackdropAnimated>

                    <BackdropOnClick onPress={ onClickBackdrop } > 

                        <Backdrop />

                    </BackdropOnClick> 

                </BackdropAnimated>            

            </PanGestureHandler>

            <PanGestureHandler
                onGestureEvent={onPanGestureEvent}
                onHandlerStateChange={ onHandlerStateChange }
            >

                <Card
                    height={ height }
                    style={[{
                        transform: [ { translateY: translateY.interpolate( {
                                inputRange: [0, 350],
                                outputRange: [0, 350],

                                
                        } ) } ]
                    }]}
                >

                    { renderChildren() }

                </Card>

            </PanGestureHandler>

        </>
    )


    return (

        (showSheetDialog) ? renderSheetDialog() : null


    )

}