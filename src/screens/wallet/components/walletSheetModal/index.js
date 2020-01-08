import React, { useState, useEffect }  from 'react'

import {
    SheetModal
} from '../../../../components'


import {
    ModalPaymant
} from './components'


import {
    Card,
} from './styles'

export const WalletSheetModal = props => {

    // Props 

    const {
        navigation
        
    } = props

    // Vars

    const data = navigation.getParam('data', null)


    // Methods

    const renderModalByType = () => {

        const { Tipo } = data

        const obj = {
            'PAGAMENTO': (<ModalPaymant data={data} />),
            'TRANSFERENCIA': (<ModalPaymant data={data} />),
            'DEPOSITO': (<ModalPaymant data={data} />),
            'INVESTIMENTO': (<ModalPaymant data={data} />),
        }

        return obj[Tipo]
    }

    // Render

    return ( 
    
        <SheetModal children={ () => (

            <Card> 

                { renderModalByType() }
                
            </Card>


        ) } /> 
    )
}