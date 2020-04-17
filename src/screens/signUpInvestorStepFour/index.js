import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    Label,
    Error,
} from './styles'

import {
    Select
} from '../../components'

export const SignUpInvestorStepFourComponent = props => {
    const [disabled, setDisabled] = useState(true)
    const [valid, setValid] = useState(true)
    const [maritalStatus, setMaritalStatus] = useState('')
    const [CPF, setCPF] = useState('')
    const [phone, setPhone] = useState('')
    const [cellPhone, setCellPhone] = useState('')

    const optionsMaritalStatus = [
        { text: "Solteiro (a)", value: 1 },
        { text: "Casado (a)", value: 2 },
        { text: "Divorciado (a)", value: 3 },
        { text: "Viúvo (a)", value: 4 }
    ]

    const validatePhone = (value) => {
        const validar = /^(0[1-2][1-9]9\d{8})|(0[3-9][1-9]\d{8})$/
    }

    const validateCPF = () => {
        const cpf = CPF.replace(/[^\d]+/g, '')

        if (cpf == '') return false

        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false

        // Valida 1o digito	
        let add = 0
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i)
        let result = 11 - (add % 11)

        if (result == 10 || result == 11) result = 0

        if (result != parseInt(cpf.charAt(9))) return false

        // Valida 2o digito	
        add = 0
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        result = 11 - (add % 11)

        if (result == 10 || result == 11) result = 0

        if (result != parseInt(cpf.charAt(10))) return false

        return true
    }

    const isValidPhone = (phone) => {
        const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
        const valid = brazilianPhoneRegex.test(phone);
    };

    useEffect(() => {

        setDisabled(!valid || maritalStatus === '' || CPF === '' || phone === '' || cellPhone === '')

    }, [valid, maritalStatus, CPF, phone, cellPhone])

    return (
        <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <SafeAreaView>
                <Label>CPF</Label>
                <TextInputMask
                    type={'cpf'}
                    value={CPF}
                    onChangeText={value => setCPF(value)}
                    style={Styles.input}
                    onBlur={() => setValid(validateCPF())}
                />
                {
                    !valid ? <Error>Você deve inserir um CPF válido</Error>
                        : <View style={{ marginBottom: 30 }}></View>
                }

                <Select
                    title="Estado civil"
                    options={optionsMaritalStatus}
                    onValueChange={obj => setMaritalStatus(obj.value)}
                    value={maritalStatus}
                />

                <Label>Celular</Label>
                <TextInputMask
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={cellPhone}
                    onChangeText={value => setCellPhone(value)}
                    style={Styles.inputMargin}
                    onBlur={isValidPhone(cellPhone)}
                />

                <Label>Telefone</Label>
                <TextInputMask
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    style={Styles.inputMargin}
                    onBlur={isValidPhone(phone)}
                />

                <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepFive')}>
                    <ButtonText>Continuar</ButtonText>
                </Button>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}



export const SignUpInvestorStepFour = {
    screen: SignUpInvestorStepFourComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}