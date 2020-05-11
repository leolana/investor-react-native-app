import React, { useState, useEffect } from 'react'

import { FlatList } from 'react-native'

import {
    CardHistory,
} from './components'

import {
    SafeAreaView,
    TouchableOpacity
} from './styles'


import { 
    Request,
    UrlInfoInvLista

} from '../../services'

import {
    Loading
} from  '../../components'

import {
    IconFilter
} from '../../assets/icons'


export const HistoricComponent = props => {

    // props

    const { navigation } = props

    // states

    const [ historicList, setHistoricList ] = useState(null)

    const [ loading, setLoading ] = useState(false)

    // vars

    const filter = navigation.getParam('filter', null)

    // methods

    const applyDefaultFilter = list => {

        list = list.filter( ( { SolicitacaoId, Status} ) => !(SolicitacaoId.StatusAnalise == "ENCERRADO" && Status == 2) )

        return list
    }

    const getHistoricList = async () => {

        if(loading) return

        setLoading(true)

        const resp = await Request.GET( { url: UrlInfoInvLista } )

        if(resp.status === 200) setHistoricList( applyDefaultFilter(resp.data).reverse() )

        else alert('Ocorreu um erro ao pegar o histórico de investimento. Tente novamente mais tarde.')

        setLoading(false)

    }

    const applyTypeFilter = list => {

        const { type } = filter

        return list.filter( ( { SolicitacaoId } ) => SolicitacaoId.TipoEmprestimo == type.value )
    }

    const applyDateFromFilter = list => {

        const { dateFrom } = filter

        const date = dateFrom.toISOString()

        return list.filter( ({ Created }) => new Date(Created.split('T')[0]) >= new Date(date.split('T')[0] ) )
    }

    const applyDateToFilter = list => {

        const { dateTo } = filter

        const date = dateTo.toISOString()

        return list.filter( ({ Created }) => new Date(Created.split('T')[0]) >= new Date(date.split('T')[0] ) )
    }

    const applyScoreFilter = list => {

        const { score } = filter

        return list = list.filter( ( { SolicitacaoId } ) => SolicitacaoId.Score == score.value )
    }

    const applyFilter = async () => {

        if(loading) return

        setLoading(true)

        const resp = await Request.GET( { url: UrlInfoInvLista } )

        if(resp.status === 200) setLoading(false)

        else return alert('Ocorreu um erro ao aplicar o filtro. Tente novamente mais tarde.')

        let list = resp.data

        list = applyDefaultFilter(list)

        if(type.value !== '') list = applyTypeFilter(list)

        if(dateFrom != null) list = applyDateFromFilter(list)

        if(dateTo != null) list = applyDateToFilter(list)

        if(score.value != '') list = applyScoreFilter(list)

        setHistoricList(list.reverse())
    }

    const renderHistoryCard = data => (<CardHistory data={ data.item } />)

    // useEffects

    useEffect( () => {

        if(filter === null) return

        applyFilter()

    }, [filter])

    useEffect( () => {

        async function fetchData() {

            await getHistoricList()

        }

        fetchData()

    }, [] )

    // render

    return (
        <Loading loading={loading} >
            <SafeAreaView>

                <FlatList
                    data={historicList}
                    renderItem={renderHistoryCard}
                    key={ item => item.id }
                />

            </SafeAreaView>
            
        </Loading>
    )
}


export const Historic = {
    screen: HistoricComponent,
    navigationOptions: ({ navigation }) => {

        return {
            headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('HistoricFilter')} >
                    <IconFilter />
                </TouchableOpacity>
            ),
            headerTitle: "Histórico"
        }
    }
}
