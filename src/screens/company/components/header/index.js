import React from 'react'


import {
    Retangle,
    TinyTitle,
    TinyText,
    Title,
    Text,
    IconArea,
} from './styles'

import {
    ContentArea
} from '../../styles'


import {
    IconVideo,
    IconPhoto,
} from '../../../../assets/icons'

import { 
    tealish,
} from '../../../../assets/colors'



export const Header = props => {


    return (
        <>
            <Retangle>

                <IconArea>
                    <IconPhoto fill={tealish} width={24} height={24}  />
                    <TinyTitle>Fotos</TinyTitle>
                </IconArea>

                <TinyText>7 fotos</TinyText>

            </Retangle>

            <Retangle>

                <IconArea>
                    <IconVideo fill={tealish} width={24} height={24}  />
                    <TinyTitle>Vídios</TinyTitle>
                </IconArea>

                <TinyText>7 fotos</TinyText>

            </Retangle>

            <Title>Descrição breve sobre a empresa</Title>

            <ContentArea>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </Text>


            </ContentArea>
        </>

    )
}
