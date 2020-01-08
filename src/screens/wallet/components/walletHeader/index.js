import React, { useState, useEffect } from 'react'

import {
    Item,
    ItemTitle,
    ItemText,
    ItemArea,
    ItemRight,
} from './styles'

import {
    formatMoney,
    formatPercent,
    trunc,
    PMT
} from '../../../../utils'




export const WalletHeader = props => {


    // Props

    const {

        walletData,
        invData

    } = props



    // States

    let [ funds, setFunds ] = useState(0)

    let [ toReceive, setToReceive ] = useState(0)

    let [ pending, setPending ] = useState(0)

    let [ percent, setPercent ] = useState(0)


    // Methods


    const formatWalletFunds = data => {

        const { debito, credito } = data

        const availableFunds = 
            ( parseFloat ( trunc(credito) ) -  parseFloat( trunc(debito) ) )

        const funds = 
            (parseFloat(availableFunds) > -0.1 && availableFunds < 0.01) ? 0 : availableFunds

        setFunds(funds)

        return funds
    }

    const formatPending = data => {

        if(data == undefined) return

        let value = 0

        const calculatePending = item => {

            const statusAnaliseIsEncerrado = (item.SolicitacaoId.StatusAnalise == "ENCERRADO")

            const statusBoletoIsPaid = (item.StatusBoleto == "paid")

            const wasOnWaitingList = (item.Status == 2 && statusAnaliseIsEncerrado || statusBoletoIsPaid )

            if( !(item.Status == 0 || wasOnWaitingList) ) value += item.Valor 

        }

        data.map( item => calculatePending(item) )

        setPending( value )

    }

    const formatToReceive = data => {

        if(data === undefined) return

        let value = 0

        const calculateToReceive = item => {

            const { SolicitacaoId, StatusBoleto, Valor} = item

            if( SolicitacaoId != null && StatusBoleto == "paid") {

                let { RetornoBrutoMensal, Prazo } = SolicitacaoId

                let retornoBruto = 
                    (RetornoBrutoMensal == undefined) ? 0 : RetornoBrutoMensal

                value += trunc( Prazo * PMT(Valor, retornoBruto, Prazo) )

            }
            
        }

        data.map( item => calculateToReceive(item) )

        setToReceive( value - walletData.debito - formatWalletFunds(walletData) )

    }

    const formatPercnet = data => {

        if(data == undefined) return
        
        let temp = 0.0, count = 0

        const calculatePercent = item => {

            const { SolicitacaoId, StatusBoleto } = item

            if(SolicitacaoId != null && StatusBoleto == "paid") {

                const { TipoEmprestimo, RetornoBrutoMensal,  } = SolicitacaoId

                if(TipoEmprestimo != "emprestimo-de-impacto" ) {

                    temp += (RetornoBrutoMensal == undefined) ? 0 : RetornoBrutoMensal

                    count++
                }
            }
        }

        data.map( item => calculatePercent(item) )

        setPercent( trunc( (count > 0) ? ( temp/count ) : 0 ) )
    }



    // Effect

    useEffect( () => {

        if(walletData == null || invData == null) return

        formatWalletFunds(walletData)

        formatPending(invData)

        formatToReceive(invData)

        formatPercnet(invData)

    }, [walletData, invData])



    // Render 

    
    return (
        <>
            <Item>
                <ItemTitle>Saldo disponível</ItemTitle>
                <ItemText fontSize={ 30 }>{ formatMoney(funds) }</ItemText>
            </Item>

            <Item>
                <ItemTitle>A receber</ItemTitle>
                <ItemText>{formatMoney(toReceive)}</ItemText>
            </Item>

            <ItemArea>

                <Item withoutMargim={ true }>
                    <ItemTitle>Pendente</ItemTitle>
                    <ItemText>{ formatMoney(pending) }</ItemText>
                </Item>

                <ItemRight >
                    <ItemTitle width={ 100 } textAlign="right" >Estimativa de retorno da carteira</ItemTitle>
                    <ItemText>{ formatPercent(percent) } a.m.</ItemText>
                </ItemRight>

            </ItemArea>

        </>

    )

}