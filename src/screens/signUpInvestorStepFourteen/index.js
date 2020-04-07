import React, { useState, useEffect } from 'react'

import { TouchableOpacity } from 'react-native'

import { white } from '../../assets/colors.js'

import {
    SafeAreaView,
    Title,
    Text,
    Note,
    TextOpportunities,
    TextSuitability,
    Logo,
} from './styles'

export const SignUpInvestorStepFourteenComponent = props => {
    return (
        <SafeAreaView>
             <Logo fill={ white } width={120} height={120} />

            <Title>Cadastro concluído com sucesso</Title>

            <Text>
                Agora, farermos uma análise e em até 24 horas você receberá uma resposta.
            </Text>

            <Note>
                Ah, não esqueça de preencher o formulário de suitability, ele é muito importante para mapear o seu perfil de
                investimetno e indicamos os produstos, serviçoes e operações mais adequadas às suas necessidades.
                </Note>

            <TouchableOpacity onPress={() => props.navigation.navigate('SuitabilityOne')}>
                <TextSuitability>PREENCHER O SUITABILITY</TextSuitability>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Opportunities')}>
                <TextOpportunities>VER OPORTUNIDADES</TextOpportunities>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

export const SignUpInvestorStepFourteen = {
    screen: SignUpInvestorStepFourteenComponent,
    navigationOptions: {
        headerTitle: "Cadastro de Investidor"
    }
}