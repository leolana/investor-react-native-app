import React from 'react'

import {
    Container,
    View,
    Title,
    Text,

} from './styles'

import {
    redTwo
} from '../../../../assets/colors'

import {
    IconNoItem,
    IconAlertItem,
    IconOkItem
} from '../../../../assets/icons'

export const Document = props => {

    const { 
        children,
        title,
        name,
        date,
        status,
        onPress
    
    } = props

    const renderBadge = status => {

        const badgeByStatus = {
            'CANCELADO': (<IconNoItem stroke={redTwo} />),
            'PENDENTE': (<IconAlertItem />),
            'APROVADO': (<IconOkItem />),
        }

        return badgeByStatus[status]

    }


    return (
        <Container onPress={ onPress } >
            
            {children}

            <View>
                <Title>{title}</Title>
                { name ? (<Text>{name}</Text>) : null }
                { date ? (<Text>{date}</Text>) : null }
            </View>

            { status ? renderBadge(status) : null}
        
        </Container>
    )

}