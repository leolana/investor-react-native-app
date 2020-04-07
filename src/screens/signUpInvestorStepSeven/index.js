import React, { useState, useEffect } from 'react'

import { RadioButton, Text } from 'react-native-paper'

import {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ScrollView,
    ContainerLine,
    TextLine
} from './styles'

export const SignUpInvestorStepSevenComponent = props => {
    const [ disabled, setDisabled ] = useState(true)
    const [ radioButton, setRadioButton] = useState('')
    const [ renda, setRenda ] = useState('')
    const [ patrimonio, setPatrimonio ] = useState('')

    useEffect( () => {
        setDisabled(renda === '' || patrimonio === '')
    }, [ renda, patrimonio])

    const checkButton = () => {
        if(radioButton === '1') {
            setRadioButton('0')
        } else {
            setRadioButton('1')
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput 
                    title={'Rensa mensal aprox. (R$)'} 
                    mask={ 'currency' } 
                    onValueChange={ ({unMasked}) => setRenda(unMasked) } 
                    keyboardType={'numeric'}
                />
            
                <TextInput 
                    title={'Patrimônio aprox. (R$)'} 
                    mask={ 'currency' } 
                    onValueChange={ ({unMasked}) => setPatrimonio(unMasked) } 
                    keyboardType={'numeric'}
                />

                <TextLine>Você é uma Pessoa Politicamente Exposta ("PPE")?</TextLine>

                <ContainerLine>
                    <RadioButton
                        value='1'
                        status={radioButton === '1' ? 'checked' :'unchecked'}
                        onPress={checkButton}
                    />

                    <Text>Declaro ser PPE</Text>
                </ContainerLine>
                
                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepThirteen')}>
                    <ButtonText>Continuar</ButtonText>
                </Button>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export const SignUpInvestorStepSeven = {
    screen: SignUpInvestorStepSevenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}