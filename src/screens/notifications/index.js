import React, { useState, useEffect } from 'react'


import {
    Card,
    ContentArea,
    Title,
    Text,
} from './styles'

import {
    IconCoin,
    IconPaper,
    IconBarcode,
    IcoInfo
} from '../../assets/icons' 

import {
    red,
    yellow,
    green,
    blue,
    grey99

} from '../../assets/colors'

import { 
    CircleWithChild 
} from '../../components'

import {
    useSelector,
} from 'react-redux'

import {
    Request,
    UrlNotificacoesPegar
} from '../../services'

import {
    FlatList,
    SafeAreaView
} from 'react-native'

import {
    formatDate,
    diffDays
} from '../../utils'

export const PageNotifications = props => {

    const userId = useSelector(store => store.userData.id)

    const [ notifications, setNotifications ] = useState([])

    useEffect( () => loadNotifications(), [] )

    const getIconChild = ( type = 'null' ) => {

        const obj = {
            'Pagamento': (<IconCoin />),
            'Solicitacao': (<IconPaper />),
            'Boleto': (<IconBarcode />),
            'null': (<IcoInfo />),
        }

        return obj[type]

    }

    const getBackgroundColor = type => {

        const obj = {
            'Publicado': blue,
            'Atencao': red,
            'Atrasado': yellow,
            'Visualizado': green,
        }

        return obj[type]

    }

    const getNotificationsWithoutLoans = data => {

        data = data.filter( ({ Url }) => !( Url.includes('emprestimos') ) )

        setNotifications(data)
    }

    const loadNotifications = () => {

        Request.GET( { url: UrlNotificacoesPegar(userId)} )
            .then( resp => getNotificationsWithoutLoans( resp.data ) )
    }

    const formatDateNotification = data => {

        const days = diffDays(data.item.Created)

        return (days <= 0) ? formatDate(data.item.Created) : `Há ${days} dia(s)`

    }



    const renderNotificationCard = data => (
        <Card>
            <CircleWithChild 
                background={ getBackgroundColor( data.item.Status ) }
                child={ getIconChild( data.item.Tipo ) }
            />

            <ContentArea>
                <Title>{data.item.Titulo}</Title>
                <Text>{data.item.Descricao}</Text>

                <Text color={ grey99 } >{formatDateNotification(data)}</Text>
                
            </ContentArea>

        </Card>
    )


    return (
        <SafeAreaView>
            <FlatList
                data={notifications}
                renderItem={renderNotificationCard}
                keyExtractor={ item => item.id }
            />
        </SafeAreaView>

    )

}

export const Notifications = {
    screen: PageNotifications,
    navigationOptions: {
        headerTitle: "NOTIFICAÇÕES"
    }
}