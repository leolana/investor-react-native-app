import React, { useState, useEffect } from 'react'


import {
    ScrollView,
    SafeAreaView
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
    formatCode
} from '../../utils'

export const CompanyPage = props => {

    // States
    const [ solData, setSolData ] = useState(null)
    const [ reserveData, setReverveData ] =  useState('null')
    const [ loading, setLoading ] = useState(true)

    // Vars

    const data = props.navigation.getParam('data', null)


    // Methods

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
            getSolicitation()
            getInvestmentReserve()
        }

        fetchData()


    }, []) 

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

                    <Footer data={solData} />

                </ScrollView>
                
            </SafeAreaView>

            <Toolbar data={solData} reserveData={reserveData} />
            
        </Loading>

    )
}


export const Company = {
    screen: CompanyPage,
    navigationOptions: ({navigation}) => {

        return {
            headerTitle: navigation.getParam('headerTitle', 'PERFIL DA EMPRESA'),
        }
    }
}