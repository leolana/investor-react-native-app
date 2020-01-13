import React from 'react'

import { withNavigation } from 'react-navigation'

import {
    Text,
    Button,
    IconCoinStyled,
    ButtonsArea,
} from './styles'

export const WalletBodyComponent = props => (
    <ButtonsArea>

        <Button onPress={ () => {} } >

            <>

                <IconCoinStyled width={ 24 } height={ 24 }  />
                <Text> REINVESTIR </Text>

            </>

        </Button>


        <Button onPress={ () => props.navigation.navigate('TransferFunds') } >

            <Text> TRANSFERIR PARA MINHA CONTA </Text>

        </Button>
    </ButtonsArea>
)

export const WalletBody = withNavigation(WalletBodyComponent)
