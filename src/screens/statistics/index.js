import React, { useState, useEffect }  from 'react'

import { useSelector } from 'react-redux'

import {
    Title,
    ScrollView,
    SafeAreaView,
    Card,
    ItemTitle,
    ItemText,
    Item,
} from './styles'

import {
    LinkList
} from '../../components'

import {
    CardTotalInvestiments
} from './components'

import {
    Request,
    UrlEstatisticasPegar
} from '../../services'

import {
    formatMoney
} from '../../utils'


export const PageStatistics = props => {

    const [statistics, setStatistics] = useState(null)

    const userId = "5b27d3cd1ee3fa001178c1c6"

    const links = [
        {
            title: 'Rendimento geral da carteira',
            onPrss: () => {}
        },
        {
            title: 'Rendimento por tipo de investimento',
            onPrss: () => {}
        },
        {
            title: 'Rendimento por investimento',
            onPrss: () => {}
        },
        {
            title: 'Estatísticas da plataforma',
            onPrss: () => {}
        }
    ]

    useEffect( () => loadStattistics(), [] )

    const loadStattistics = () => {

        const config = {
            url: UrlEstatisticasPegar(userId),
            header: 'bearer'
        }

        Request.GET(config).then( resp => {

            console.log(resp)
            setStatistics(resp.data)
        } )

    }


    const renderPage = () => (
        <ScrollView>
            <Title>Meus investimentos</Title>

            <Card>

                <Item>
                    <ItemTitle> Investimentos em empréstimos coletivo </ItemTitle>
                    <ItemText> { formatMoney(statistics.TipoInvestimento.Coletivo.Valor) } </ItemText>
                </Item>

                <Item>
                    <ItemTitle> Investimentos em empréstimos de impacto </ItemTitle>
                    <ItemText>  { formatMoney(statistics.TipoInvestimento.Impacto.Valor) } </ItemText>
                </Item>

                <Item>
                    <ItemTitle> Investimentos em empréstimos antecipação </ItemTitle>
                    <ItemText>  { formatMoney(statistics.TipoInvestimento.Antecipacao.Valor) } </ItemText>
                </Item>

                <Item withoutBorder={ true } >
                    <ItemTitle> Investimentos em empréstimos sociais </ItemTitle>
                    <ItemText>  { formatMoney(statistics.TipoInvestimento.Social.Valor) } </ItemText>
                </Item>
                
            </Card>

            <CardTotalInvestiments data={ statistics } />

            <LinkList data={links}/>


        </ScrollView>
    )



    return (
        <SafeAreaView>

            { (statistics != null) ? renderPage() : null }


        </SafeAreaView>
    )

}

export const Statistics = {
    screen: PageStatistics,
    navigationOptions: {
        headerTitle: "ESTATÍSTICAS"
    }
}