import React from 'react'


import {
    black
} from '../../../../assets/colors'

import {
    formatCNPJ,
    formatMoney,
    formatPercent,
} from '../../../../utils'

import {
    Title,
    Text,
    Item,
    Area,
    Button,
    IconPrinterStyled
} from '../../styles'

import {
    withNavigation
} from 'react-navigation'


export const ModalPaymantComponent = props => {

    // Props

    const { data } = props

    const { Pagamento } = data.Detalhes

    console.log(data)

    // Render

    return (
        <>

            <Title>Informações</Title>
            <Text marginBottom={2} >{Pagamento.NomeEmpresa} - {formatCNPJ(Pagamento.DocumentoEmpresa)}</Text>
            <Text marginBottom={10} >Parcela {Pagamento.IndiceParcela}/{Pagamento.Prazo}</Text>

            <Text  marginBottom={10}>
                <Item>ID da fatura: </Item> 
                <Text>{Pagamento.FaturaId}</Text>
            </Text>

            <Text  marginBottom={10}>
                <Item>ID da transação: </Item> 
                <Text>{data.id}</Text>
            </Text>

            <Item marginBottom={5} >Detalhes de Recebimento</Item>

            <Area  marginBottom={2}>
                <Item>Principal: </Item> 
                <Text>{ formatMoney( Pagamento.ValorBruto - Pagamento.Ipmt ) }</Text>
            </Area>

            <Area  marginBottom={2}>
                <Item>Juros: </Item> 
                <Text>+ { formatMoney( Pagamento.Ipmt ) }</Text>
            </Area>

            <Area  marginBottom={2}>
                <Item>Multa por Atraso: </Item> 
                <Text>+ { formatMoney( Pagamento.Multa || 0 ) }</Text>
            </Area>

            <Area  marginBottom={2}>
                <Item>Valor Bruto (Principal + Juros + Multa): </Item> 
                <Text>{ formatMoney( Pagamento.ValorBruto ) }</Text>
            </Area>

            <Area  marginBottom={2}>
                <Item>Ir {formatPercent(Pagamento.AliqIr)}: </Item> 
                <Text>- { formatMoney( Pagamento.Ir ) }</Text>
            </Area>

            <Area 
                isLast={ true } 
                marginBottom={2}>
                <Item>Liquido (Valor Bruto - Ir): </Item> 
                <Text>{ formatMoney( data.Valor ) }</Text>
            </Area>

            <Button onPress={ () => props.navigation.navigate('WalletReceipt', { id: data.id }) }>
                <IconPrinterStyled width={ 24 } height={ 24 } stroke={ black } fill={'none'} />
                <Text>Visualizar detalhes</Text>

            </Button>
    

        </>

    )
}


export const ModalPaymant = withNavigation(ModalPaymantComponent)