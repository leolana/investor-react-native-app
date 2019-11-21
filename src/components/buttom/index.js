import React from 'react';
import { TouchableOpacity, Text } from './style.js';

const App = (props) => {


    return (
        <TouchableOpacity
            { ...props }
        >
            <Text>
                { props.title.toUpperCase() }
            </Text>

        </TouchableOpacity>
    )
}


export default App


