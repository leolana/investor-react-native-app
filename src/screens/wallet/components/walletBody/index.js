import React from 'react'

import {
    Text,
    Button,
    IconCashStyled,
    IconCoinStyled,
    ButtonsArea,
} from './styles'

export const WalletBody = props => (
    <ButtonsArea>
        <Button onPress={ () => {} } >

            <IconCashStyled width={ 24 } height={ 24 }  />
            <Text> ADICIONAR FUNDOS </Text>

        </Button>

        <Button onPress={ () => {} } >

            <IconCoinStyled width={ 24 } height={ 24 }  />
            <Text> REINVESTIR </Text>

        </Button>


        <Button onPress={ () => {} } >

            <Text> TRANSFERIR PARA MINHA CONTA </Text>

        </Button>
    </ButtonsArea>
)
