import React, { useState, useEffect }  from 'react'

import {
    SheetModal
} from '../../components'

import {
    formatCompanyName
} from '../../utils'

import {
    Card,
    Title,
    Text,
    Item,
    Area
} from './styles'

export const WalletSheetModal = props => {

    // Props

    const {
        navigation
    } = props


    // State
    const [ data ] = useState( navigation.getParam('data', null) )

    const [ companyName, setCompanyName ] = useState( '' )

    const [ document, setDocument ] = useState( '' )


    // Vars

    
    // Methods

    // Effects

    useEffect( () => {

        const {
            Tipo, 
            ReInvestimento, 
            SolicitacaoID, 
            FaturaID 

        } = data.item

        setCompanyName( formatCompanyName(SolicitacaoID) )


    }, [ data ])


    // Render

    return ( 
    
    <SheetModal children={ () => (

        <Card> 
            <Title>Informações</Title>
            <Text marginBottom={2} >{companyName}</Text>
            <Text marginBottom={5} >{document}</Text>

            <Item marginBottom={5}>ID da fatura: <Text>000000000</Text></Item>

            <Item>Detatlhes do pagamento</Item>

            <Area>
                <Text>Rec. parcela empréstimo 02/24</Text>
                <Text>R$ 000,00</Text>
            </Area>

        </Card>


    ) } /> )
}