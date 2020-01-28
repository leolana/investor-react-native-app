import React, { useEffect } from 'react'

import { withNavigation } from 'react-navigation'

import {
    Table,
    TableRow,
    TableText,
    InfoArea,
    Title,
    ItemText,
    Divisor
} from './styles'

import {
    Buttom,
    ButtomText
} from '../../styles'

import {
    formatMoney
} from '../../../../utils'



export const PaymentStepComponent = props => {

    // Props

    const { data } = props

    // Effects

    useEffect( () => {
        props.navigation.setParams({HeaderTitle: 'PAGAMENTO'})
    } , []) 

    // Render


    return (
        <>
            <Table>
                <TableRow showBorder={ true } >   
                    <TableText>ID #00000</TableText>
                    <TableText bold={true}>{formatMoney(data.value)}</TableText>

                </TableRow>

                <TableRow >
                    <TableText>Total à pagar</TableText>
                    <TableText bold={true}>{formatMoney(data.value - data.reinvestmentValue)}</TableText>
                </TableRow>

            </Table>

            <InfoArea>
                <Title textAlign="left" >Dados do investidor</Title>

            </InfoArea>

            <Title>Forma de pagamento: BOLETO BANCÁRIO</Title>

            <Divisor>

                <ItemText>Imprima o boleto e <ItemText bold={true}>pague no banco.</ItemText></ItemText>

            </Divisor>

            <Divisor>
                <ItemText bold={true}>ou page pela internet <ItemText>utilizando o código de barras do boleto.</ItemText></ItemText>
            </Divisor>

            <Divisor>
                <ItemText>o prazo de validade do boleto é de <ItemText bold={true}>1 dia útil</ItemText></ItemText>
            </Divisor>

            <Buttom>
                <ButtomText>PAGAR BOLETO</ButtomText>
            </Buttom>

            <ItemText>Pagamento seguro <ItemText bold={true}>IOUU</ItemText></ItemText>
        </>
    )
}

export const PaymentStep = withNavigation(PaymentStepComponent)