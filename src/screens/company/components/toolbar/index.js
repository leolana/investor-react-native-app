import React from 'react'

import {
    BottomToolbar,
    ToolbarTitle,
    ToolbarText,
    ToolbarButtom,
    ToolbarButtomText,
    Container,
} from './styles'

import {
    Item
} from '../../styles'


export const Toolbar = props => {

    return (
        <Container>
            <BottomToolbar>

                <Item>
                    <ToolbarTitle>Rendimento</ToolbarTitle>
                    <ToolbarText>000% CDI</ToolbarText>
                </Item>

                <ToolbarButtom>
                    <ToolbarButtomText>INVESTIR</ToolbarButtomText>
                </ToolbarButtom>


            </BottomToolbar>

        </Container>
    )
}