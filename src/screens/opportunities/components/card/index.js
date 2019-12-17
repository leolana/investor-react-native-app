import React from 'react'

import { 
    Card,
    Header,
    Body,
    Circle,
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
} from './style.js'

import { 
    formatCode, 
    formatLoanType, 
    convertScoreByColor,
    formatMoney,
    formatPercent,
    diffDays
} from '../../../../utils'

import {
    tealish,
    grey99
} from '../../../../assets/colors'

export default App = ( props ) => {

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

        const status = diffDays(FimCaptacao)

        if(status === "encerrado" || StatusAnalise === "ENCERRADO") return "encerrado"

        return "visualizar"

    }

    const getColorByStatus = () => {

        const status = getOpportunityStatus()

        const obj = {
            'encerrado': grey99,
            'visualizar': tealish
        }

        return obj[status]
    }



    return (
        <Card background={ scoreColor }>
            
            <Header >

                <Text> ID: #{ formatCode(data.IdOportunidade) } </Text>
                <Flex5> <Text> { formatLoanType(data.TipoEmprestimo) } </Text> </Flex5>
                <Text> { data.Prazo } Meses </Text>

            </Header>

            <Body>

                <Circle background={ scoreColor } >

                    <Score> { data.Score } </Score>

                </Circle>

                <Container>

                    <Title> { data.Empresa.NomeFantasia } </Title>
                    <Content> valor solicitado: <Bold> { formatMoney(data.Valor) } </Bold> </Content>
                    <Content> Término: <Bold> { diffDays(data.FimCaptacao) } </Bold> </Content>
                    <Content> Rendimento: <Bold> { formatPercent(data.Rendimento) } </Bold> </Content>

                </Container>

                <Box>

                    <Center>
                        <Subtitle>Captação em { formatPercent(getCaptationPercent()) } </Subtitle>
                    </Center>
                    
                    <Buttom 
                        background={ getColorByStatus() } 
                        title={ getOpportunityStatus() } 
                        fontSize={ 11 } 
                        height={ 25 }
                    />
                    
                </Box>

            </Body>
        </Card>
        
    )
}