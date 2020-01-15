import React, { useState, useEffect } from 'react'

import {
    useSelector
} from 'react-redux'


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

import {
    Request,
    UrlCarteiraSaldo,
    UrlCarteiraBancoPegar,
    UrlInvPegar
} from '../../services'

import {
    formatMoney
} from '../../utils'

export const TransferFundsPopup = props => {

    // State

    const [ index, setIndex ] = useState(0)

    const [ walletFunds, setWalletFunds ] = useState(0)

    const [ bankData, setBankData ] = useState(null)

    const [ valueToTransfer, setValueToTransfer ] = useState(null)

    const [ dateToTransfer, setDateToTransfer ] = useState(null)

    const userData = useSelector( ({userData}) => userData )

    // Methods

    const getWalletFunds = async () => {

        const resp = await Request.GET( { url: UrlCarteiraSaldo, header: 'bearer' } )

        if(resp.status === 200) {

            setWalletFunds(resp.data.Saldo)

        }


    }

    const getBankData = async () => {

        const resp = await Request.GET( { url: UrlInvPegar(userData.Email), header: 'bearer' } )

        if(resp.status === 200) {

            if(resp.data.DadosBancarios !== undefined && resp.data.DadosBancarios !== null) {

                setBankData(resp.data.DadosBancarios)
            }

        }


    }

    const getBankName = async () => {

    
        const resp = await Request.GET({ url: UrlCarteiraBancoPegar(bankData.CodigoBanco) })

        if(resp.status === 200) {
            
            const code = bankData.CodigoBanco

            const name = resp.data[0].nome || `Outro - Codigo do banco: ${code}`

            setBankData({ ...bankData, formattedCodigoBanco: name })

        }

    }

    const renderCard = () => {

        if(index === 0 ) return (
            <CardAddValue 
                data={ { bankData, walletFunds } } 
                onPress={ () => setIndex(1) } 
                getInsertedValue={ value => setValueToTransfer(value) }
                index={ index } 
            /> 
        )

        else if(index === 1) return (
            <CardAddDate 
                onPress={ () => setIndex(2) } 
                getInsertedValue={ value => setDateToTransfer(value) }
                index={ index } 
            />
        )

        else if(index === 2) return (
            <CardConfirm 
                data={ { bankData, valueToTransfer, dateToTransfer } } 
                onPress={ () => setIndex(1) } 
                index={ index }
            />
        )


    }

    // Effects

    useEffect( () => {

        if(bankData === null || bankData.formattedCodigoBanco !== undefined) return 

        async function fetchData() {

            await getBankName()

        }

        fetchData()


    }, [bankData]) 

    useEffect( () => {

        async function fetchData() {

            await getWalletFunds()
            await getBankData()

        }

        fetchData()


    }, []) 


    // Render


    return(
        <SafeAreaView> 

            <Header colors={ [ tealish, greenishBlue ] }>

                <HeaderTitle>Valor disponível para saque</HeaderTitle>
                <HeaderText>{formatMoney(walletFunds)}</HeaderText>


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