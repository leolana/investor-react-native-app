import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { 
    List,
} from './style.js'

import CardItem from './components/cardItem/index.js';

import { Request, STATUS_OK } from '../../services/requests/index.js'

import { ListaOportunidades } from '../../services/urls/index.js'

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    data: state.auth.data
});


const App = (props) => {

    const [ opportunities, setOpportunities ] = useState([])

    useEffect(() => {

        getOpportunities(1, 'A-B-C-D-E-HR')

    }, [])

    const getOpportunities = async (page, score) => {

        const config = { url: ListaOportunidades(page, score), header: 'bearer' }

        const { status, data } = await Request.GET(config);

        if (status === STATUS_OK) orderByOpportunities(data)

        console.log('Opportunities response -> ', status, data)

    }

    const orderByOpportunities = ( { ItemListagemSolicitacoes, Paginas } ) => {
        setOpportunities(ItemListagemSolicitacoes)
    }

    return (
        <List>

            { opportunities.map( (data, i) => 
                <CardItem 
                    key={i}
                    data={data}
                />
            )}

        </List>
    )
}

export default connect(mapStateToProps)(App);