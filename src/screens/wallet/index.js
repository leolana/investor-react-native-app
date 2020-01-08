import React, { useState, useEffect } from 'react'

import {
    View,
    Header,
    SafeAreaHeader,
} from './styles'


import {
    tealish,
    greenishBlue

} from '../../assets/colors'

import {
    WalletHeaderBackground,
    WalletHeader,
    WalletBody,
    WalletFooter,
    WalletSheetModal,
} from './components'

import {
    Request,
    UrlCarteiraExtratoPaginado

} from '../../services'

import {
    ScrollView
} from 'react-native-gesture-handler'






export const PageWallet = props => {


    // State

    const [ walletData, SetWalletData ] = useState(null)


    // Methods

    const getWallet = async () => {
        
        const resp = await Request.GET( { url: UrlCarteiraExtratoPaginado(1), header: 'bearer' } )

        SetWalletData(resp.data)

    }


    // Effect

    useEffect(() => {
        async function fetchData() {
            await getWallet()
        }

        fetchData()
    }, [] )




    // Render

    return (
        <ScrollView>

            <View>

                <SafeAreaHeader>
                    <Header colors={ [ tealish, greenishBlue ] }>
                        
                        <WalletHeaderBackground />

                        <WalletHeader walletData={ walletData } />

                    </Header>

                    <WalletBody />

                </SafeAreaHeader>


                <WalletFooter walletData={ walletData } />

            </View>
            
        </ScrollView>


    )
}

export const Wallet = {
    screen: PageWallet,
    navigationOptions: {
        headerTitle: "CARTEIRA"
    }
}

export * from './components/walletSheetModal'