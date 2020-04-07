import React, { useState, useEffect } from 'react'

import { TextInputMask } from 'react-native-masked-text'

import {
    Request,
    UrlLocalizacaoEstadosPegar,
    UrlLocalizacaoCidadesPegar

} from '../../services'

import Styles, {
    SafeAreaView,
    Button,
    ButtonText,
    Label
} from './styles'

import {
    Select
} from '../../components'

export const SignUpInvestorStepTwoComponent = props => {
    const [disabled, setDisabled] = useState(false)
    const [birthday, setBirthday] = useState('')
    const [birthState, setBirthState] = useState('')
    const [birthCity, setBirthCity] = useState('')
    const [optionsState, setOptionsState] = useState('')

    // const getStates = async () => {

    //     const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar })

    //     if (resp.status === 200) setOptionsState(resp.data.nome)

    //     else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    // }

    const getCity = async () => {

        const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar('SP') })

        if (resp.status === 200) setOptionsState(resp.data.nome)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }


    return (
        <SafeAreaView>
            <Label>Data de nascimento</Label>
            <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={birthday}
                onChangeText={value => setBirthday(value)}
                style={Styles.input}
            />

            <Select
                title={'Estado de nascimento'}
                options={optionsState}
                onValueChange={obj => setBirthState(obj.value)}
                value={birthState}
            />

            <Select
                title={'Cidade de nascimento'}
                // options={optionsNationality}
                onValueChange={obj => setBirthCity(obj.value)}
                value={birthCity}
            />

            <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepThree')} >
                <ButtonText>Continuar</ButtonText>
            </Button>
        </SafeAreaView>
    )
}

export const SignUpInvestorStepTwo = {
    screen: SignUpInvestorStepTwoComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}