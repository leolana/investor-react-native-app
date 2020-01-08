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
} from './components'

import {
    Request,
    UrlCarteiraPegar,
    UrlInfoInvLista,
    UrlCarteiraEmprestimoPegar

} from '../../services'





export const PageWallet = props => {


    let investidorId = null


    // State

    const [ walletData, SetWalletData ] = useState(null)

    const [ invData, setInvData ] = useState(null)

    const [ historicData, setHistoricData ] = useState(null)


    // Methods

    const getWalletHistoric = async () => {

        const resp = await Request.GET( { url: UrlCarteiraEmprestimoPegar(investidorId, 1) } )

        setHistoricData(resp.data)

    }

    const getWallet = async () => {
        
        const resp = await Request.GET( { url: UrlCarteiraPegar } )

        SetWalletData(resp.data)

    }

    const getInvestmentInformations = async () => {

        const resp = await Request.GET( { url: UrlInfoInvLista } )

        investidorId = resp.data[0].InvestidorId
            
        setInvData(resp.data)

    }


    // Effect

    useEffect(() => {

        const fetchData = async () => {

            await getWallet()

            await getInvestmentInformations()

            await getWalletHistoric()

        }

        fetchData()

    }, [] )




    // Render

    return (
        <View>

            <SafeAreaHeader>
                <Header colors={ [ tealish, greenishBlue ] }>
                    
                    <WalletHeaderBackground />

                    <WalletHeader 
                        walletData={ walletData }
                        invData={ invData } 
                    />

                </Header>

                <WalletBody />

            </SafeAreaHeader>


            <WalletFooter 
                historicData={ historicData }
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