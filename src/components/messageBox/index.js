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
    formatDate
} from '../../utils'

import { 
    useSelector, 
    useDispatch 

} from 'react-redux'

import { 
    Request,
    UrlInvPegar
} from '../../services'

import {
    setInvestIsAvailable
} from '../../store/actions'



export const MessageBox = props => {

    // states

    const [ investorData, setInvestorData ] = useState(null)

    const [ endDateBlock, setEndDateBlock ] = useState(null)

    const [ message, setMessage ] = useState(null)

    // vars

    const dispatch = useDispatch()

    const userData = useSelector( ({userData}) => userData)

    const email = userData.Email
    
    const hasInvestor = userData.HasInvestor

    const hasSuitability = userData.HasSuitability

    // methods


    const getInvestorData = async () => {

        const resp = await Request.GET({ url: UrlInvPegar(email), header: 'bearer' })

        if(resp.status === 200) setInvestorData(resp.data)
    }


    const investorIsBlocked = () => {

        if(investorData.Bloqueio === undefined || investorData.Bloqueio.FimBloqueio === undefined ) return false

        const { FimBloqueio } = investorData

        setEndDateBlock(formatDate(FimBloqueio))

        return new Date(formatDate(FimBloqueio)) > new Date()

    }

    const investorIsApproved = () => investorData.Status === 'APROVADO'

    const handleMessage = () => {

        if(!hasInvestor) return `Complete seu cadastro de investidor para investir.`

        else if(!hasSuitability) return `Complete seu cadastro no suitability para investir.`

        else if(!investorIsApproved) return `Agora estamos analisando suas informações e retornaremos em até 1 dia útil.`

        else if(investorIsBlocked()) return `Perfil bloqueado, favor retornar após ${endDateBlock} dias.`

    }


    useEffect( () => {
        async function fetchData() {
            await getInvestorData()
        }

        if(investorData === null) fetchData()

        else {

            const msg = handleMessage()

            setMessage(msg)

            dispatch(setInvestIsAvailable(investorIsApproved()))

        }

    }, [investorData]) 

    // render

    return (
        <>
            {
                (!message) ? null : (
                    <Margin>
                        <Title>Importante</Title>
                        <Container>
                            <Text>{message}</Text>
                            <Touchable>
                                <TouchableText>Vamos lá </TouchableText>
                            </Touchable>
                        </Container>
                    </Margin>
                )
            }
        </>

    )
}