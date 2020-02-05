import React from 'react'

import {
    Container,
    Row,
    Title,
    Arrow,
    Content,
    ItemText,
    ItemTitle,
    Item,
    InfoText,
    Circle
} from './styles'

import {
    tealish,
    white,
    greyDD,
    greyEE,
    lightGreen,
    lightRed,
    lightYellow
} from '../../../../assets/colors'

import { FlatList } from 'react-native'

import { formatMoney } from '../../../../utils'

export const Card = props => {

    // props

    const { data } = props

    // methods

    const getColorByStatus = status => {

        const obj = {
            'Verde': lightGreen,
            'Amarelo': lightYellow,
            'Vermelho': lightRed,
        }

        return obj[status]
    }

    const renderItem = item => (
        <>
            <Content>
                <ItemText>{item.Tipo}</ItemText>

                <Row>
                    <Item colors={[white, greyDD]}>
                        <ItemTitle>2016</ItemTitle>
                        <ItemText>{formatMoney(item.ValorAno1)}</ItemText>
                    </Item>
                    <Item colors={[white, greyDD]}>
                        <ItemTitle>2016</ItemTitle>
                        <ItemText>{formatMoney(item.ValorAno2)}</ItemText>
                    </Item>
                </Row>
                    
            </Content>

            <Content marginTop="1" background={greyEE}>
                <Circle background={getColorByStatus(item.Status)}/>
                <InfoText>
                    {item.Descricao}
                </InfoText>
            </Content>

        </>
    )

    return (
        <Container>
            <Row>
                <Arrow stroke={tealish}/>
                <Title>{data.Name}</Title>
            </Row>
            

            <FlatList 
                data={data.List}
                renderItem={ ({item}) => renderItem(item)}
                key={ item => item.index}
            
            />

        </Container>
    )
}