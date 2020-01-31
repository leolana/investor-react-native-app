import React, { useEffect } from 'react'

import {
    Divisor,
    ItemTitle,
    ItemText,
    Table,
    TableText,
    TableRow,
    TableSpotlightText
} from './styles'

import {

    Buttom,
    ButtomText,

} from '../../styles'

import {
    formatPercent,
    formatMoney
} from '../../../../utils'

import {
    Request,
    UrlSolicitacaoReservaInvCriar
} from '../../../../services'

import {
    Toast
} from '../../../../components'

import { withNavigation } from 'react-navigation'


export const ConfirmationStepComponent = props => {

    // Props

    const { data } = props

    // Methods

    const invest = async () => {

        const config = {
            Valor: Number.parseFloat(data.value),
            ReInvestimento: Number.parseFloat(data.reinvestmentValue),
            loanRequestId: data._id,
            listaEspera: data.waitingList
        }

        const resp = await Request.POST({
            url: UrlSolicitacaoReservaInvCriar(data._id),
            data: config
        })

        console.log(resp, config)

        if(resp.status !== 200) Toast.showError(resp.data.errors[0].detail)

        if(data.waitingList) {

            props.navigation.navigate('Company', { data } )

            props.navigation.navigate('InvestWaitingListSuccessModal')

        }

        else props.onStepChange(2)

    }



    // Effects

    useEffect( () => {
        props.navigation.setParams({HeaderTitle: 'CONFIRMAR'})
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
                    <TableText bold={true}>{formatMoney(data.reinvestmentValue)}</TableText>

                </TableRow>

                <TableRow showBorder={ true } >
                    <TableText>Valor do boleto</TableText>
                    <TableText bold={true}>{formatMoney(data.value - data.reinvestmentValue)}</TableText>
                </TableRow>

                <TableRow >
                    <TableSpotlightText>Total investido</TableSpotlightText>
                    <TableSpotlightText>{formatMoney(data.value)}</TableSpotlightText>
                </TableRow>


            </Table>

            <Buttom onPress={ () => invest() } >
                <ButtomText>CONFIRMAR INVESTIMENTO</ButtomText>
            </Buttom>

        </>
    )
}

export const ConfirmationStep = withNavigation(ConfirmationStepComponent)