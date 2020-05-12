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

export const SignUpInvestorStepSevenComponent = props => {

    //state

    const [disabled, setDisabled] = useState(true)
    const [PessoaPoliticamenteExposta, setPessoaPoliticamenteExposta] = useState('')
    const [RendaMensal, setRendaMensal] = useState('')
    const [Patrimonio, setPatrimonio] = useState('')

    //vars
    const Investidor = {
        PessoaPoliticamenteExposta,
        Patrimonio,
        RendaMensal,
    }

    const checkButton = () => {
        if (PessoaPoliticamenteExposta === '1') {
            setPessoaPoliticamenteExposta('0')
        } else {
            setPessoaPoliticamenteExposta('1')
        }
    }

    const openLinkPPE = () => {
        Linking.openURL('http://fazenda.gov.br/orgaos/coaf').catch(err => console.error('Impossível carregar página', err))
    }

    //effect

    useEffect(() => {
        setDisabled(RendaMensal === '' || Patrimonio === '')
    }, [RendaMensal, Patrimonio])

    //render

    return (
        <SafeAreaView>
            <TextInput
                title={'Renda mensal aprox. (R$)'}
                mask={'currency'}
                onValueChange={({ unMasked }) => setRendaMensal(unMasked)}
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
                    status={PessoaPoliticamenteExposta === '1' ? 'checked' : 'unchecked'}
                    onPress={checkButton}
                />

                <Text>Declaro ser PPE</Text>
            </ContainerLine>

            <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepEight')}>
                <ButtonText>Continuar</ButtonText>
            </Button>

        </SafeAreaView>
    )
}

export const SignUpInvestorStepSeven = {
    screen: SignUpInvestorStepSevenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}