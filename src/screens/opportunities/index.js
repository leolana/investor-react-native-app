import React, { useState, useEffect } from 'react'

import { 
    Request,
    UrlListaOportunidades

} from '../../services'

import { FlatList } from 'react-native-gesture-handler'

import { ActivityIndicator } from 'react-native'

import { LoadingContainer, SafeAreaView } from './styles'

import { OpportunitiesCard } from './components'

export const PageOpportunities = props => {

    const [ opportunities, setOpportunities ] = useState([])

    const [ page, setPage ] = useState(1)

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
    
        loadOpportunities()


    }, [])

    const requestSuccessful = ( { ItemListagemSolicitacoes } ) => {

        setOpportunities([...opportunities, ...ItemListagemSolicitacoes ])

        setLoading(false)

        setPage( page + 1 )
        
    }

    const loadOpportunities = (score = 'A-B-C-D-E-HR') => {

        if(loading) return

        setLoading(true)

        const config = { url: UrlListaOportunidades(page, score), header: 'bearer' }

        Request.GET(config).then( resp => {

            requestSuccessful(resp.data)
        } )


    }

    const renderItem = item => (<OpportunitiesCard data={item}/>)

    const renderFooter = () => {

        if (!loading) return null

        return (
            <LoadingContainer>
                <ActivityIndicator />
            </LoadingContainer>
        )
    }

    return (

        <SafeAreaView>

            <FlatList
                data={opportunities}
                renderItem={renderItem}
                ListFooterComponent={ renderFooter }
                keyExtractor={ item => item._id }
                onEndReached={ loadOpportunities } 
                onEndReachedThreshold={ 0.1 }
            />

        </SafeAreaView>
    )

}

export const Opportunities = {
    screen: PageOpportunities,
    navigationOptions: {
        headerTitle: "OPORTUNIDADES"
    }
}
