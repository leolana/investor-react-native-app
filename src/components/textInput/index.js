import React, { useState } from 'react'

import { Text, TextInput } from './styles'

export const ITextInput = props => {

    const [focused, setFocused] = useState(false)

    return (

        <> 

            <Text> { props.title } </Text>

            <TextInput 

                focus={focused}

                onBlur={ () => setFocused(!focused) }

                onFocus={ () => setFocused(!focused) }
            
            
                autoCapitalize='none' { ...props } 
            />
            

        </>
    )
    
}


