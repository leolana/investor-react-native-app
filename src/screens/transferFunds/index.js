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
    CardAddBalanceToTransfer,
    CardAddDateToTransfer,
    CardConfirmTransfer,
    Loading
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

export const TransferFundsPage = props => {

    // State

    const [ index, setIndex ] = useState(0)

    const [ walletBalance, setWalletBalance ] = useState(0)

    const [ bankData, setBankData ] = useState(null)

    const [ balanceToTransfer, setBalanceToTransfer ] = useState(null)

    const [ dateToTransfer, setDateToTransfer ] = useState(null)

    const [ investorId, setInvestorId ] = useState(null)

    const [ loading, setLoading ] = useState(true)

    const userData = useSelector( ({userData}) => userData )

    // Methods

    const getWalletFunds = async () => {

        const resp = await Request.GET( { url: UrlCarteiraSaldo, header: 'bearer' } )

        if(resp.status === 200) {

            setWalletBalance(resp.data.Saldo)

        }


    }

    const getBankData = async () => {


        const resp = await Request.GET( { url: UrlInvPegar(userData.Email), header: 'bearer' } )

        if(resp.status === 200) {

            if(resp.data.DadosBancarios !== undefined && resp.data.DadosBancarios !== null) {

                setBankData(resp.data.DadosBancarios)
                setInvestorId(resp.data._id)
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

    const handleCard = () => {

        if(index === 0 ) return (
            <CardAddBalanceToTransfer 
                data={ { bankData, walletBalance } } 
                onPress={ () => setIndex(1) } 
                getInsertedValue={ value => setBalanceToTransfer(value) }
                index={ index } 
            /> 
        )

        else if(index === 1) return (
            <CardAddDateToTransfer 
                onPress={ () => setIndex(2) } 
                getInsertedValue={ value => setDateToTransfer(value) }
                index={ index } 
            />
        )

        else if(index === 2) return (
            <CardConfirmTransfer 
                data={ { bankData, balanceToTransfer, dateToTransfer, investorId } } 
                onPress={ () => setIndex(1) } 
                index={ index }
            />
        )


    }


    // Effects

    useEffect( () => {

        async function fetchData() {

            await getWalletFunds()
            await getBankData()

        }

        fetchData()


    }, []) 

    useEffect( () => {

        if(bankData === null || bankData.formattedCodigoBanco !== undefined) return 

        async function fetchData() {

            await getBankName()

        }

        fetchData()


    }, [bankData]) 

    useEffect( () => {

        if(bankData !== null && walletBalance !== null) setLoading(false)

    }, [bankData, walletBalance]) 


    // Render


    return(
    
        <Loading loading={ loading }> 

            <SafeAreaView> 

                <Header colors={ [ tealish, greenishBlue ] }>

                    <HeaderTitle>Valor disponível para saque</HeaderTitle>
                    <HeaderText>{formatMoney(walletBalance)}</HeaderText>


                </Header>

                <CardPage>

                    <IconAddFundsStyled />

                    { handleCard() }

                </CardPage>

            </SafeAreaView>

        </Loading>
    )

}


export const TransferFunds = {
    screen: TransferFundsPage,
    navigationOptions: {
        headerTitle: "TRANSFERIR",
    }
}