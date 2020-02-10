import React, { useState, useEffect } from 'react'


import { FlatList } from 'react-native'

import {
    CardHistory,
} from './components'

import {
    SafeAreaView
} from './styles'


import { 
    Request,
    UrlInfoInvLista

} from '../../services'

import {
    Loading
} from  '../../components'


export const HistoricComponent = props => {

    const [ historyList, setHistoryList ] = useState([])

    useEffect( () => loadHistory(), [] )


    const loadHistory = () => {

        const config = { url: UrlInfoInvLista }

        Request.GET( config ).then( resp => setHistoryList(resp.data) )

    }


    const renderHistoryCard = data => (<CardHistory data={ data.item } />)


    return (
        <Loading loading={historyList.length === 0} >
            <SafeAreaView>

                <FlatList
                    data={historyList.reverse()}
                    renderItem={renderHistoryCard}
                    key={ item => item.id }
                />

            </SafeAreaView>
            
        </Loading>
    )
}


export const Historic = {
    screen: HistoricComponent,
    navigationOptions: {
        headerTitle: "Histórico"
    }
}

