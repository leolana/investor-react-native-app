import React, { useState, useEffect } from 'react'


import { FlatList, SafeAreaView } from 'react-native'

import {
    CardHistory,
} from './components'


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
                data={historyList}
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