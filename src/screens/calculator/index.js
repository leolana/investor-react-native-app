import React from 'react'

import  {
    SafeAreaView,
    Title,
    ItemTitle,
    ItemText,
    InfoCard,
    InfoText

} from './styles'

import {
    CardInput,
    TabBar

} from './components'


export const CalculatorComponent = props =>  {

    const tabs = ['IOUU', 'Poupança', 'CDB', 'Tesouro Direto']


    const onDataChange = (value, year) => {
        
    }

    const onSelectedTabChange = selectedTab => {


    }


    return (
        <SafeAreaView>
            <Title>Simulação em números</Title>
            
            <CardInput onChange={onDataChange} />

            <TabBar 
                onChange={onSelectedTabChange}
                value="IOUU"
                tabs={tabs}
            
            />

            <ItemTitle>Em um ano você terá na IOUU aproximadamente</ItemTitle>
            <ItemText>R$ 12.238,00</ItemText>

            <ItemTitle>Na IOUU seu dinheiro renderá em um ano aproximadamente</ItemTitle>
            <ItemText>R$ 12.238,00</ItemText>

            <InfoCard>

                <InfoText>
                    (1) Todas as Taxas são Brutas (antes do desconto do Imposto de Renda). 
                    Apenas a poupança é isenta de IR. 
                    (2) Considerando a taxa média de retorno atual (Dezembro/2018) de 28,36% ao ano da plataforma IOUU e o reinvestimento das parcelas recebidas quando atingem o mínimo de R$ 500,00. 
                    (3) Tesouro 100% Selic (LFT) - Fonte: http://tesouro.fazenda.gov.br/tesouro-direto-precos-e-taxas-dos-titulos. Consultado em 07/01/2019. (4) CDB de 110% do CDI (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil. (5) Poupança - (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil.
                </InfoText>

            </InfoCard>

        </SafeAreaView>
    )

}

export const Calculator = {
    screen: CalculatorComponent,
    navigationOptions: {
        headerTitle: "Calculadora"
    }
}