import React from 'react'


import {
    SafeAreaView,
    Button,
    ButtonText,
    Title,
    Text,
    Note    
} from './styles'

export const SignUpInvestorStepTenComponent = props => {
    return (
        <SafeAreaView>
            <Title>Documento de identidade</Title>

            <Title>Enviado com sucesso!</Title>

            <Note>O documento enviado está em processo de análise.</Note>
            
                <Button>
                    <ButtonText>CONFIRMAR</ButtonText>
                </Button>
            
            <Text> CONTINUAR DEPOIS </Text>
           
        </SafeAreaView>
    )
}

export const SignUpInvestorStepTen = {
    screen: SignUpInvestorStepTenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}