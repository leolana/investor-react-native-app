import React, { useState, useEffect } from 'react'


import {
    SafeAreaView,
    ScrollView,
    Item,
    Title,
    Score,
    Subtitle,
    TextCNPJ,
} from './styles'

import {
    CircleWithChild
} from '../../components'

import {
    InnitialStep,
    ConfirmationStep,
    PaymentStep
} from './components'

import {
    formatCode,
    formatLoanType,
    convertScoreByColor,
    formatCNPJ
} from '../../utils'

import {
    Request,
    UrlCarteiraSaldo
} from '../../services'

import { Animated } from 'react-native'

export const InvestComponent = props => {

    // Vars

    const data = props.navigation.getParam('data', null)

    // States

    const [ value, setValue ] = useState(0)
    const [ reinvestmentValue, setReinvestmentValue ] = useState(null)

    const [ walletBalance, setWalletBalance ] = useState(null)

    const [ step, setStep ] = useState(0)

    // Methods

    const getWalletBalance = async () => {
        
        const resp = await Request.GET( { url: UrlCarteiraSaldo, header: 'bearer' } )

        if(resp.status === 200) setWalletBalance(resp.data.Saldo)

    }

    const onValueChange = (selectedValue, reinvestmentValue) => {

        setValue(selectedValue)
        setReinvestmentValue(reinvestmentValue)
        
    } 

    const onStepChange = stepIndex => {

        setStep( stepIndex )

    }

    const handleStep = () => {

        const innitial = (
            <InnitialStep 
                data={ { ...data, walletBalance } } 
                onValueChange={ onValueChange } 
                onStepChange={ onStepChange } 
            />
        )

        const confirmation = (
            <ConfirmationStep 
                data={{ ...data, value, reinvestmentValue }} 
                onStepChange={ onStepChange } 
            />
        )

        const payment = (
            <PaymentStep 
                data={{ ...data, value, reinvestmentValue }} 
            />
        )

        const steps = [
            innitial,
            confirmation,
            payment
        ]

        
        return steps[step]

    }

    // useEffect

    useEffect( () => {

        async function fetchData() {

            await getWalletBalance()

        }

        fetchData()


    }, [])


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

                <TextCNPJ>{formatCNPJ(data.Documento)}</TextCNPJ>

                <Item width={200} >
                    
                    <Subtitle bold={true} >ID#{formatCode(data.IdOportunidade)}</Subtitle>

                    <Subtitle>{formatLoanType(data.TipoEmprestimo, false)}</Subtitle>

                </Item>

                <Animated.View>

                    { handleStep() }

                </Animated.View>


            </ScrollView>


        </SafeAreaView>
    )
}

export const Invest = {
    screen: InvestComponent,
    navigationOptions: ({ navigation }) => {

        return {
            headerTitle: navigation.getParam('HeaderTitle', 'INVESTIR')
        }
    }
}

