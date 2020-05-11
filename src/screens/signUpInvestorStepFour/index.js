import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    Label,
    Error,
    TextInput
} from './styles'

import {
    Select
} from '../../components'

import {
    Request,
    UrlLocalizacaoEstadosPegar,
} from '../../services'

export const SignUpInvestorStepFourComponent = props => {

    //states

    const [disabled, setDisabled] = useState(true)
    const [validCpf, setValidCpf] = useState(true)
    const [validDate, setValidDate] = useState(true)
    const [Cpf, setCpf] = useState('')
    const [RgDataEmissao, setRgDataEmissao] = useState('')
    const [RgEstadoEmissor, setRgEstadoEmissor] = useState('')
    const [RgOrgaoEmissor, setRgOrgaoEmissor] = useState('')
    const [RgNumero, setRgNumero] = useState('')
    const [apiState, setApiState] = useState([{
        id: "",
        text: "",
        value: ""
    }])

    

    //vars
    
    const Investidor = {
        Cpf,
        RgNumero,
        RgOrgaoEmissor,
        RgEstadoEmissor,
        RgDataEmissao, 
    }

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

    //validate functions

    const validateDate = () => {
        let valid = false
        let regex = new RegExp("^([0-9]{2})/([0-9]{2})/([0-9]{4})$")
        let matches = regex.exec(RgDataEmissao)

        if (matches != null) {
            let day = parseInt(matches[1], 10)
            let month = parseInt(matches[2], 10) - 1
            let year = parseInt(matches[3], 10)
            let date = new Date(year, month, day, 0, 0, 0, 0)
            valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day
        }

        if (valid) setValidDate(true)
        else setValidDate(false)
    }

    const validateCpf = () => {
        const CPF = Cpf.replace(/[^\d]+/g, '')

        if (CPF == '') return false

        // Elimina CPFs invalidos conhecidos	
        if (CPF.length != 11 ||
            CPF == "00000000000" ||
            CPF == "11111111111" ||
            CPF == "22222222222" ||
            CPF == "33333333333" ||
            CPF == "44444444444" ||
            CPF == "55555555555" ||
            CPF == "66666666666" ||
            CPF == "77777777777" ||
            CPF == "88888888888" ||
            CPF == "99999999999")
        return false

        // Valida 1o digito	
        let add = 0
        for (let i = 0; i < 9; i++)
            add += parseInt(CPF.charAt(i)) * (10 - i)
        let result = 11 - (add % 11)

        if (result == 10 || result == 11) result = 0

        if (result != parseInt(CPF.charAt(9))) return false

        // Valida 2o digito	
        add = 0
        for (let i = 0; i < 10; i++)
            add += parseInt(CPF.charAt(i)) * (11 - i);
        result = 11 - (add % 11)

        if (result == 10 || result == 11) result = 0

        if (result != parseInt(CPF.charAt(10))) return false

        return true
    }


    //effect

    useEffect(() => {

        setDisabled(!validCpf || !validDate || Cpf === '' || RgDataEmissao === ''||
         RgEstadoEmissor === '' || RgOrgaoEmissor === '' || RgNumero === '')

    }, [validCpf, validDate, Cpf, RgDataEmissao, RgEstadoEmissor, RgOrgaoEmissor, RgNumero ])

    // render

    return (
        <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <SafeAreaView>
                <Label>CPF</Label>
                <TextInputMask
                    type={'cpf'}
                    value={Cpf}
                    onChangeText={value => setCpf(value)}
                    style={Styles.input}
                    onBlur={() => setValidCpf(validateCpf())}
                />
                {
                    !validCpf ? <Error>Você deve inserir um CPF válido</Error>
                        : <View style={{ marginBottom: 30 }}></View>
                }


                <TextInput
                    title={'RG'}
                    onChangeText={value => setRgNumero(value)}
                    value={RgNumero}
                />

                <Label>Data de emissão</Label>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={RgDataEmissao}
                    onChangeText={value => setRgDataEmissao(value)}
                    onBlur={validateDate}
                    style={Styles.input}
                />
                {
                    !validDate ? <Error>Você deve inserir uma data válida</Error>
                        : <View style={{ marginBottom: 30 }}></View>
                }

                <Select
                    title='Orgão emissor'
                    options={opcoesOrgaoEmissor}
                    onValueChange={obj => setRgOrgaoEmissor(obj.value)}
                    value={RgOrgaoEmissor}
                />

                <Select
                    title='Estado de emissão'
                    options={mapApiState()}
                    onValueChange={obj => setRgEstadoEmissor(obj.value)}
                    value={RgEstadoEmissor}
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