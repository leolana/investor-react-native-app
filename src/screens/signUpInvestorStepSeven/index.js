import React, { useState, useEffect } from 'react'

import { RadioButton, Text } from 'react-native-paper'

import {
    Select
} from '../../components'

import {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ScrollView,
    ContainerLine,
    Title
} from './styles'

export const SignUpInvestorStepSevenComponent = props => {
    const [disabled, setDisabled] = useState(true)
    const [bank, setBank] = useState('')
    const [bankAccountType, setBankAccountType] = useState('')
    const [bankAgency, setBankAgency] = useState('')
    const [bankAccount, setBankAccount] = useState('')

    const optionsBank = [
        { value: '001', text: 'Banco do Brasil S.A.' },
        { value: '033', text: 'Banco Santander (Brasil) S.A.' },
        { value: '104', text: 'Caixa Econômica Federal' },
        { value: '237', text: 'Banco Bradesco S.A.' },
        { value: '341', text: 'Itaú Unibanco S.A.' },
        { value: '041', text: 'Banco Banrisul' },
        { value: '748', text: 'Sicredi' },
        { value: '756', text: 'Sicoob' },
        { value: '077', text: 'Banco Intermedium S.A.' },
        { value: '070', text: 'BRB' },
        { value: '085', text: 'Via Credi' },
        { value: '655', text: 'Banco Neon' },
        { value: '260', text: 'NuBank' },
        { value: '290', text: 'PagSeguro' },
        { value: '212', text: 'Banco Original' }
    ];

    useEffect(() => {
        setDisabled(bankAccountType === '' || bankAgency === '' || bankAccount === '')
    }, [bankAccountType, bankAgency, bankAccount])

    return (
        <SafeAreaView>
            <ScrollView>
                <Title>Os dados informados devem ser do titular da conta</Title>

                <Select
                    title="Banco"
                    options={optionsBank}
                    onValueChange={obj => setBank(obj.value)}
                    value={bank}
                />

                <TextInput
                    title={'Agência'}
                    onChangeText={value => setBankAgency(value)}
                />

                <TextInput
                    title={'Conta'}
                    onChangeText={value => setBankAccount(value)}
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

                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepEight')}>
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