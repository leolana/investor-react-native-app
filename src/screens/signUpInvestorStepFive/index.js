import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import {
    Request,
    UrlLocalizacaoCEPPegar

} from '../../services'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ScrollView,
    Label
} from './styles'

export const SignUpInvestorStepFiveComponent = props => {
    const [disabled, setDisabled] = useState('')
    const [CEP, setCEP] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [contentCEP, setContentCEP] = useState('')


    const getCEP = async () => {

        const resp = await Request.GET({ url: UrlLocalizacaoCEPPegar(CEP) })

        if (resp.status === 200) setContentCEP(resp.data)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }


    // useEffect(() => {
    //     setDisabled(CEP === '' || street === ''   || state === '' || city === '' || neighborhood === ''
    //     )
    // }, [CEP, street, state, city, neighborhood])

    return (
        <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} >
            <SafeAreaView>
                <ScrollView>
                    <Label>CEP</Label>

                    <TextInputMask
                        type={'zip-code'}
                        value={CEP}
                        onChangeText={value => setCEP(value)}
                        style={Styles.input}
                    />

                    <Button onPress={getCEP}>
                        <ButtonText>Pesquisar</ButtonText>
                    </Button>

                    <TextInput
                        title={'Logradouro'}
                        value={contentCEP.logradouro}
                        onChangeText={value => setStreet(value)}
                    />

                    <TextInput
                        title={'Número'}
                        onChangeText={value => setNumber(value)}
                        keyboardType={'numeric'}
                    />

                    <TextInput
                        title={'Complemento'}
                        onChangeText={value => setComplement(value)}
                    />
                    <TextInput
                        title={'Cidade'}
                        value={contentCEP.localidade}
                        onChangeText={value => setCity(value)}
                    />

                    <TextInput
                        title={'Bairro'}
                        value={contentCEP.bairro}
                        onChangeText={value => setNeighborhood(value)}
                    />
                    <TextInput
                        title={'Estado'}
                        value={contentCEP.uf}
                        onChangeText={value => setState(value)}
                    />



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