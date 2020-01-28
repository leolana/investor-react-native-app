import React, { useState } from 'react'


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


import { Animated } from 'react-native'


export const InvestPopup = props => {

    // Props

    const data = props.navigation.getParam('data', null)

    // States

    const [ value, setValue ] = useState(0)
    const [ reinvestmentValue, setReinvestmentValue ] = useState(0)

    const [ step, setStep ] = useState(0)

    // Methods

    const onStepChange = stepIndex => {

        setStep( stepIndex )

        console.log(stepIndex)

    }

    const handleStep = () => {

        const innitial = (
            <InnitialStep 
                data={data} 
                onValueChange={ selectedValue => setValue(selectedValue) } 
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
    screen: InvestPopup,
    navigationOptions: ({ navigation }) => {

        return {
            headerTitle: navigation.getParam('HeaderTitle', 'INVESTIR')
        }
    }
}