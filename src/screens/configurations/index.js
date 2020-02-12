import React, { useState, useEffect } from 'react'

import {
    SafeAreaView,
    ScrollView,
    Content,
    Text,
} from './styles'

import {
    Card,
    Item
} from './components'

import {
    useSelector
} from 'react-redux'


export const ConfigurationsComponent = () => {


    // states

    const [ config, setConfig ] = useState({
        "EmailNewsletter": false, 
        "EmailOportunidades": false, 
        "EmailRepagamento": false, 
        "SmsOportunidades": false, 
        "SmsRepagamento": false,
        "WhatsOportunidates": false,
        "WhatsRepagamento": false,
        "SaqueAutomatico": false
    })

    // vars

    const configs = useSelector( ({accountData}) => accountData.NotificacoesInvestidor )

    // methods

    const onValueChange = (key, value) => {

        const obj = { ...config }

        obj[key] = value

        setConfig(obj)

    }

    // effects

    useEffect( () => {

        if(configs === undefined || configs === null) return

        setConfig(configs)

    }, [configs])

    // render

    return (
        <SafeAreaView>
            <ScrollView>

                <Card title="Saques">

                    <Content>
                        <Text>
                            Caso habilite essa opção, 
                            toda vez que você receber um repagamento, 
                            será feito uma transfêrencia automática para a conta bancária cadastrada.
                        </Text>
                    </Content>

                    <Item 
                        title="Saque automático"
                        value={config.SaqueAutomatico}
                        onValueChange={ value => onValueChange('SaqueAutomatico', value) }
                    />
                    

                </Card>

                <Card title="Notificações por e-mail">

                    <Item 
                        title="Aviso de novas oportunidades"
                        value={config.EmailOportunidades}
                        onValueChange={ value => onValueChange('EmailOportunidades', value) }
                    />

                    <Item 
                        title="Repagamentos do investidor"
                        value={config.EmailRepagamento}
                        onValueChange={ value => onValueChange('EmailRepagamento', value) }
                    />

                    <Item 
                        title="Resumo mensal de novidades e notícias"
                        value={config.EmailNewsletter}
                        onValueChange={ value => onValueChange('EmailNewsletter', value) }
                    />
                    

                </Card>

                <Card title="Notificações por SMS">

                    <Item 
                        title="Aviso de novas oportunidades"
                        value={config.SmsOportunidades}
                        onValueChange={ value => onValueChange('SmsOportunidades', value) }
                    />

                    <Item 
                        title="Repagamento dos investimentos"
                        value={config.SmsRepagamento}
                        onValueChange={ value => onValueChange('SmsRepagamento', value) }
                    />
                    
                </Card>

                <Card title="Notificações por WhatsApp" marginBottom="32">

                    <Item 
                        title="Aviso de novas oportunidades"
                        value={config.WhatsOportunidates}
                        onValueChange={ value => onValueChange('WhatsOportunidates', value) }
                    />

                    <Item 
                        title="Repagamento dos investimentos"
                        value={config.WhatsRepagamento}
                        onValueChange={ value => onValueChange('WhatsRepagamento', value) }
                    />
                    
                </Card>

            </ScrollView>
        </SafeAreaView>
    )
}


export const Configurations = {
    screen: ConfigurationsComponent,
    navigationOptions: {
        headerTitle: "Configureções"
    }
}
