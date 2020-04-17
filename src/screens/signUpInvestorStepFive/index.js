import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import {
    Select
} from '../../components'

import {
    Request,
    UrlLocalizacaoEstadosPegar,
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

export const SignUpInvestorStepFiveComponent = props => {
    const [disabled, setDisabled] = useState('')
    const [valid, setValid] = useState(true)
    const [emissionDate, setEmissionDate] = useState('')
    const [emissionState, setEmissionState] = useState('')
    const [emissonOrgan, setEmissionOrgan] = useState('')
    const [rg, setRg] = useState('')
    const [apiState, setApiState] = useState([{
        id: "",
        text: "",
        value: ""
    }])

    const opcoesOrgaoEmissor = [
        { text: "SSP", value: "SSP" },
        { text: "PM", value: "PM" },
        { text: "PC", value: "PC" },
        { text: "CNT", value: "CNT" },
        { text: "DIC", value: "DIC" },
        { text: "CTPS", value: "CTPS" },
        { text: "FGTS", value: "FGTS" },
        { text: "IFP", value: "IFP" },
        { text: "IPF", value: "IPF" },
        { text: "IML", value: "IML" },
        { text: "MTE", value: "MTE" },
        { text: "MMA", value: "MMA" },
        { text: "MAE", value: "MAE" },
        { text: "MEX", value: "MEX" },
        { text: "POF", value: "POF" },
        { text: "POM", value: "POM" },
        { text: "SES", value: "SES" },
        { text: "SJS", value: "SJS" },
        { text: "SJTS", value: "SJTS" },
        { text: "ZZZ", value: "ZZZ" },
    ]

    function mapApiState() {
        getStates()

        const optionsState = apiState.map((resp) => {
            return {
                text: resp.sigla,
                value: resp.sigla
            }
        })
        return optionsState
    }

    async function getStates() {

        const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar })

        if (resp.status === 200) setApiState(resp.data)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }

    const validateDate = () => {
        let valid = false
        let regex = new RegExp("^([0-9]{2})/([0-9]{2})/([0-9]{4})$")
        let matches = regex.exec(emissionDate)

        if (matches != null) {
            let day = parseInt(matches[1], 10)
            let month = parseInt(matches[2], 10) - 1
            let year = parseInt(matches[3], 10)
            let date = new Date(year, month, day, 0, 0, 0, 0)
            valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day
        }

        if (valid) setValid(true)
        else setValid(false)
    }

    useEffect(() => {
        setDisabled(emissionDate === '' || emissionState === '' || emissonOrgan === '' || !valid)
    }, [emissionDate, emissionState, emissonOrgan, valid])

    return (
        <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} >
            <SafeAreaView>
                <ScrollView>

                    <TextInput
                        title={'RG'}
                        onChangeText={value => setRg(value)}
                        value={rg}
                    />

                    <Select
                        title='Orgão emissor'
                        options={opcoesOrgaoEmissor}
                        onValueChange={obj => setEmissionOrgan(obj.value)}
                        value={emissonOrgan}
                    />

                    <Select
                        title='Estado de emissão'
                        options={mapApiState()}
                        onValueChange={obj => setEmissionState(obj.value)}
                        value={emissionState}
                    />

                    <Label>Data de emissão</Label>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={emissionDate}
                        onChangeText={value => setEmissionDate(value)}
                        onBlur={validateDate}
                        style={Styles.input}
                    />
                    {
                        !valid ? <Error>Você deve inserir uma data válida</Error>
                            : <View style={{ marginBottom: 30 }}></View>
                    }

                    <Button disabled={disabled} onPress={() => props.navigation.navigate('SignUpInvestorStepSix')}>
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