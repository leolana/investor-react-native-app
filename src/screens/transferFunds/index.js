import React, { useState } from 'react'


import {
    tealish,
    greenishBlue

} from '../../assets/colors'

import {
    SafeAreaView,
    Header,
    HeaderTitle,
    HeaderText,
    CardPage,
    IconAddFundsStyled,
} from './styles'

import {
    CardAddValue,
    CardAddDate,
    CardConfirm,
} from './components'

export const TransferFundsPopup = props => {

    // State

    const [ index, setIndex ] = useState(0)


    // Methods

    const renderCard = () => {

        if(index === 0 ) return (
            <CardAddValue onPress={ () => setIndex(1) } index={ index } /> 
        )

        else if(index === 1) return (
            <CardAddDate onPress={ () => setIndex(2) } index={ index } />
        )

        else if(index === 2) return (
            <CardConfirm onPress={ () => setIndex(1) } index={ index }/>
        )


    }


    // Render


    return(
        <SafeAreaView> 

            <Header colors={ [ tealish, greenishBlue ] }>

                <HeaderTitle>Valor disponível para saque</HeaderTitle>
                <HeaderText>R$ 10.000,00</HeaderText>


            </Header>

            <CardPage>

                <IconAddFundsStyled />

                {renderCard()}

            </CardPage>



        </SafeAreaView>
    )

}


export const TransferFunds = {
    screen: TransferFundsPopup,
    navigationOptions: {
        headerTitle: "TRANSFERIR",
    }
}