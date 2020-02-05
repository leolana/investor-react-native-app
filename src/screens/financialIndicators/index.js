import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    InfoText,
} from './styles'

import {
    Header,
    Body,
    Footer
} from './components'


export const FinancialIndicatorsComponent = props => {

    // Props

    const {
        navigation
    } = props

    // Vars

    const data = navigation.getParam('data', null)

    // Render

    return (
        <SafeAreaView>
            <ScrollView>

                <Header data={data} />

                <Body data={data} />

                <Footer data={data} />

                <InfoText>
                    <InfoText bold={true}>Observações: </InfoText>
                    Os valores demonstrados e calculados são baseados nas demonstrações contábeis fornecidas pelo solicitante do empréstimo, 
                    sendo essas demonstrações de responsabilidade dos sócios e do contador da empresa.
                </InfoText>

            </ScrollView>
        </SafeAreaView>
    )
}

export const FinancialIndicators = {
    screen: FinancialIndicatorsComponent,
    navigationOptions: {
        headerTitle: "Ìndices financeiros"
    }
}