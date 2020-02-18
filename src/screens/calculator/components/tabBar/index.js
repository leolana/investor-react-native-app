import React, { useState, useEffect } from 'react'

import {
    Container,
    Tab,
    Text
} from './styles'

import {
    tealish,
    dusk
} from '../../../../assets/colors'

import {
    IconIouu

} from '../../../../assets/icons'

export const TabBar = props => {

    const [ selected, setSelected ] = useState(props.value || null)

    const renderItem = text => (
        <Tab 
            onPress={ () => setSelected(text) } 
            selected={ selected === text }
        >
            {
                (text === 'IOUU') ? (
                    <IconIouu 
                        fill={ selected === text ? tealish : dusk } 
                        width={48} 
                        height={48} 
                    /> 
                    ) : (
                        <Text selected={ selected === text } >{text}</Text>
                    )
                
            }

        </Tab>
    )


    useEffect( () => {

        props.onChange(selected)

    }, [selected])


    return (
        <Container>

            { props.tabs.map( text => renderItem(text)) }

        </Container>
    )
}