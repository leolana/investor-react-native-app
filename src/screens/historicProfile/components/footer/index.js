import React from 'react'

import {
    Container,
    Content
} from './styles'

import {
    Item,
    ItemTitle,
    ItemText,
    Divisor,
    DivisorTitle,
} from '../../styles'

import {
    SkeletonBone
} from '../../../../components'

import {
    formatMoney,
    formatDate,
    formatPercent

} from '../../../../utils'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Footer = props => {

    
    // props

    const { 
        data,
        loading 
    } = props


    // methods

    const getValorTotalEmprestimo = () => {

        const {
            ValorParcela, 
            Valor, 
            Prazo 
        } = data.SolicitacaoId   
        
        return (ValorParcela == 0) ? Valor : (ValorParcela *  Prazo)  

    }

    const getValorParcela = () => {

        const {
            ValorParcela, 
            Valor, 
            Prazo 
        } = data.SolicitacaoId   

        return (ValorParcela == 0) ? (Valor / Prazo) : ValorParcela
    }

    const renderLoading = () => (
        <Container>
            <SkeletonBone height="18"/>

            <Divisor/>

            <SkeletonBone width={width - 32} height="45" distance={16}/>

            <SkeletonBone width={width - 32} height="45" distance={16}/>
        
        </Container>
    )

    const renderFooter = () => (
        <Content>
            <DivisorTitle>Captação de recursos</DivisorTitle>

            <Divisor/>

            <Item>
                <ItemTitle>Início</ItemTitle>
                <ItemText>{formatDate(data.SolicitacaoId.InicioCaptacao)}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Total de investidores</ItemTitle>
                <ItemText>{data.SolicitacaoId.QuantidadeReservasInvestimento}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Valor total captado</ItemTitle>
                <ItemText>{formatMoney(data.SolicitacaoId.ValorCaptado)}</ItemText>
            </Item>

            <DivisorTitle>Dados do empréstimo</DivisorTitle>

            <Divisor/>

            <Item>
                <ItemTitle>Valor solicitado</ItemTitle>
                <ItemText>{formatMoney(data.SolicitacaoId.Valor)}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Duraçao</ItemTitle>
                <ItemText>{data.SolicitacaoId.Prazo} Meses</ItemText>
            </Item>

            <Item>
                <ItemTitle>Valor total do empréstimo</ItemTitle>
                <ItemText>{formatMoney(getValorTotalEmprestimo())}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Valor da parcela</ItemTitle>
                <ItemText>{formatMoney(getValorParcela())}</ItemText>
            </Item>

            <Item>
                <ItemTitle>Juros</ItemTitle>
                <ItemText>{formatPercent(data.SolicitacaoId.TaxaJuros)} a.m.</ItemText>
            </Item>


        </Content>
    )

    // render

    return (loading) ? renderLoading() : renderFooter()
        
}