import React, { useState, useEffect } from 'react'

import {
    BottomToolbar,
    ToolbarTitle,
    ToolbarText,
    ToolbarButtom,
    ToolbarButtomText,
    Container,
} from './styles'

import {
    Item
} from '../../styles'

import {
    formatPercent,
    diffDaysForOpportunitie
} from '../../../../utils'

import {
    Request,
    UrlSolicitacaoReservaInvPegar
} from '../../../../services'

import {
    SkeletonBone
} from '../../../../components'

import { 
    greyTwo, 
    redTwo, 
    greenTwo,
    blueTwo
} from '../../../../assets/colors'

import {
    withNavigation
} from 'react-navigation'

export const ToolbarComponent = props => {

    // Props

    const { data, navigation } = props

    // States

    const [ reserve, setReverve ] =  useState(null)

    const [ loading, setLoading ] =  useState(true)

    // Methods

    const getInvestmentReserve = async () => {

        const resp = await Request.GET({ url: UrlSolicitacaoReservaInvPegar(data._id) })
        
        if(resp.status === 200) {
            setReverve(resp.data)

            setLoading(false)
        }
    }

    const itsFinished = () => {

        const { FimCaptacao, StatusAnalise } = data

        return (StatusAnalise == 'ENCERRADO' || diffDaysForOpportunitie(FimCaptacao) == "encerrado")
    }

    const enableWaitingList = () => {

        const { Valor, ValorCaptado, ChamadaListaEspera } = data

        const value = Valor - ValorCaptado;

        return ( (value <= 0) || ChamadaListaEspera ) ? false : true
    }

    const getStatus = () =>  {

        if(itsFinished()) return 'Encerrado'

        if(reserve != null && reserve.Status != 0) {

            if(reserve.StatusBoleto != 'paid' ) return 'Cancelar'

            return 'Investido'

        } 

        else if (enableWaitingList()) return 'Lista de espera'
        
        return 'Investir'
        
    }

    const getStatusColor = () => {
        const colors = {
            'Encerrado': greyTwo,
            'Cancelar': redTwo,
            'Lista de espera': blueTwo,
            'Investir': greenTwo,
        }

        return colors[getStatus()]
    }

    const onPress = () => {

        const status = getStatus()

        console.log(status)

        if(status === 'Investir') navigation.navigate('Invest')

        else if(status === 'Lista de espera') navigation.navigate('Invest', { waitingList: true } )

        else if(status === 'Investir') navigation.navigate('CancelInvestment')

    }

    // Effects

    useEffect( () => {


        async function fetchData() {
            await getInvestmentReserve()
        }

        fetchData()
        

    }, [])




    // Render

    return (
        <Container>
            <BottomToolbar>

                <Item>
                    <ToolbarTitle>Rendimento</ToolbarTitle>
                    <ToolbarText>{formatPercent(data.Rendimento)} a.a</ToolbarText>
                </Item>

                {

                    (loading) ? <SkeletonBone height={ 31 } width={ 140 } /> :

                    (
                        <ToolbarButtom 
                            disabled={ (getStatus() === 'Encerrado') || (getStatus() === 'Investido') } 
                            background={getStatusColor()} 
                            onPress={ () => onPress() } 
                        >
                            <ToolbarButtomText>{getStatus()}</ToolbarButtomText>
                        </ToolbarButtom>
                    )

                }

            </BottomToolbar>

        </Container>
    )
}

export const Toolbar = withNavigation(ToolbarComponent)