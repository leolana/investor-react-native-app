import React, { useState, useEffect } from 'react'


import {
    SafeAreaView,
    ScrollView,
    Row,
    Title,
    Subtitle,
    ScoreCircle,
    Score,
    LoanType,
    Buttom,
    ButtomText,
    Text,
    Item,
    ItemTitle,
    ItemText,
    Divisor,
    DivisorTitle,
} from './styles'

import {
    LinkList
} from '../../components'

import {
    convertScoreByColor,
    formatCNPJ,
    formatLoanType,
    formatMoney,
    formatPercent,
    formatDate

} from '../../utils'

import {
    Request,
    UrlSolicitacaoReservaPegar
} from '../../services'


import {
    Footer
} from './components'

export const HistoryProfile = props => {

    // props 

    const {
        navigation
    } = props

    // states

    const [ reserve, setReserve ] = useState(null)

    // vars

    const data = navigation.getParam('data', null)

    const links = [
        {
            title: 'Ver todos os dados da empresa',
            onPrss: () => {}
        },
        {
            title: 'Pagamentos',
            onPrss: () => {},
        },
    ]

    // methods 

    const getInvestmentReservation = async () => {

        const resp = await Request.GET( { url: UrlSolicitacaoReservaPegar(data._id) } )

        if(resp.status === 200 ) setReserve(resp.data)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')


    }

    // useeffects

    useEffect( () => {

        async function fetchData() {
            await getInvestmentReservation()
        }

        fetchData()


    }, [])




    // render


    return (
        <SafeAreaView>
            <ScrollView>
                <Row>
                    <Title>{data.SolicitacaoId.Empresa.NomeFantasia}</Title>

                    <Row>
                        <ScoreCircle background={convertScoreByColor(data.SolicitacaoId.Score)}/>
                        <Score>{data.SolicitacaoId.Score}</Score>
                    </Row>
                </Row>
                
                <Subtitle>CNPJ: {formatCNPJ(data.SolicitacaoId.Documento)}</Subtitle>
                <LoanType>{formatLoanType(data.SolicitacaoId.TipoEmprestimo, false)}</LoanType>

                <Row>
                    <Buttom>
                        <ButtomText>VER SOLICITAÇÃO</ButtomText>
                    </Buttom>

                    <Text bold={true} >Status: <Text>{data.formattedStatus}</Text></Text>
                </Row>

                <LinkList 
                    data={links} 
                    borderBottomWidth="1"
                />

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Valor investido</ItemTitle>
                    <ItemText>{formatMoney(data.Valor)}</ItemText>
                </Item>

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Retorno bruto anual</ItemTitle>
                    <ItemText>{formatPercent(data.SolicitacaoId.RetornoBrutoAnual)} a.a.</ItemText>
                </Item>

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Retorno bruto anual</ItemTitle>
                    <ItemText>{formatPercent(data.SolicitacaoId.RetornoBrutoMensal)} a.m.</ItemText>
                </Item>

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Retorno estimado do CDI</ItemTitle>
                    <ItemText>{formatPercent( (data.SolicitacaoId.Cdi / 1000).toFixed(3) )}</ItemText>
                </Item>

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Prazo previsto</ItemTitle>
                    <ItemText>{data.SolicitacaoId.Prazo} Meses</ItemText>
                </Item>

                <Item borderColor={convertScoreByColor(data.SolicitacaoId.Score)} >
                    <ItemTitle>Data do investimento</ItemTitle>
                    <ItemText>{formatDate(data.Created)}</ItemText>
                </Item>

                <Footer data={reserve} loading={reserve === null} />

            </ScrollView>
        </SafeAreaView>
    )
}