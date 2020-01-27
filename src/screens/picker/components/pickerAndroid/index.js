import React from 'react'

import { withNavigation } from "react-navigation"

import { TouchableOpacity } from 'react-native'

import {
    Text,
    ScrollView
} from './styles'


export const PickerAndroidComponent = props => {

    // Methods


    const onSelected = data => {

        props.onChange(data.value)

        props.navigation.goBack()
    }

    // Render


    return (
        <ScrollView showsVerticalScrollIndicator={false}>  

            {
                props.data.map( data => (

                    <TouchableOpacity onPress={() => onSelected(data) } >

                        <Text>{data.text}</Text>
                        
                    </TouchableOpacity>

                )) 

            }

        </ScrollView>

    )
}

export const PickerAndroid = withNavigation(PickerAndroidComponent)