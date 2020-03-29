import React, { useState } from 'react';

import { View } from 'react-native'

import { RadioButton, Text } from 'react-native-paper'

import {
    SafeAreaView,
    ScrollView,
    Title,
    Question,
    Options,
    // Text,
    Button,
} from './styles'

export const FormSuitabilityOne = props => {
    return (
        <SafeAreaView>
            <ScrollView >
                <Title>
                </Title>

                


            </ScrollView>
        </SafeAreaView>
    )
}

export const SuitabilityOne = {
    screen: FormSuitabilityOne,
    navigationOptions: {
        headerTitle: "Etapa 1"
    }
}