import React from 'react'


import {
    SafeAreaView,
    Button,
    ButtonText,
    Title,
    Note    
} from './styles'

export const SignUpInvestorStepTwelveComponent = props => {
    return (
        <SafeAreaView>
            <Title>Comprovante de residência</Title>

            <Title>Enviado com sucesso!</Title>

            <Note>O documento enviado está em processo de análise.</Note>
            
                <Button>
                    <ButtonText>Confirmar</ButtonText>
                </Button>
                       
        </SafeAreaView>
    )
}

export const SignUpInvestorStepTwelve = {
    screen: SignUpInvestorStepTwelveComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}