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

    const isAvailableToInvest = useSelector( ({isAvailableToInvest}) => isAvailableToInvest)

    const data = props.navigation.getParam('data', null)


    // Methods

    const investorHasInvestment = () => {

        const statusDate = diffDaysForOpportunitie(solData.FimCaptacao)

        const status = solData.StatusAnalise

        const isEnded = (status == 'ENCERRADO' || statusDate == "encerrado")

        const hasReserve = (reserveData != null)

        if(isEnded && hasReserve) return true

        else if(hasReserve) return false

        else return false

    }

    const investorIsAvailable = () => {

        const hasInvestment = investorHasInvestment()

        console.log(isAvailableToInvest)

        if ( isAvailableToInvest && hasInvestment ) return true

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
            <SafeAreaView>

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

            <Toolbar data={solData} reserveData={reserveData} />
            
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