import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    ScrollView,
    Label,
    Error
} from './styles'

export const SignUpInvestorStepFiveComponent = props => {

    // states

    const [disabled, setDisabled] = useState('')
    const [validCellPhone, setValidCellPhone] = useState(true)
    const [validPhone, setValidPhone] = useState(true)
    const [TelefoneFixo, setTelefoneFixo] = useState('')
    const [Celular, setCelular] = useState('')

    const Investidor = {
        TelefoneFixo,
        Celular
    }

    // Validate funcitons

    const isValidPhone = (phone) => {
        const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/
        const valid = regex.test(phone)

        return valid
    }

    //effect

    useEffect(() => {

        setDisabled(!validCellPhone || !validPhone || TelefoneFixo === '' || Celular === '')

    }, [validCellPhone, validPhone, TelefoneFixo, Celular ])

    //render 

    return (
        <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} >
            <SafeAreaView>
                <ScrollView>

                    <Label>Celular</Label>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={Celular}
                        onChangeText={value => setCelular(value)}
                        style={Styles.inputMargin}
                        onBlur={() => setValidCellPhone(isValidPhone(Celular))}
                    />

                    {
                        !validCellPhone ? <Error>Você deve inserir um número válido</Error>
                            : <View style={{ marginBottom: 30 }}></View>
                    }

                    <Label>Telefone</Label>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={TelefoneFixo}
                        onChangeText={value => setTelefoneFixo(value)}
                        style={Styles.inputMargin}
                        onBlur={() => setValidPhone(isValidPhone(TelefoneFixo))}
                    />

                    {
                        !validPhone ? <Error>Você deve inserir um número válido</Error>
                            : <View style={{ marginBottom: 30 }}></View>
                    }

                    <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepSix')}>
                        <ButtonText>Continuar</ButtonText>
                    </Button>
                </ScrollView>

            </SafeAreaView>


        </KeyboardAvoidingView>
    )
}

export const SignUpInvestorStepFive = {
    screen: SignUpInvestorStepFiveComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}