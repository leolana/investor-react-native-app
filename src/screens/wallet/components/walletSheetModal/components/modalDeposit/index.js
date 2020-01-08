import React from 'react'

import {
    formatMoney,
} from '../../../../../../utils'

import {
    Text,
    Item,
    Area,
    Button,
    IconPrinterStyled
} from '../../styles'


export const ModalDeposit = props => {

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

            <Area>
                <Item>Valor: </Item> 
                <Text>{ formatMoney( data.Valor ) }</Text>
            </Area>

            <Button>
                <IconPrinterStyled width={ 24 } height={ 24 } stroke={ black } fill={'none'} />
                <Text>Visualizar detalhes</Text>
            </Button>


        </>

    )
}