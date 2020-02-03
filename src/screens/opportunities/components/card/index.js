import React from 'react'

import { 
    Card,
    Header,
    Body,
    Score,
    Container,
    Title,
    Flex5,
    Bold,
    Text,
    Box,
    Buttom,
    Content,
    Subtitle,
    Center,
} from './style'


import { 
    formatCode, 
    formatLoanType, 
    convertScoreByColor,
    formatMoney,
    formatPercent,
    diffDaysForOpportunitie
} from '../../../../utils'

import {
    tealish,
    grey99
} from '../../../../assets/colors'

import {
    CircleWithChild
 
} from '../../../../components'

import { withNavigation } from 'react-navigation'

import { TouchableWithoutFeedback } from 'react-native'

export const OpportunitiesCardComponent = props => {

    const data = props.data.item

    const scoreColor = convertScoreByColor(data.Score)


    const getCaptationPercent = () => {

        const {
            ChamadaListaEspera,
            ValorCaptado,
            Valor
        } = data

        if(ChamadaListaEspera) return 100

        let value = (ValorCaptado / Valor) * 100;

        value = value < 100.00 ? value : 100.00;

        return value.toFixed(2)
    }

    const getOpportunityStatus = () => {

        const {
            FimCaptacao,
            StatusAnalise
        } = data

        const status = diffDaysForOpportunitie(FimCaptacao)

        if(status === "encerrado" || StatusAnalise === "ENCERRADO") return "encerrado"

        return "visualizar"

    }

    const renderScore = () => (<Score> { data.Score } </Score>)

    const getColorByStatus = () => {

        const status = getOpportunityStatus()

        const obj = {
            'encerrado': grey99,
            'visualizar': tealish
        }

        return obj[status]
    }



    return (

        <TouchableWithoutFeedback onPress={ () => props.navigation.navigate('OpportunitieProfile', { data } ) } >

            <Card background={ scoreColor } >
                        
                <Header >

                    <Text> ID #{ formatCode(data.IdOportunidade) } </Text>
                    <Flex5> <Text> { formatLoanType(data.TipoEmprestimo) } </Text> </Flex5>
                    <Text> { data.Prazo } Meses </Text>

                </Header>

                <Body>

                    <CircleWithChild 
                        background={ scoreColor } 
                        child={ renderScore() }
                    />

                    <Container>

                        <Title> { data.Empresa.NomeFantasia } </Title>
                        <Content> valor solicitado: <Bold> { formatMoney(data.Valor) } </Bold> </Content>
                        <Content> Término: <Bold> { diffDaysForOpportunitie(data.FimCaptacao) } </Bold> </Content>
                        <Content> Rendimento: <Bold> { formatPercent(data.Rendimento) } </Bold> </Content>

                    </Container>

                    <Box>

                        <Center>
                            <Subtitle>Captação em { formatPercent(getCaptationPercent()) } </Subtitle>
                        </Center>
                        
                        <Buttom 
                            onPress={ () => props.navigation.navigate('OpportunitieProfile', { data } ) }
                            background={ getColorByStatus() } 
                            title={ getOpportunityStatus() } 
                            fontSize={ 11 } 
                            height={ 25 }
                        />
                        
                    </Box>

                </Body>
            </Card>

        </TouchableWithoutFeedback>
        
    )
}


export const OpportunitiesCard = withNavigation(OpportunitiesCardComponent)