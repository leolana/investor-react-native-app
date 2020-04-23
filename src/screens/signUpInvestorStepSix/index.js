import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import {
    Loading
} from '../../components'

import {
    Request,
    UrlLocalizacaoCEPPegar,

} from '../../services'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    TextInput,
    ScrollView,
    Label,
    Error
} from './styles'

export const SignUpInvestorStepSixComponent = props => {
    //states

    const [loading, setLoading] = useState(false)
    const [valid, setValid] = useState(true)
    const [disabled, setDisabled] = useState('')
    const [CEP, setCEP] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighborhood, setNeighborhood] = useState('')

    //async functions

    const getCEP = async () => {
        if (loading) return

        setLoading(true)

        const resp = await Request.GET({ url: UrlLocalizacaoCEPPegar(CEP) })

        if (resp.data.erro)
            setValid(false)

        if (resp.status === 200 && !resp.data.erro) contentCep(resp.data)


        else console.log('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
        console.log(resp.data)

        setLoading(false)
    }

    //functions 
    function contentCep(value) {
        setStreet(value.logradouro)
        setState(value.uf)
        setCity(value.localidade)
        setNeighborhood(value.bairro)
    }

    //validate functions

    const validaCep = () => {
        if (CEP != "") {
            let validar = /^[0-9]{5}-[0-9]{3}$/

            if (validar.test(CEP)) {
                setValid(true)
                getCEP()
            }

            else setValid(false)
        }
    }

    //effect
    
    useEffect(() => {
        setDisabled(CEP === '' || street === '' || state === '' || city === '' || neighborhood === '' || number === '')
    }, [CEP, street, state, city, neighborhood, number])

    //render

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
                        onBlur={validaCep}
                    />
                    {
                        !valid ? <Error>Insira um CEP válido</Error>
                            : <View style={{ marginBottom: 30 }}></View>
                    }
                    <Loading loading={loading} >

                        <TextInput
                            title={'Logradouro'}
                            value={street}
                            onChangeText={value => setStreet(value)}
                        />

                        <TextInput
                            title={'Número'}
                            onChangeText={value => setNumber(value)}
                            keyboardType={'numeric'}
                        />

                        <TextInput
                            title={'Complemento'}
                            value={complement}
                            onChangeText={value => setComplement(value)}
                        />
                        <TextInput
                            title={'Cidade'}
                            value={city}
                            onChangeText={value => setCity(value)}
                        />

                        <TextInput
                            title={'Bairro'}
                            value={neighborhood}
                            onChangeText={value => setNeighborhood(value)}
                        />
                        <TextInput
                            title={'Estado'}
                            value={state}
                            onChangeText={value => setState(value)}
                        />

                        <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepSeven')}>
                            <ButtonText>Continuar</ButtonText>
                        </Button>
                    </Loading>
                </ScrollView>

            </SafeAreaView>


        </KeyboardAvoidingView>
    )
}

export const SignUpInvestorStepSix = {
    screen: SignUpInvestorStepSixComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}