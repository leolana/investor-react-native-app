import React from 'react'

import {
    SafeAreaView,
    Button,
    ButtonText,
    Title,
    Text,
    Gratters
} from './styles'

export const FormSuitabilityFour = props => {
    
    return (
        <SafeAreaView>        
            <Title>Seu perfil de investimento é: </Title>
            <Text>Parabéns, NOMINHO. </Text>
            <Gratters>Juntos vamos reinventar o sistema bancário ultrapassado e 
            garantir um melhor negócio para todos!  </Gratters>

            <Button onPress={() => props.navigation.navigate('Opportunities')} >
                <ButtonText> OPORTUNIDADES ABERTAS </ButtonText>
            </Button>
        </SafeAreaView>

    )

}

export const SuitabilityFour = {
    screen: FormSuitabilityFour,
    navigationOptions: {
        headerTitle: "Finalizar"
    }
}