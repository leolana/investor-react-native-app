import React, { useState } from 'react'

import { Text, TextInput } from './styles'

import * as InputMask from './masks'


export const ITextInput = props => {


    // States

    const [focused, setFocused] = useState(false)

    const [value, setValue] = useState({
        unMasked: null,
        masked: null
    })

    // Methods


    const handleChange = text => {

        const mask = InputMask.findByType(props.mask)

        const newValue = mask(text, props)

        if(newValue === null) setValue({})

        else setValue(newValue) 

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


