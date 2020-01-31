import React from 'react'

import {
    formatMoney,
} from '../../../../utils'

import {
    Text,
    Item,
    Area,
} from '../../styles'


export const ModalInvestment = props => {

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