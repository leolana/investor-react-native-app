import React, { useState, useEffect } from 'react'

import {
    formatDate,
    formatMoney,
    formatCompanyName
} from '../../utils'

import {
    blue,
    red,
} from '../../assets/colors'

import { withNavigation } from 'react-navigation'

import {
    Card,
    HeaderArea,
    Title,
    DateText,
    Text,
    Touchable,
} from './styles'

const CardComponent = props => {

    // Props

    const {
        data,
        navigation

    } = props

    // States

    const [title, setTitle] = useState('')

    const [date, setDate] = useState('')

    const [value, setValue] = useState(0)

    // Methods 

    const getValueColor = () => (value >= 0) ? blue : red

    const formatTitle = () => {

        const { Tipo, Detalhes } = data

        if( Tipo === 'PAGAMENTO' ) return (Detalhes.Pagamento.NomeEmpresa) ? Detalhes.Pagamento.NomeEmpresa : Tipo

        return Tipo

    }

    // Effects

    useEffect( () => {

        if(data === null) return 

        setTitle( `${formatTitle()} ${( (data.Descricao ) ? `| ${data.Descricao}` : '')}` )

        setDate( formatDate(data.Data, 'dd MMM yyyy').replace('2020', '') )

        setValue( data.Valor )


    }, [data])


    // Render

    return (
       
        <Touchable onPress={ () => navigation.navigate('WalletSheetModal', { data }) } >
            <Card>
                <HeaderArea>
                    <Title>{title}</Title>

                    <DateText isWithoutYear={ !date.includes(',') }>{date}</DateText>

                </HeaderArea>

                <Text color={ getValueColor() } >{formatMoney(value)}</Text>
            </Card>
        </Touchable>

    )
}

export const WalletCard = withNavigation(CardComponent)