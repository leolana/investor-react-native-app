import React, { useState, useEffect } from 'react'

import {
    formatDate,
    formatMoney,
    formatCompanyName
} from '../../../../utils'

import {
    blue,
    red,
    grey99
} from '../../../../assets/colors'

import { withNavigation } from 'react-navigation';

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

    const [colorValue, setColorValue] = useState('#000')

    // Methods 

    const getInvestorDetail = data => {
        const { NomeCompleto, DadosBancarios } = data;

        const { Agencia, Conta } = DadosBancarios;

        return `${NomeCompleto}: Agencia: ${Agencia} | Conta: ${Conta}`
    }

    const getParcelReceipt = (solicitacao, fatura) => {

        fatura = (fatura != null || fatura != undefined ? fatura.IndiceFatura + 1 : 0)

        const parcela = `Recebimento da Parcela: ${fatura} / ${solicitacao.Prazo}`

        return `${formatCompanyName(solicitacao)} | ${parcela}`
    }

    const formatTitle = data => {

        const { 
            Tipo, 
            ReInvestimento, 
            SolicitacaoID, 
            FaturaID 

        } = data.item

        if( (Tipo == 'DEBITO' || Tipo == 'AGENDADO') && ReInvestimento) 
            return formatCompanyName(SolicitacaoID)

        else if ( (Tipo == 'DEBITO' || Tipo == 'AGENDADO') && !ReInvestimento) 
            return getInvestorDetail(data.Investidor) 

        else if (Tipo == 'CREDITO') 
            return getParcelReceipt(SolicitacaoID, FaturaID)

        else if (Tipo == 'CASHBACK') 
            return 'CASHBACK';

        return formatCompanyName(SolicitacaoID);

        

    }


    const formatSpecialData = data => {

        const shortMonths = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

        data = data.split('/')

        const day = data[0]

        const month = shortMonths[ Number( data[1] ) - 1 ]

        const year = (data[2] === '2020') ? '' : `, ${data[2]}`

        return `${ day }  ${ month }${ year }`

        
    }

    const getValueColor = data => {

        const {
            Tipo,
            ReservaInvestimentoID

        } = data.item

        const colorByType = {
            'CREDITO': blue,
            'CASHBACK': blue,
            'DEBITO': red,
            'AGENDADO': grey99,
            'RESERVA': (ReservaInvestimentoID != null) ? (ReservaInvestimentoID.StatusBoleto == "paid" ? blue: grey99) : blue
                
        }

        return colorByType[Tipo]
    }

    const verifyIRFonte = data => {

        const { 
            ValorLiquido, 
            Data 

        } = data


        let date = new Date(Data)

        const year = date.getFullYear(), month = date.getMonth()

        return (ValorLiquido && (year > 2019 || ( year == 2019 && month > 1) ) ) ? true : false
    }


    // Effects

    useEffect( () => {

        if(data === null) return 

        setTitle( formatTitle( data ) )

        setDate( formatSpecialData( formatDate(data.item.Data) ) )

        setValue( ( verifyIRFonte(data) ) ? data.item.ValorLiquido : data.item.Valor )

        setColorValue( getValueColor(data) )


    }, [data])


    // Render

    return (
       
        <Touchable onPress={ () => navigation.navigate('WalletSheetModal', { data }) } >
            <Card>
                <HeaderArea>
                    <Title>{title}</Title>

                    <DateText isWithoutYear={ !date.includes(',') }>{date}</DateText>

                </HeaderArea>

                <Text color={ colorValue } >{formatMoney(value)}</Text>
            </Card>
        </Touchable>

    )
}

export const WalletCard = withNavigation(CardComponent)