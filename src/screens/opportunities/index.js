import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Card from './components/card/index.js'

import { Request, STATUS_OK } from '../../services/requests/index.js'

import { ListaOportunidades } from '../../services/urls/index.js'

import { FlatList } from 'react-native-gesture-handler'

import { SafeAreaView, View, ActivityIndicator } from 'react-native'

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    data: state.auth.data
});


const App = (props) => {


    const [ opportunities, setOpportunities ] = useState([])

    const [ page, setPage ] = useState(1)

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {

        loadOpportunities()

    }, [])

    const loadOpportunities = async (score = 'A-B-C-D-E-HR') => {

        if(loading) return

        setLoading(true)

        const config = { url: ListaOportunidades(page, score), header: 'bearer' }

        const { status, data } = await Request.GET(config);

        if (status === STATUS_OK) orderByOpportunities(data)

        console.log('Opportunities response -> ', status, data)

    }

    const orderByOpportunities = ( { ItemListagemSolicitacoes } ) => {

        setOpportunities([...opportunities, ...ItemListagemSolicitacoes ])

        setLoading(false)

        setPage( page + 1 )
        
    }

    renderItem = item => (<Card data={item}/>)

    renderFooter = () => {

        if (!loading) return null

        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <SafeAreaView>

            <FlatList style={ { padding: 10 } }
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

export default connect(mapStateToProps)(App);