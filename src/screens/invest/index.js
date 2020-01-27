import React, { useState } from 'react'


import {
    SafeAreaView,
    Item,
    Title,
    Score,
    ScrollView,
    Subtitle,
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
    Button,
    ButtonText,
    Picker
} from './styles'

import {
    tealish, 
    grey99,
    grey66
} from '../../assets/colors'

import {
    CircleWithChild
} from '../../components'

import {
    IconInvestor
} from '../../assets/icons'

import {
    formatPercent,
    formatDate,
    formatMoney,
    formatCode,
    formatLoanType,
    convertScoreByColor
} from '../../utils'

export const InvestPopup = props => {

    // Props

    const data = props.navigation.getParam('data', null)

    // States

    const [ value, setValue ] = useState(0)



    // Vars


    // Methods

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

    const onValueChange = value => {

        setValue(value)
    }


    // Effects



    // Render


    return (
        <SafeAreaView>

            <ScrollView>
                <Item>
                    <Title>{data.Empresa.NomeFantasia}</Title>

                    <CircleWithChild 
                        background={convertScoreByColor(data.Score)} 
                        size={18}
                    />

                    <Score>{data.Score}</Score>

                </Item>

                <Item width={200} >
                    
                    <Subtitle bold={true} >ID#{formatCode(data.IdOportunidade)}</Subtitle>

                    <Subtitle>{formatLoanType(data.TipoEmprestimo, false)}</Subtitle>

                </Item>

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

                <InputArea onPress={ () => props.navigation.navigate('Picker', { data: generateRangeValues(), value, onValueChange  }) } >
                    <InputValue>{formatMoney(value)}</InputValue>
                </InputArea>

                <Button >
                    <ButtonText>Investir</ButtonText>
                </Button>

                <TextInfo textAlign="center" color={ grey99 } >
                    ** Ao chegar em 100% do valor solicitado, 
                    a solicitação é encerrada imediatamente e o pagamento do valor investido deve ser realizado em até 24 horas.
                </TextInfo>



            </ScrollView>


        </SafeAreaView>
    )
}

export const Invest = {
    screen: InvestPopup,
    navigationOptions: {
        headerTitle: "INVESTIR"
    }
}