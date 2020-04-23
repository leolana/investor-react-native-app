import React, { useState, useEffect } from 'react'
import { Linking, TouchableOpacity } from 'react-native'

import { RadioButton, Text, } from 'react-native-paper'

import {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ContainerLine,
    TextLine
} from './styles'

export const SignUpInvestorStepEightComponent = props => {

    //state

    const [disabled, setDisabled] = useState(true)
    const [radioButton, setRadioButton] = useState('')
    const [renda, setRenda] = useState('')
    const [patrimonio, setPatrimonio] = useState('')

    //vars

    const checkButton = () => {
        if (radioButton === '1') {
            setRadioButton('0')
        } else {
            setRadioButton('1')
        }
    }

    const openLinkPPE = () => {
        Linking.openURL('http://fazenda.gov.br/orgaos/coaf').catch(err => console.error('Impossível carregar página', err))
    }

    //effect

    useEffect(() => {
        setDisabled(renda === '' || patrimonio === '')
    }, [renda, patrimonio])

    //render

    return (
        <SafeAreaView>
            <TextInput
                title={'Rensa mensal aprox. (R$)'}
                mask={'currency'}
                onValueChange={({ unMasked }) => setRenda(unMasked)}
                keyboardType={'numeric'}
            />

            <TextInput
                title={'Patrimônio aprox. (R$)'}
                mask={'currency'}
                onValueChange={({ unMasked }) => setPatrimonio(unMasked)}
                keyboardType={'numeric'}
            />

            <TouchableOpacity onPress={openLinkPPE} >
                <TextLine>Você é uma Pessoa Politicamente Exposta ("PPE")?</TextLine>
            </TouchableOpacity>

            <ContainerLine>
                <RadioButton
                    value='1'
                    status={radioButton === '1' ? 'checked' : 'unchecked'}
                    onPress={checkButton}
                />

                <Text>Declaro ser PPE</Text>
            </ContainerLine>

            <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepNine')}>
                <ButtonText>Continuar</ButtonText>
            </Button>

        </SafeAreaView>
    )
}

export const SignUpInvestorStepEight = {
    screen: SignUpInvestorStepEightComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}