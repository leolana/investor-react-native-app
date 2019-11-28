import React, { Component } from 'react';

import { Text, TextInput } from './style.js'

export default ( props ) => {

    return (

        <> 

            <Text> { props.title } </Text>

            <TextInput { ...props } />
            

        </>
    )
    
}


