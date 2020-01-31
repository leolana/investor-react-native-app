import React, { useState, useEffect } from 'react'


import {
    Text,
    Button,
    PickerStyled
} from './styles'

import { withNavigation } from 'react-navigation'
import { Animated } from 'react-native'


export const PickerIOSComponent = props => {


    return (
        <>

            <Button onPress={ () => props.navigation.goBack() } >
                <Text>Pronto</Text>
            </Button>

            <PickerStyled
                selectedValue={props.value}
                onValueChange={props.onChange}
                
            
            >

                {
                    props.data.map( (data, index) => (<PickerStyled.Item label={data.text} value={data.value} key={index} />) )
                }
            </PickerStyled>


        </>

    )
}

export const PickerIOS = withNavigation(PickerIOSComponent)