import React, { useState, useEffect } from 'react'

import { RadioButton, Text } from 'react-native-paper'

import {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ScrollView,
    ContainerLine
} from './styles'

export const SignUpInvestorStepSixComponent = props => {
    const [ disabled, setDisabled ] = useState(true)
    const [ bankAccountType, setBankAccountType ] = useState('')
    const [ bankAgency, setBankAgency ] = useState('')
    const [ bankAccount, setBankAccount ] = useState('')

    useEffect(() => {
        setDisabled(bankAccountType === '' || bankAgency === '' || bankAccount === '')
    },[bankAccountType, bankAgency, bankAccount] )

    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput 
                    title={'Agência'} 
                    onChangeText={ value => setBankAgency(value) }                 
                />
            
                <TextInput 
                    title={'Conta'} 
                    onChangeText={ value => setBankAccount(value) }                                    
                />

                <RadioButton.Group
                    onValueChange={(value) => setBankAccountType(value)}
                    value={bankAccountType}
                >
                    <ContainerLine>
                        <RadioButton value="1" />
                        <Text>Conta poupança</Text>
                    </ContainerLine>
                    
                    <ContainerLine>
                        <RadioButton value="2" />
                        <Text>Conta corrente</Text>
                    </ContainerLine>
                </RadioButton.Group>

                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepSeven')}>
                    <ButtonText>Continuar</ButtonText>
                </Button>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export const SignUpInvestorStepSix = {
    screen: SignUpInvestorStepSixComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}