import React from 'react'

import  {
    SafeAreaView,
    Title

} from './styles'

import {
    CardInput
} from './components'


export const CalculatorComponent = props =>  {


    const onDataChange = (value, year) => {
        
    }


    return (
        <SafeAreaView>
            <Title>Simulação em números</Title>
            

            <CardInput onChange={onDataChange} />

        </SafeAreaView>
    )

}

export const Calculator = {
    screen: CalculatorComponent,
    navigationOptions: {
        headerTitle: "Calculadora"
    }
}