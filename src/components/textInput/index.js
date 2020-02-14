import React, { useState, useEffect } from 'react'

import { 
    Text, 
    TextInput,
    ErrorMessage,
    View
} from './styles'

import * as InputMask from './masks'

import { useSelector } from 'react-redux'

export const ITextInput = props => {


    // States

    const [focused, setFocused] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')

    const [value, setValue] = useState({
        unMasked: null,
        masked: null
    })

    // Vars

    const errors = useSelector( ({inputError}) =>  inputError)

    // Methods

    const handleChange = text => {

        const mask = InputMask.findByType(props.mask)

        const newValue = mask(text, props)

        if(newValue === null) setValue({})

        else setValue(newValue) 

    }

    // Effects


    useEffect( () => {

        if(errors === undefined ) return

        errors.forEach( err => {

            if(err.id === props.id) setErrorMessage(err.message)


        })

    }, [errors])


    // Render

    return (

        <View> 

            <Text> { props.title } </Text>

            <TextInput 

                error={ (errorMessage !== '') }

                focus={focused}

                onBlur={ () => setFocused(!focused) }

                onFocus={ () => setFocused(!focused) }

                onChangeText={ handleChange }

                value={ value.masked }
            
                autoCapitalize='none' 
                
                { ...props } 
            />

            <ErrorMessage>{errorMessage}</ErrorMessage>

            

        </View>
    )
    
}


