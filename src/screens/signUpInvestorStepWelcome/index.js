import React, { useState, useEffect } from 'react'

import { View } from 'react-native'

import { tealish } from '../../assets/colors'
import {
    SafeAreaView,
    Title,
    Text,
    Note,
    Logo,
    Button,
    ButtonText
} from './styles'


export const SignUpInvestorStepWelcomeComponent = props => {

    const logoSize = 100

    return (
        <SafeAreaView>
            <Logo fill={tealish} width={logoSize} height={logoSize} />

            <View>
                <Title>Queremos dar as boas-vindas! </Title>

                <Text>
                    Agora precisamos de algumas informações para continuar seu cadastro de investidor!
            </Text>

                <Note>
                    Esse formulário pode levar entre 10 e 15 minutos para ser preenchido e consiste em 14 etapas.
            </Note>

                <Button onPress={() => props.navigation.navigate('SignUpInvestorStepOne')}>
                    <ButtonText>CONTINUAR CADASTRO</ButtonText>
                </Button>
            </View>


        </SafeAreaView>
    )
}

export const SignUpInvestorStepWelcome = {
    screen: SignUpInvestorStepWelcomeComponent,
    // navigationOptions: {
    //     headerTitle: "Iniciar cadastro"
    // }
}