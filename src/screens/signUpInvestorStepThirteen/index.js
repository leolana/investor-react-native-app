import React from 'react'


import {
    SafeAreaView,
    Button,
    ButtonText,
    Title,
    Note    
} from './styles'

export const SignUpInvestorStepThirteenComponent = props => {
    return (
        <SafeAreaView>
            <Title>Comprovante de residência</Title>

            <Title>Enviado com sucesso!</Title>

            <Note>O documento enviado está em processo de análise.</Note>
            
                <Button onPress={() => props.navigation.navigate('SignUpInvestorStepFourteen')}>
                    <ButtonText>Confirmar</ButtonText>
                </Button>
                       
        </SafeAreaView>
    )
}

export const SignUpInvestorStepThirteen = {
    screen: SignUpInvestorStepThirteenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}