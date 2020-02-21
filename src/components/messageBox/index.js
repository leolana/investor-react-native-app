import React, { useState, useEffect } from 'react'


import {
    Title,
    Text,
    Container,
    Touchable,
    TouchableText,
    Margin

} from './styles'

import { 
    useSelector, 

} from 'react-redux'

import {
    IconArrow2Right
} from '../../assets/icons'

import { white } from '../../assets/colors'

import { withNavigation } from 'react-navigation'

export const MessageBoxComponent = props => {

    const {
        navigation
    } = props

    // states

    const [ message, setMessage ] = useState(null)

    // vars

    const accountData = useSelector( ({accountData}) => accountData)

    // methods


    const investorIsBlocked = () => {

        if(accountData.Bloqueio === undefined || accountData.Bloqueio.FimBloqueio === undefined ) return false

        const { FimBloqueio } = accountData.Bloqueio

        return new Date(FimBloqueio) > new Date()

    }

    const investorIsApproved = () => accountData.Status === 'APROVADO'

    const handleMessage = () => {

        if(investorIsBlocked()) return `Perfil bloqueado, favor retornar após ${accountData.Bloqueio.Dias} dias.`

        else if(!accountData.HasInvestor) return `Complete seu cadastro de investidor para investir.`

        else if(!accountData.HasSuitability) return `Complete seu cadastro no suitability para investir.`

        else if(!investorIsApproved) return `Agora estamos analisando suas informações e retornaremos em até 1 dia útil.`

    }

    const handleScreen = () => {

        if(!accountData.HasInvestor) return 'SignUpInvestorStepOne'

        else if(!accountData.HasSuitability) return 'SignUpSuitability'

        return null

    }

    useEffect( () => {

        if(accountData === undefined || accountData === null) return 

        const msg = handleMessage()

        setMessage(msg)

    }, [accountData])

    // render

    return (
        <>
            {
                (!message) ? null : (
                    <Margin>
                        <Title>Importante</Title>
                        <Container>
                            <Text>{message}</Text>
                            {
                                ( handleScreen() === null ) ? null : (
                                    <Touchable onPress={ () => navigation.navigate( handleScreen() )} >
                                        <TouchableText>Vamos lá </TouchableText>
                                        <IconArrow2Right fill={white} />
                                    </Touchable>
                                )
                            }
                        </Container>
                    </Margin>
                )
            }
        </>

    )
}


export const MessageBox = withNavigation(MessageBoxComponent)