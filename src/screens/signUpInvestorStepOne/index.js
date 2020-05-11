import React, { useState, useEffect } from 'react'

import {
    SafeAreaView,
    Button,
    ButtonText
} from './styles'

import {
    Select
} from '../../components'

export const SignUpInvestorStepOneComponent = props => {
    // states

    const [ Sexo, setSexo ] = useState('')

    const [ Nacionalidade, setNationalidade ] = useState('')

    const [ disabled, setDisabled ] = useState(true)

    // vars

    const Investidor = {
        Sexo,
        Nacionalidade
    }

    const optionsGender = [
        { text: 'Masculino', value: 1 },
        { text: 'Feminino',  value: 2 },
    ]

    const optionsNationality = [
        { text: 'Brasileiro (a) Nato (a)', value: 1 },
        { text: 'Brasileiro (a) Naturalizado (a)',  value: 2 },
        { text: 'Estrangeiro (a)',  value: 3 },
    ]

    // effect

    useEffect(() => {

        setDisabled(Nacionalidade === '' || Sexo === '')

    }, [Nacionalidade, Sexo])

    // render

    return (
        <SafeAreaView>

            <Select 
                title="Sexo"
                options={optionsGender}
                onValueChange={ obj => setSexo(obj.value)}
                value={Sexo}
            />

            <Select 
                title="Nacionalidade"
                options={optionsNationality}
                onValueChange={ obj => setNationalidade(obj.value)}
                value={Nacionalidade}
            />

            <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepTwo')}>
                <ButtonText>Continuar</ButtonText>
            </Button>


        </SafeAreaView>
    )
}

export const SignUpInvestorStepOne = {
    screen: SignUpInvestorStepOneComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}