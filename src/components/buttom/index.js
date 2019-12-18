import React from 'react';
import { TouchableOpacity, Text } from './styles';

export const IButtom = props => {


    return (
        <TouchableOpacity
            { ...props }
        >
            <Text 
                { ...props }
            >
                { props.title.toUpperCase() }
            </Text>

        </TouchableOpacity>
    )
}



