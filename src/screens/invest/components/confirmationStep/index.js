import React, { useEffect } from 'react'




import {
    Divisor,
    ItemTitle,
    ItemText,
    Table,
    TableText,
    TableRow,
    TableCalloutText
} from './styles'

import {

    Buttom,
    ButtomText,

} from '../../styles'

import {
    formatPercent,
    formatMoney
} from '../../../../utils'
import { withNavigation } from 'react-navigation'


export const ConfirmationStepComponent = props => {

    // Props

    const { data } = props

    // Effects

    useEffect( () => {
        props.navigation.setParams({HeaderTitle: 'CONFIRMAR INVESTIMENTO'})
    } , []) 

    // Render

    return (
        <>

            <Divisor side="up" >
                <ItemTitle>Vaor do investimento</ItemTitle>
                <ItemText>{formatMoney(data.value)}</ItemText>
            </Divisor>
            <Divisor  side="up" >
                <ItemTitle>Rendimento</ItemTitle>
                <ItemText>{formatPercent(data.Rendimento)} a.a.</ItemText>
            </Divisor>

            <Table>
                <TableRow showBorder={ true } >   
                    <TableText>Reinvestimento</TableText>
                    <TableText bold={true}>{formatMoney(data.value)}</TableText>

                </TableRow>

                <TableRow showBorder={ true } >
                    <TableText>Valor do boleto</TableText>
                    <TableText bold={true}>{formatMoney(data.value - data.reinvestmentValue)}</TableText>
                </TableRow>

                <TableRow >
                    <TableCalloutText>Total investido</TableCalloutText>
                    <TableCalloutText>{formatMoney(data.value)}</TableCalloutText>
                </TableRow>


            </Table>

            <Buttom onPress={ () => {
                props.onStepChange(2)
            } } >
                <ButtomText>CONFIRMAR INVESTIMENTO</ButtomText>
            </Buttom>

        </>
    )
}

export const ConfirmationStep = withNavigation(ConfirmationStepComponent)