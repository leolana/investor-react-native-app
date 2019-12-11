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
    Button,
    ButtonText,
    Content,
    Subtitle,
} from './style.js'

import { 
    formatCode, 
    formatLoanType, 
    getColorByScoreType,
    formatMoney
} from '../../../../utils'

export default App = ( props ) => {

    const data = props.data.item

    const scoreColor = getColorByScoreType(data.Score)

    return (
        <Card background={scoreColor}>
            
            <Header >

                <Text> ID: #{ formatCode(data.IdOportunidade) } </Text>
                <Flex5> <Text> { formatLoanType(data.TipoEmprestimo) } </Text> </Flex5>
                <Text> { data.Prazo } Meses </Text>

            </Header>

            <Body>

                <Circle background={scoreColor} >

                    <Score> { data.Score } </Score>

                </Circle>

                <Container>

                    <Title> { data.Empresa.NomeFantasia } </Title>
                    <Content> valor solicitado: <Bold> { formatMoney(data.Valor) } </Bold> </Content>
                    <Content> Término: <Bold> { data.FimCaptacao } </Bold> </Content>
                    <Content> Rendimento: <Bold> { data.Rendimento } </Bold> </Content>

                </Container>

                <Box>

                    <Subtitle>Captação em 100.00%</Subtitle>
                    <Button style={ { backgroundColor: 'red' } } >
                        <ButtonText> VISUALIZAR </ButtonText>
                    </Button>
                    
                </Box>

            </Body>
        </Card>
        
    )
}