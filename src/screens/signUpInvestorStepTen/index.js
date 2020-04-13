import React from 'react'
import { TouchableOpacity } from 'react-native'


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

export const SignUpInvestorStepTenComponent = props => {
    return (
        <SafeAreaView>
            <Title>Documento de identidade</Title>

            <Note>É necessário estar em seu nome (RG ou CNH)</Note>
            
            <Container>
                <ContainerTitle>Enviar Verso</ContainerTitle>
                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('Opportunities')}>
                    <ButtonText>ABRIR CÂMERA</ButtonText>
                </Button>
            </Container>
            
            <TouchableOpacity>
                <Text onPress={() => props.navigation.navigate('SignUpInvestorStepEleven')}> CONTINUAR DEPOIS </Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

export const SignUpInvestorStepTen = {
    screen: SignUpInvestorStepTenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}