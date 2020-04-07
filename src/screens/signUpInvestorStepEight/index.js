import React from 'react'


import {
    SafeAreaView,
    Button,
    ButtonText,
    Title,
    Text,
    Container,
    ContainerTitle,
    Note    
} from './styles'

export const SignUpInvestorStepEightComponent = props => {
    return (
        <SafeAreaView>
            <Title>Documento de identidade</Title>

            <Note>É necessário estar em seu nome (RG ou CNH)</Note>
            
            <Container>
                <ContainerTitle>Enviar Frente</ContainerTitle>
                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('Opportunities')}>
                    <ButtonText>ABRIR CÂMERA</ButtonText>
                </Button>
            </Container>
            
            <Text> CONTINUAR DEPOIS </Text>
           
        </SafeAreaView>
    )
}

export const SignUpInvestorStepEight = {
    screen: SignUpInvestorStepEightComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}