import React, { useState, useEffect } from 'react'
import Card from './components/card/index.js'

import { 
    Request,
    UrlListaOportunidades

} from '../../services'


import { FlatList } from 'react-native-gesture-handler'

import { SafeAreaView, ActivityIndicator } from 'react-native'

import { LoadingContainer } from './styles'

export default App = props => {

    const [ opportunities, setOpportunities ] = useState([])

    const [ page, setPage ] = useState(1)

    const [ loading, setLoading ] = useState(false)

    useEffect(() => 
        
    
        loadOpportunities()
        
    , [])

    const requestSuccessful = ( { ItemListagemSolicitacoes } ) => {

        setOpportunities([...opportunities, ...ItemListagemSolicitacoes ])

        setLoading(false)

        setPage( page + 1 )
        
    }

    const loadOpportunities = async (score = 'A-B-C-D-E-HR') => {

        if(loading) return

        setLoading(true)

        const config = { url: UrlListaOportunidades(page, score), header: 'bearer' }

        const resp = await Request.GET(config)

        if (resp.status === 200) requestSuccessful(resp.data)

    }

    const renderItem = item => (<Card data={item}/>)

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
                keyExtractor={ item => item.index }
                onEndReached={ loadOpportunities } 
                onEndReachedThreshold={ 0.1 }
            />

        </SafeAreaView>
    )

}