import React, { useState, useEffect } from 'react'


import {
    ScrollView,
    SafeAreaView,
    Img,
    Message,
    ImgContainer
} from './styles'

import {
    Loading
} from '../../components'


import {
    Header,
    Body,
    Footer,
    Toolbar
} from './components'

import {
    Request,
    UrlSolicitacaoPegar,
    UrlSolicitacaoReservaInvPegar
} from '../../services'

import {
    formatCode,
    diffDaysForOpportunitie
} from '../../utils'

import { useSelector } from 'react-redux'

export const OpportunitieProfileComponent = props => {

    // States
    const [ solData, setSolData ] = useState(null)
    const [ reserveData, setReverveData ] =  useState('null')
    const [ loading, setLoading ] = useState(true)
    const [ isAvailable, setIsAvailable ] = useState(false)
    const [ message, setMessage ] = useState(false)



    // Vars

    const accountData = useSelector( ({accountData}) => accountData)

    const data = props.navigation.getParam('data', null)

    // Methods

    const itsFinished = () => {

        const { FimCaptacao, StatusAnalise } = data

        return (StatusAnalise == 'ENCERRADO' || diffDaysForOpportunitie(FimCaptacao) == "encerrado")
    }

    const getRemainingTime = () => {

        if(itsFinished()) return 0
        
        const date = new Date(data.FimCaptacao);

        const miliSecs = (date.getTime()+ 86400000) - new Date().getTime()

        if(miliSecs > 0) return Number.parseInt(miliSecs/1000/60/60/24)

        else return 0
    }

    const investorHasInvestment = () => {

        const statusDate = diffDaysForOpportunitie(solData.FimCaptacao)

        const status = solData.StatusAnalise

        const isEnded = (status == 'ENCERRADO' || statusDate == "encerrado")

        const hasReserve = (reserveData != null)

        if(isEnded && hasReserve) return true

        else if(hasReserve) return true

        else return false

    }

    const investorIsAvailable = () => {

        const hasInvestment = investorHasInvestment()

        const isAvailableToInvest = (accountData.Status === 'APROVADO')

        if(getRemainingTime() <= 0 && hasInvestment) return true

        else if (getRemainingTime() > 0 && isAvailableToInvest) return true

        else if(!isAvailableToInvest) {

            setMessage('Seu cadastro possui uma aprovação pendente Aguarde a confirmação de nosso pessoal para o acesso.')

            return false
        }

        else {

            setMessage('Dados disponíveis somente para investidores que aportaram nessa oportunidade.')

            return false
        }
    }

    const getSolicitation = async () => {

        const resp = await Request.GET({ url: UrlSolicitacaoPegar(data._id) })

        if(resp.status === 200) {
            setSolData(resp.data)
    
        }


    }

    const getInvestmentReserve = async () => {

        const resp = await Request.GET({ url: UrlSolicitacaoReservaInvPegar(data._id) })
        
        if(resp.status === 200) {

            setReverveData(resp.data)
          
        }
    }


    // Effects

    useEffect( () => {

        async function fetchData() {
            await getSolicitation()
            await getInvestmentReserve()
        }

        fetchData()

    }, []) 

    useEffect( () => {
        
        if(reserveData === 'null' && solData == null) return 
        
        const available = investorIsAvailable()

        setIsAvailable(available)
        



    }, [solData, reserveData] )

    useEffect( () => {
        
        if(reserveData === 'null' || solData === null) return 


        props.navigation.setParams({ headerTitle: `ID #${formatCode(solData.IdOportunidade)}` })


        setLoading(false)

    }, [reserveData, solData]) 

    // Render


    return (

        <Loading loading={loading} >
            <SafeAreaView marginBottom={ isAvailable ? "76" : "0" } >

                <ScrollView>

                    <Header data={solData} />

                    <Body data={solData} />

                    {
                        (isAvailable) ? <Footer data={solData} /> : (
                            <ImgContainer>  

                                <Img
                                    source={require('../../assets/imgs/profile-blocked.png')}
                                />
                                

                                <Message>{message}</Message>

                            </ImgContainer>
                            
                        
                        )
                    }

            

                </ScrollView>
                
            </SafeAreaView>

            {
                (isAvailable) ? <Toolbar data={solData} reserveData={reserveData} /> : null
            }

            
            
        </Loading>

    )
}


export const OpportunitieProfile = {
    screen: OpportunitieProfileComponent,
    navigationOptions: ({navigation}) => {

        return {
            headerTitle: navigation.getParam('headerTitle', 'Oportunidade'),
        }
    }
}