import React from 'react'

import {
    Text,
    Item,
    Area,
} from '../../styles'

import {
    formatMoney
} from '../../../../utils'

export const ModalTransfer = props => {

    // Props

    const { data } = props

    // Render

    return (
        <>
            <Text  marginBottom={10}>
                <Item>ID da transação: </Item> 
                <Text>{data.id}</Text>
            </Text>

            <Item marginBottom={5} >Detalhes de Recebimento</Item>

            <Area  marginBottom={2}>
                <Item>Valor: </Item> 
                <Text>{ formatMoney( data.Valor ) }</Text>
            </Area>
        </>

    )
}