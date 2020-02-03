import React from 'react'

import {
    SafeAreaView,
    ContentArea,
    Title,
    ScrollView,
    ItemDefaultTitle,
    ItemDefaultText,

} from './styles.js'

import HTML from 'react-native-render-html'

import {
    formatCNPJ,
    formatDate
} from '../../utils'

export const CompanyComponent = props => {

    // props 

    const { navigation } = props

    // vars

    const data = navigation.getParam('data', null)

    // methods

    const formatAddress = endereco => {

        const { 
            Bairro, 
            Cep, 
            Cidade, 
            Complemento, 
            Logradouro, 
            Numero, 
            Uf 
        } = endereco

        
        return `${Logradouro}, ${Numero} - ${(Complemento) ? Complemento + ',' : ''} ${Bairro}, ${Cidade}, ${Uf}, ${Cep}`

    } 



    // render

    return (
        <SafeAreaView>
            <ScrollView>

                <Title>Descrição breve sobre a empresa</Title>

                <ContentArea>

                    <HTML />

                </ContentArea>

                <Title>Dados da empresa</Title>

                <ContentArea>

                    <ItemDefaultTitle bold={true} >Empresa <ItemDefaultTitle>(Razão social)</ItemDefaultTitle></ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{data.Empresa.RazaoSocial}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >CPF/CNPJ</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{formatCNPJ(data.Documento)}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Nome fantasia</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{data.Empresa.NomeFantasia}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Data de fundação</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{formatDate(data.Empresa.DataFundacao)}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Número de funcionários</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{data.Empresa.QuantidadeEmpregados}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Endereço</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{formatAddress(data.Empresa.Endereco)}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Site</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} >{data.Empresa.Site}</ItemDefaultText>

                    <ItemDefaultTitle bold={true} >Redes sociais</ItemDefaultTitle>
                    <ItemDefaultText marginBottom={16} ></ItemDefaultText>

                    

                </ContentArea>

                <Title>Motivo da solicitação do empréstimo</Title>

                <ContentArea>

                    <HTML html={data.Motivo} />

                </ContentArea>

                <Title>Análise sobre a empresa</Title>

                <ContentArea>

                    <HTML html={data.AnaliseEmpresa}/>

                </ContentArea>


            </ScrollView>
        </SafeAreaView>
    )
}

export const Company = {
    screen: CompanyComponent,
    navigationOptions: {
        headerTitle: "DADOS DA EMPRESA"
    }
}
