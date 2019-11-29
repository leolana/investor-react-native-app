import React from 'react'

import { 
    ViewCard,
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

export default App = ( props ) => {

    const data = props.data.item

    return (
        <ViewCard style={ { backgroundColor: '#ddd' } }>
            
            <Header >

                <Text> ID: # { data.IdOportunidade } </Text>
                <Flex5> <Text> { data.TipoEmprestimo } </Text> </Flex5>
                <Text> { data.Prazo } </Text>

            </Header>

            <Body>

                <Circle style={ { backgroundColor: '#ddd' } } >

                    <Score> { data.Score } </Score>

                </Circle>

                <Container>

                    <Title> { data.Empresa.NomeFantasia } </Title>
                    <Content> valor solicitado: <Bold> { data.Valor } </Bold> </Content>
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
        </ViewCard>
        
    )
}