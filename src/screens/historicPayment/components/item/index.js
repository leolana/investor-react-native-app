import React, { useEffect } from 'react'

import {
    Circle,
    TableText,
    TableRow,
    TableCircle,
} from '../../styles'

import { 
    greenTwo,
    redTwo,
    lightYellow,
    greyTwo,
} from '../../../../assets/colors'

import {
    formatMoney
} from '../../../../utils'

export const Item = props => {

    // props

    const { data, showBorder } = props

    // methods

    const formatDate = date => {

        date = date.split('-')

        return `${date[2]}/${date[1]}/${date[0]}`
    }

    const getStatusColor = boleto => {

        let stringDate = boleto.Boleto.due_date
        let spliter    = stringDate.split("-");
        let boletoDate = new Date(spliter[0], spliter[1] - 1, spliter[2], 23, 59, 59)
        let today      = new Date()
        let status     = boleto.StatusBoleto
        
        if(status === "pending") return lightYellow
        
        else if (status === "paid") return greenTwo

        else if(status === "" || status === undefined) return greyTwo

        else if(boletoDate < today && status !== "paid") return redTwo
        
    }

    // useEffects

    useEffect( () => {

        const defaultData = { IndiceFatura: 0, valorParcela: 0, Boleto: { due_date: null, } }

        if(data == undefined || data === 'none' || data === null) data = defaultData

    }, [data])

    // render

    return (
        <TableRow showBorder={showBorder}>
            <TableText bold={true} >{data.IndiceFatura + 1}</TableText>
            <TableText flex="2" >{formatMoney(data.valorParcela)}</TableText>
            <TableText flex="2" >{formatDate(data.Boleto.due_date)}</TableText>
            <TableCircle>
                <Circle background={getStatusColor(data)} />
            </TableCircle>
        </TableRow>
    )
}