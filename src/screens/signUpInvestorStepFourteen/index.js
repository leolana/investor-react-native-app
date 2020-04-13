import React, { useState, useEffect } from 'react'

import { RadioButton, Text } from 'react-native-paper'

import {
    SafeAreaView,
    Button,
    ButtonText,
    ScrollView,
    ContainerLine,
    TextLine,
    Title,
    TextLineBold
} from './styles'

export const SignUpInvestorStepFourteenComponent = props => {
    const [ disabled, setDisabled ] = useState(true)
    const [ radioButton, setRadioButton] = useState('')

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
                <Title>Esse é o último passo do seu cadastro de Investidor</Title>

                <TextLine>
                    Confirmo que as informações e documentos fornecidos são verdadeiros e concordo expressamente com o inteiro
                    teor dos <TextLineBold>Termos e Condições Gerais de Uso</TextLineBold> e <TextLineBold>Política de Provacidade</TextLineBold> , ficando desde já obriagado e sujeito aos
                    direitos e obrigações oriundos dos instrumentos.
                </TextLine>

                <ContainerLine>
                    <RadioButton
                        value='1'
                        status={radioButton === '1' ? 'checked' :'unchecked'}
                        onPress={checkButton}
                    />

                    <Text>CONFIRMO E CONCORDO</Text>
                </ContainerLine>
                
                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepFifteen')}>
                    <ButtonText>CONTINUAR</ButtonText>
                </Button>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export const SignUpInvestorStepFourteen = {
    screen: SignUpInvestorStepFourteenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}