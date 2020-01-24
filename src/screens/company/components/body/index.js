import React from 'react'


import {
    Card,
    CardHeader,
    Item,
    ItemText,
    ItemTitle,
    ItemDate,
    ItemTextDate,
    ItemTitleDate,
    HeaderData,
    ItemTitleValue,
    ItemTextValue,
    CardBody,
    Divisor,
    ItemTextTime,
    ProgressArea,
    ProgressHeader,
    ProgressTitle,
    ProgressText,
    ProgressBar,
    ProgressIndicator,
    Progress,
    ItemTextInvestor,
    ItemTitleInvestor,
} from './styles'

import {
    ItemInfo,
} from '../../styles'

import {
    IconEnd,
    IconStart,
    IconClock,
    IconInvestor
} from '../../../../assets/icons'

import {
    formatDate,
    formatMoney,
    formatPercent,
    diffDaysForOpportunitie
} from '../../../../utils'

export const Body = props => {

    // Props

    const { data } = props

    // Methods

    const itsFinished = () => {

        const { FimCaptacao, StatusAnalise } = data

        return (StatusAnalise == 'ENCERRADO' || diffDaysForOpportunitie(FimCaptacao) == "encerrado")
    }

    const getRemainingTime = () => {

        if(itsFinished()) return 0
        
        const date = new Date(data.FimCaptacao);

        const miliSecs = (date.getTime()+ 86400000) - new Date().getTime()

        if(miliSecs > 0) return Number.parseInt(miliSecs/1000/60/60/24)

        else return 0
    }

    const getRemainingValue = () => {

        const { Valor, ValorCaptado, ChamadaListaEspera } = data

        const value = (Valor - ValorCaptado)

        if(ChamadaListaEspera || value <= 0) return 'Finalizado'
        
        return formatMoney(value);
    }

    const getProgress = () => {

        const { ValorCaptado, Valor, ChamadaListaEspera } = data

        if(ChamadaListaEspera) return 100

        let progress = ValorCaptado * 100 / Valor;

        progress = progress < 100.00 ? progress : 100.00;

        return progress.toFixed(2)
}



    // Render

    return (

        <>
            <Card>

                <CardHeader>
                    <HeaderData>
                        <IconStart />
                        <ItemDate>
                            <ItemTitleDate>Início</ItemTitleDate>
                            <ItemTextDate>{formatDate(data.InicioCaptacao, 'dd ? MMM, yyyy').replace('?', 'de')}</ItemTextDate>
                        </ItemDate>

                    </HeaderData>

                    <HeaderData>
                        <IconEnd />
                        <ItemDate>
                            <ItemTitleDate>Prazo da captação</ItemTitleDate>
                            <ItemTextDate>{formatDate(data.FimCaptacao, 'dd ? MMM, yyyy').replace('?', 'de')}</ItemTextDate>
                        </ItemDate>

                    </HeaderData>

                </CardHeader>

                <ItemTitleValue>Valor solicitado</ItemTitleValue>
                <ItemTextValue>{formatMoney(data.Valor)}</ItemTextValue>

                <CardBody>

                    <Item>
                        <ItemTitle>Retorno Bruto Anual</ItemTitle>
                        <ItemText>{formatPercent(data.RetornoBrutoAnual)} a.a.</ItemText>
                    </Item>

                    <Item>
                        <ItemTitle>Retorno Bruno Mensal</ItemTitle>
                        <ItemText>{formatPercent(data.RetornoBrutoMensal)} a.m.</ItemText>
                    </Item>

                </CardBody>


                <ItemTitle>Retorno Estimado Anual</ItemTitle>
                <ItemText>{formatPercent(data.Cdi)} CDI</ItemText>
                <ItemInfo center={true}>* A taxa de juros acima é igual ao seu Retorno Bruto (Retorno antes do desconto de IR e custos de TED)</ItemInfo>


                <CardBody >

                    <Item>
                        <ItemTitle>Rating</ItemTitle>
                        <ItemText>{data.Score}</ItemText>
                    </Item>

                    <Divisor />

                    <Item>
                        <ItemTitle>Duração esperada</ItemTitle>
                        <ItemText>{data.Prazo} meses</ItemText>
                    </Item>

                </CardBody>

                <Item horizontal={true} >
                    <IconClock />
                    <ItemTextTime >Finaliza em {getRemainingTime()} dias*</ItemTextTime>
                </Item>

                <ProgressArea>

                    <ProgressHeader>

                        <ProgressTitle>Levantado: {formatPercent(getProgress())}</ProgressTitle>

                        <ProgressTitle>Falta: <ProgressText>{getRemainingValue()}</ProgressText></ProgressTitle>

        
                    </ProgressHeader>

                    <ProgressBar>
                        <Progress completed={getProgress()} />
                        <ProgressIndicator>{formatPercent(getProgress())}</ProgressIndicator>
                    </ProgressBar>


                </ProgressArea>

                <Item horizontal={true} >
                    <IconInvestor />
                    <ItemTitleInvestor >
                        {data.QuantidadeReservasInvestimento}  
                        <ItemTextInvestor>{ (data.QuantidadeReservasInvestimento > 1) ? ' investidores' : ' investidor' } </ItemTextInvestor>
                    </ItemTitleInvestor>
                </Item>

            </Card>

        
        </>

    )
}


