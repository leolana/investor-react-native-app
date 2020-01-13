import React, { useState } from 'react'

import { Text, TextInput } from './styles'

import { formatMoney } from '../../utils'

import { Platform } from 'react-native'

export const ITextInput = props => {

    // States

    const [focused, setFocused] = useState(false)

    const [value, setValue] = useState({
        unMasked: null,
        masked: null
    })

    // Methods

    const getCurrencyMask = text => {

        const value = parseFloat(String(text).replace(/\D/g, '') ) / 100

        const newState = {
            unMasked: value,
            masked: formatMoney(value)
        }

        if(props.onValueChange !== undefined) props.onValueChange(newState)

        return newState

    }

    const handleChange = text => {

        
        if (props.mask == 'currency') setValue(getCurrencyMask(text))
        
        else setValue({})

    }


    // Render

    return (

        <> 

            <Text> { props.title } </Text>

            <TextInput 

                focus={focused}

                onBlur={ () => setFocused(!focused) }

                onFocus={ () => setFocused(!focused) }

                onChangeText={ handleChange }

                value={ value.masked }
            
                autoCapitalize='none' 
                
                { ...props } 
            />
            

        </>
    )
    
}


