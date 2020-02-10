import React, { useState, useEffect } from 'react'

import {
    SafeAreaView,
    Table,
    Row,
    Colunm,
    Circle,
    Text,
    Header,
    TableText,
    ScrollView
} from './styles'

import { 
    greenTwo,
    redTwo,
    lightYellow,
} from '../../assets/colors'

import {
    Request,
    UrlTomadorFatura,
    UrlTabelaValoresInvestidores
} from '../../services'

import {
    Item
} from './components'

import {
    PMT
} from '../../utils'

import {
    Loading
} from '../../components'

export const HistoricPaymentComponent = props => {

    // props

    const {
        navigation
    } = props

    // states

    const [ faturas, setFatura ] = useState(null)

    // vars

    const data = navigation.getParam('data', null)

    // methods

    const getValorParcela = async item => {

        if(data.SolicitacaoId.Alongamento) {

            const resp = await Request.GET( { url: UrlTabelaValoresInvestidores(data.SolicitacaoId._id, data._id) } )

            if(resp.status === 200) {

                for (let i = 0; i < item.length; i++) {
                    item[i] = {...item[i], valorParcela: resp.data.tabela.TabelaPrice[i].Parcela.toFixed(2)}
                }
                
                setFatura(item)

            }

            else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
        }

        else {

            const valorParcela = PMT(data.Valor, data.SolicitacaoId.RetornoBrutoMensal, data.SolicitacaoId.Prazo)
            
            for (let i = 0; i < item.length; i++) {
                item[i] = {...item[i], valorParcela}
            }
            
            setFatura(item)

        }

    }


    const getFaturas = async () => {

        const resp = await Request.GET( { url: UrlTomadorFatura(data.SolicitacaoId._id) } )

        if(resp.status === 200) {

            getValorParcela(resp.data)
        
        }

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }

    const handlerContent = () => {

        const defaultData = {
            IndiceFatura: 0,
            valorParcela: 0,
            Boleto: {
                due_date: null,
            }
        }

        if(!data.SolicitacaoId.GerouBoletosPagamento) return (<Item data={defaultData} />)

        else if(faturas !== null) return (
            faturas.map( (item, index) => ( 
                <Item 
                    showBorder={ index !== faturas.length - 1 } 
                    data={item} 
                />
            ))
        )
    }


    // useEffects

    useEffect( () => {

        async function fetchData() {
            await getFaturas()
        }

        fetchData()
        
    }, [])

    // render

    return (
        <Loading loading={faturas === null} >

            <SafeAreaView>
                <ScrollView>
                    <Table>
                        <Row>
                            <Colunm>
                                <Circle background={greenTwo} />
                                <Text>Quitado</Text>
                            </Colunm>

                            <Colunm>
                                <Circle background={redTwo} />
                                <Text>Vencido</Text>
                            </Colunm>

                            <Colunm>
                                <Circle background={lightYellow} />
                                <Text>A vencer</Text>
                            </Colunm>
                        </Row>

                        <Header>
                            <TableText bold={true} >Parc.</TableText>
                            <TableText flex="2" bold={true} >Valor</TableText>
                            <TableText flex="2" bold={true} >Vencimento</TableText>
                            <TableText bold={true} >Status</TableText>
                        </Header>

                        { handlerContent() }

                    </Table>

                </ScrollView>
            </SafeAreaView>


        </Loading>

    )
}

export const HistoricPayment = {
    screen: HistoricPaymentComponent,
    navigationOptions: {
        headerTitle: "Pagamentos"
    }
}