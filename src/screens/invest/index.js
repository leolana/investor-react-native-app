import React from 'react'


import {
    SafeAreaView,
    Item,
    Title,
    Score,
    ScrollView,
    Subtitle,
    Retangle,
    Text,
    Divisor,
    ItemTitle,
    ItemText,
    ItemWithDivisor,
    ItemWithoutDivisor,
    ProgressArea,
    ProgressHeader,
    ProgressTitle,
    ProgressText,
    ProgressBar,
    ProgressIndicator,
    Progress,
    TextInfo,
    InputTitle,
} from './styles'

import {
    tealish, 
    grey99,
    grey66
} from '../../assets/colors'

import {
    CircleWithChild
} from '../../components'

import {
    IconInvestor
} from '../../assets/icons'

export const InvestPopup = () => {


    return (
        <SafeAreaView>

            <ScrollView>
                <Item>
                    <Title>IOUU - Marketplace de Crédito</Title>

                    <CircleWithChild 
                        background={tealish} 
                        size={18}
                    />

                    <Score>A1</Score>

                </Item>

                <Item width={200} >
                    
                    <Subtitle bold={true} >ID#00001</Subtitle>

                    <Subtitle>Empréstimo coletivo</Subtitle>

                </Item>

                <Retangle>
                    <Text color={grey99} >Cidade/UF: <Text bold={true} >São Paulo / SP</Text></Text>
                </Retangle>

                <Retangle>
                    <IconInvestor width={20} height={20} />
                    <Text bold={true} >62 <Text>investidores</Text></Text>
                </Retangle>

                <Divisor>

                    <ItemWithDivisor>

                        <ItemTitle>Valor solicitado</ItemTitle>
                        <ItemText>R$ 250.000,00</ItemText>

                    </ItemWithDivisor>

                    <ItemWithoutDivisor>
                        
                        <ItemTitle>Valor solicitado</ItemTitle>
                        <ItemText>R$ 250.000,00</ItemText>

                    </ItemWithoutDivisor>

                </Divisor>

                 <Divisor>

                    <ItemWithDivisor>

                        <ItemTitle>Valor solicitado</ItemTitle>
                        <ItemText>R$ 250.000,00</ItemText>

                    </ItemWithDivisor>

                    <ItemWithoutDivisor>
                        
                        <ItemTitle>Valor solicitado</ItemTitle>
                        <ItemText>R$ 250.000,00</ItemText>

                    </ItemWithoutDivisor>

                </Divisor>

                <ProgressArea>

                    <ProgressHeader>

                        <ProgressTitle>Levantado: 50%</ProgressTitle>

                        <ProgressTitle>Falta: <ProgressText>R$ 250.000,00</ProgressText></ProgressTitle>

        
                    </ProgressHeader>

                    <ProgressBar>
                        <Progress completed={50} />
                        <ProgressIndicator>50%</ProgressIndicator>
                    </ProgressBar>


                </ProgressArea>


                <TextInfo color={grey66} >Início da captação: <TextInfo bold={true} >23 de janeiro, 2018</TextInfo></TextInfo>
                <TextInfo color={grey66} >Expira em: <TextInfo bold={true} >06 de fevereiro, 2018</TextInfo></TextInfo>

                <InputTitle>Valor que deseja investir</InputTitle>




            </ScrollView>


        </SafeAreaView>
    )
}

export const Invest = {
    screen: InvestPopup,
    navigationOptions: {
        headerTitle: "INVESTIR"
    }
}