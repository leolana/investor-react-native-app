import React, { useState, useEffect } from 'react'

import { tealish } from '../../assets/colors.js'

import {
    SafeAreaView,
    Title,
    Text,
    Note,
    Logo,
    Button,
    ButtonText
} from './styles'

export const FormSuitabilityWelcome = props => {
    const logoSize = 100

    return (
        <SafeAreaView>
            <Logo fill={tealish} width={logoSize} height={logoSize} />

            <Title>Cadastro de Suitability </Title>

            <Text>
            Sua finalidade é definir seu perfil de investidor e, a partir disso, adequá-lo ao melhor tipo de investimento.
            </Text>

            <Note>
                Esse formulário pode levar entre 8 e 10 minutos para ser preenchido e consiste em 4 etapas.
            </Note>

            <Button onPress={() => props.navigation.navigate('SuitabilityOne')}>
                <ButtonText>RESPONDER SUITABILITY</ButtonText>
            </Button>

        </SafeAreaView>
    )
}

export const SuitabilityWelcome = {
    screen: FormSuitabilityWelcome,
}