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


export const PageHistory = props => {

    const [ historyList, setHistoryList ] = useState([])

    useEffect( () => loadHistory(), [] )


    const loadHistory = () => {

        const config = { url: UrlInfoInvLista }

        Request.GET( config ).then( resp => setHistoryList(resp.data) )

    }


    const renderHistoryCard = data => (<CardHistory data={ data.item } />)


    return (
        <SafeAreaView>
            <FlatList
                data={historyList.reverse()}
                renderItem={renderHistoryCard}
                keyExtractor={ item => item.id }
            />

        </SafeAreaView>
    )
}


export const History = {
    screen: PageHistory,
    navigationOptions: {
        headerTitle: "HISTÓRICO"
    }
}