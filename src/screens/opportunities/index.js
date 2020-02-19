import React, { useState, useEffect } from 'react'

import { 
    Request,
    UrlListaOportunidades

} from '../../services'

import { 
    ActivityIndicator, 
    TouchableOpacity,
    FlatList

} from 'react-native'

import { 
    LoadingContainer, 
    SafeAreaView,
    Filter
} from './styles'

import { 
    OpportunitiesCard

} from './components'

import { MessageBox } from '../../components'

export const PageOpportunities = props => {

    // props

    const { navigation } = props

    // states

    const [ opportunities, setOpportunities ] = useState([])

    const [ page, setPage ] = useState(1)

    const [ pageTotal, setPageTotal ] = useState(1)

    const [ loading, setLoading ] = useState(false)

    // vars

    const filter = navigation.getParam('filter', 'A-B-C-D-E-HR')

    // methods

    const loadOpportunities = async () => {

        if(page > pageTotal) return 

        if(loading) return
        
        setLoading(true)

        const resp = await Request.GET({ url: UrlListaOportunidades(page, filter), header: 'bearer' })

        if(resp.status === 200) {

            setPageTotal(resp.data.Paginas)

            setOpportunities([...opportunities, ...resp.data.ItemListagemSolicitacoes ])

            setPage( page + 1 )
        
        }

        else {
            
            navigation.setParams({'filter': 'A-B-C-D-E-HR'})

            alert('Nenhuma oportunidade foi encontrada. 2')
        }

        setLoading(false)

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

    // effects

    useEffect(() => {

        setPage(1)

        setOpportunities([])

    }, [filter])

    useEffect(() => {

        if(opportunities.length > 0) return

        loadOpportunities()

    }, [opportunities])

    // render

    return (

        <SafeAreaView>

            <MessageBox />

            <FlatList
                data={opportunities}
                renderItem={renderItem}
                ListFooterComponent={ renderFooter }
                onEndReached={ loadOpportunities }
                keyExtractor={ item => item._id }
                onEndReachedThreshold={ 0.1 }
            />

        </SafeAreaView>
    )

}

export const Opportunities = {
    screen: PageOpportunities,
    navigationOptions: ({ navigation }) => {

        const params = { 
            data: [
                { text: 'AA', value: 'AA' },
                { text: 'A',  value: 'A' },
                { text: 'B',  value: 'B' },
                { text: 'C',  value: 'C' },
                { text: 'D',  value: 'D' },
                { text: 'E',  value: 'E' },
                { text: 'HR',  value: 'HR' },
                { text: 'Todos',  value: 'A-B-C-D-E-HR' },
            ],
            onValueChange: value => navigation.setParams({'filter': value}),
            value: navigation.getParam('filter', 'A-B-C-D-E-HR')
        }

        return {
            headerTitle: "Oportunidades",
            headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Picker', params) }>
                    <Filter />
                </TouchableOpacity>
            )
        }
    }
}
