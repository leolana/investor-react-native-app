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
} from '../../../../assets/icons'

export const Body = props => {


    return (

        <>
            <Card>

                <CardHeader>
                    <HeaderData>
                        <IconStart />
                        <ItemDate>
                            <ItemTitleDate>Início</ItemTitleDate>
                            <ItemTextDate>24 de jan, 2018</ItemTextDate>
                        </ItemDate>

                    </HeaderData>

                    <HeaderData>
                        <IconEnd />
                        <ItemDate>
                            <ItemTitleDate>Prazo da captação</ItemTitleDate>
                            <ItemTextDate>04 de fev, 2018</ItemTextDate>
                        </ItemDate>

                    </HeaderData>

                </CardHeader>

                <ItemTitleValue>Valor solicitado</ItemTitleValue>
                <ItemTextValue>R$ 250.000,00</ItemTextValue>

                <CardBody>

                    <Item>
                        <ItemTitle>Retorno Bruto Anual</ItemTitle>
                        <ItemText>2,97% a.m.</ItemText>
                    </Item>

                    <Item>
                        <ItemTitle>Retorno Bruno Mensal</ItemTitle>
                        <ItemText>2,97% a.m.</ItemText>
                    </Item>

                </CardBody>


                <ItemTitle>Retorno Estimado Anual</ItemTitle>
                <ItemText>346% CDI</ItemText>
                <ItemInfo center={true}>* A taxa de juros acima é igual ao seu Retorno Bruto (Retorno antes do desconto de IR e custos de TED)</ItemInfo>


                <CardBody >

                    <Item>
                        <ItemTitle>Rating</ItemTitle>
                        <ItemText>AA</ItemText>
                    </Item>

                    <Divisor />

                    <Item>
                        <ItemTitle>Duração esperada</ItemTitle>
                        <ItemText>36 meses</ItemText>
                    </Item>

                </CardBody>

                <Item horizontal={true} >
                    <IconClock />
                    <ItemTextTime >Finaliza em 10 dias*</ItemTextTime>
                </Item>

                <ProgressArea>

                    <ProgressHeader>

                        <ProgressTitle>Levantado: 50%</ProgressTitle>

                        <ProgressTitle>Falta: <ProgressText>R$ 125.000,00</ProgressText></ProgressTitle>

        
                    </ProgressHeader>

                    <ProgressBar>
                        <Progress completed={50} />
                        <ProgressIndicator>50%</ProgressIndicator>
                    </ProgressBar>


                </ProgressArea>

                <Item horizontal={true} >
                    <IconClock />
                    <ItemTitleInvestor >62 <ItemTextInvestor>investidores</ItemTextInvestor></ItemTitleInvestor>
                </Item>

            </Card>

        
        </>

    )
}


