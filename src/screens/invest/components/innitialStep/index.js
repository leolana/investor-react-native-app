import React, { useState, useEffect }  from 'react'

import {
    Retangle,
    Text,
    Divisor,
    ItemTitle,
    ItemText,
    ItemWithDivisor,
    ItemWithoutDivisor,
    ProgressArea,
    ProgressHeader,
    ProgressTitle,
    ProgressText,
    ProgressBar,
    ProgressIndicator,
    Progress,
    TextInfo,
    InputTitle,
    InputArea,
    InputValue,
} from './styles'

import {
    Buttom,
    ButtomText
} from '../../styles'

import { 
    grey99,
    grey66
} from '../../../../assets/colors'

import {
    IconInvestor
} from '../../../../assets/icons'

import {
    formatPercent,
    formatDate,
    formatMoney,
    convertScoreByColor
} from '../../../../utils'


import { withNavigation } from 'react-navigation'


export const InnitialStepComponent = props => {

    // props 

    const { data } = props

    // States

    const [ value, setValue ] = useState(0)

    const [ reinvestimentValue , setReinvestmentValue ] = useState(0)


    // Methods

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

    const generateRangeValues = () => {

        const {
            InvestimentoMaximo,
            InvestimentoMinimo,
            Valor,
            ValorCaptado,
            ChamadaListaEspera,
        } = data

        const max = Valor - ValorCaptado

        let value = InvestimentoMinimo

        const values = []

        while(value <= InvestimentoMaximo) {

            values.push( { value, text: formatMoney(value) } )

            value += value

        }

        
        if(max <= 0 || ChamadaListaEspera ) return values.reverse()

        return (values.reverse()).filter( ({value}) => (value <= max) )
        
    }


    const openPicker = () => {

        const onValueChange = value => setValue(value)

        const params = { data: generateRangeValues(), value, onValueChange  }

        props.navigation.navigate('Picker', params)
    }

    

    const hasWalletBalance = () => {

        if( data.walletBalance === undefined || data.walletBalance === null) return props.onStepChange(1)

        if(data.walletBalance <= 0 || reinvestimentValue > 0) return props.onStepChange(1)

        const onValueChange = value => setReinvestmentValue(value)

        props.navigation.navigate('ReinvestmentSheetModal', { data: {...data, value} , onValueChange } )

    }

    // Effects

    useEffect( () => {

        if(props.onValueChange === undefined) return 

        props.onValueChange(value, reinvestimentValue)

    }, [value, reinvestimentValue]) 
    

    // render


    return (
        <>

            <Retangle>
                <Text color={grey99} >Cidade/UF: <Text bold={true} >{data.Empresa.Endereco.Cidade} / {data.Empresa.Endereco.Uf}</Text></Text>
            </Retangle>

            <Retangle>
                <IconInvestor width={20} height={20} />
                <Text bold={true} >{data.QuantidadeReservasInvestimento}<Text>{ (data.QuantidadeReservasInvestimento > 1) ? ' investidores' : ' investidor' }</Text></Text>
            </Retangle>

            <Divisor>

                <ItemWithDivisor>

                    <ItemTitle>Valor solicitado</ItemTitle>
                    <ItemText>{formatMoney(data.ValorSolicitado)}</ItemText>

                </ItemWithDivisor>

                <ItemWithoutDivisor>
                    
                    <ItemTitle>Valor total do emprêstimo</ItemTitle>
                    <ItemText>{formatMoney(data.Valor)}</ItemText>

                </ItemWithoutDivisor>

            </Divisor>

            <Divisor>

                <ItemWithDivisor>

                    <ItemTitle>Valor da parcela</ItemTitle>
                    <ItemText>{formatMoney(data.ValorParcela)}</ItemText>

                </ItemWithDivisor>

                <ItemWithoutDivisor>
                    
                    <ItemTitle>Duração esperada</ItemTitle>
                    <ItemText>{data.Prazo} meses</ItemText>

                </ItemWithoutDivisor>

            </Divisor>

            <ProgressArea>

                <ProgressHeader>

                    <ProgressTitle>Levantado: {formatPercent(getProgress())}</ProgressTitle>

                    <ProgressTitle>Falta: <ProgressText>{getRemainingValue()}</ProgressText></ProgressTitle>

    
                </ProgressHeader>

                <ProgressBar>
                    <Progress background={convertScoreByColor(data.Score)} completed={getProgress()} />
                    <ProgressIndicator>{formatPercent(getProgress())}</ProgressIndicator>
                </ProgressBar>


            </ProgressArea>


            <TextInfo color={grey66} >Início da captação: <TextInfo bold={true} >{formatDate(data.InicioCaptacao, 'dd ? MMM, yyyy').replace('?', 'de')}</TextInfo></TextInfo>
            <TextInfo color={grey66} >Expira em: <TextInfo bold={true} >{formatDate(data.FimCaptacao, 'dd ? MMM, yyyy').replace('?', 'de')}</TextInfo></TextInfo>

            <InputTitle>Valor que deseja investir</InputTitle>

            <InputArea onPress={ () => openPicker() } >
                <InputValue>{formatMoney(value)}</InputValue>
            </InputArea>

            <Buttom disabled={ value === 0 } onPress={ () => hasWalletBalance() } >
                <ButtomText>Investir</ButtomText>
            </Buttom>

            <TextInfo marginBottom={ 32 } textAlign="center" color={ grey99 } >
                ** Ao chegar em 100% do valor solicitado, 
                a solicitação é encerrada imediatamente e o pagamento do valor investido deve ser realizado em até 24 horas.
            </TextInfo>
        </>
    )
}

export const InnitialStep = withNavigation(InnitialStepComponent)