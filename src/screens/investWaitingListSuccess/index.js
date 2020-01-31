import React, { useEffect } from 'react'


import {
    IconCheckAll
} from '../../assets/icons'

import {
    Modal
} from '../../components'

import {
    Container,
    Title,
} from './styles'

import {
    greenTwo
} from '../../assets/colors'

import {
    withNavigation
} from 'react-navigation'
import { useSelector } from 'react-redux'

export const InvestWaitingListSuccessModal = props => {

    // vars

    const name = useSelector( ({userData}) => userData.Name )


    // effects


    useEffect( () => {

        setTimeout( () => props.navigation.goBack(), 2200) 

    }, [])

    // render


    return (
        <Modal height={ 290 }>

            <Container>

                <IconCheckAll width={ 64 } height={ 64 } fill={ greenTwo } />

                <Title>{name}, está tudo certo! seu investimento foi colocado na lista de espera. Agora é só aguardar.</Title>

            </Container>

        </Modal>

    )


}

export const InvestWaitingListSuccess = {
    screen: withNavigation(InvestWaitingListSuccessModal),
    navigationOptions: {
        gestureResponseDistance: { vertical: 0 }
    }
}