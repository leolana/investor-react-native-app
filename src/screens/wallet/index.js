import React, { useState } from 'react'




import {
    View,
    Header,
    Text,
    SafeAreaHeader,
    Button,
    IconCashStyled,
    IconCoinStyled,
    ButtonsArea,
    IconWalletCashStyled,
    Item,
    ItemTitle,
    ItemText,
    ItemArea,
    ItemRight,
    TitleDivisor,
    Divisor,


} from './styles'

import {
    SheetDialog,
} from '../../components'

import {
    tealish,
    greenishBlue

} from '../../assets/colors'






export const PageWallet = props => {

    const [ showSheetDialog, setShowSheetDialog ] = useState(false)

    const onStateVisibleChanged = isVisible => setShowSheetDialog(isVisible)


    const renderBackgroundHeader = () => (
        <>
            <IconWalletCashStyled x={ 280 } y={ -45 } width={ 80 } height={ 80 } />

            <IconWalletCashStyled x={ 225 } y={ 20 } width={ 70 } height={ 70 } />

            <IconWalletCashStyled x={ 305 } y={ 40 } width={ 80 } height={ 80 } />

            <IconWalletCashStyled x={ 235 } y={ 100 } width={ 80 } height={ 80 } />

            <IconWalletCashStyled x={ 325 } y={ 128 } width={ 70 } height={ 70 } />
        </>
    )

    const renderButtons = () => (
        <>
            <Button onPress={ () => setShowSheetDialog(true) } >

                <IconCashStyled width={ 24 } height={ 24 }  />
                <Text> ADICIONAR FUNDOS </Text>

            </Button>

            <Button onPress={ () => setShowSheetDialog(true) } >

                <IconCoinStyled width={ 24 } height={ 24 }  />
                <Text> REINVESTIR </Text>

            </Button>


            <Button onPress={ () => setShowSheetDialog(true) } >

                <Text> TRANSFERIR PARA MINHA CONTA </Text>

            </Button>
        </>
    )



    return (
        <View>

            <SafeAreaHeader>
                <Header colors={ [ tealish, greenishBlue ] }>
                    
                    { renderBackgroundHeader() }

                    <Item>
                        <ItemTitle>Saldo disponível</ItemTitle>
                        <ItemText fontSize={ 30 } >R$ 10.000,00</ItemText>
                    </Item>

                    <Item>
                        <ItemTitle>A receber</ItemTitle>
                        <ItemText>R$ 10.000,00</ItemText>
                    </Item>

                    <ItemArea>
                        <Item withoutMargim={ true }>
                            <ItemTitle>Pendente</ItemTitle>
                            <ItemText>R$ 10.000,00</ItemText>
                        </Item>

                        <ItemRight >
                            <ItemTitle width={ 100 } textAlign="right" >Estimativa de retorno da carteira</ItemTitle>
                            <ItemText>0.00% a.m.</ItemText>
                        </ItemRight>

                    </ItemArea>

                </Header>

                <ButtonsArea>

                    { renderButtons() }

                </ButtonsArea>



            </SafeAreaHeader>

            <Divisor>
                <TitleDivisor> Últimas transaçõe4t7es </TitleDivisor>
            </Divisor>

            <SheetDialog 
                isVisible={ showSheetDialog } 
                height={ 500 } 
                onStateVisibleChanged={ onStateVisibleChanged }
                renderChildren={ () => {} }

            />

        </View>

    )
}

export const Wallet = {
    screen: PageWallet,
    navigationOptions: {
        headerTitle: "CARTEIRA"
    }
}