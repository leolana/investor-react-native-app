import React, { useState, useEffect } from 'react'


import {
    Text,
    Button,
    PickerStyled
} from './styles'

import { withNavigation } from 'react-navigation'

export const PickerIOSComponent = props => {

    const [ value, setValue ] = useState(props.value)

    const setData = () => {

        props.onChange(value)

        props.navigation.goBack()

    }


    return (
        <>

            <Button onPress={ () =>  setData() } >
                <Text>Pronto</Text>
            </Button>

            <PickerStyled
                selectedValue={value}
                onValueChange={ data => setValue(data) }
            >

                {
                    props.data.map( (data, index) => (<PickerStyled.Item label={data.text} value={data.value} key={index} />) )
                }
            </PickerStyled>


        </>

    )
}

export const PickerIOS = withNavigation(PickerIOSComponent)