import React, { useState, useEffect } from 'react'

import  {
    SafeAreaView,
    Title,
    ItemTitle,
    ItemText,
    InfoCard,
    InfoText,
    ScrollView

} from './styles'

import {
    CardInput,
    TabBar,
    Chart

} from './components'

import {
    Request,
    UrlTaxasPegar

} from '../../services'

import {
    PMT,
} from '../../utils'


export const CalculatorComponent = props =>  {

    const [ data, setData ] = useState({
        Tesouro: [],
        Poupanca: [],
        CDB: [],
        IOUU: []
    })

    const [ taxes, setTaxes ] = useState(null)

    const [ value, setValue ] = useState(500)

    const [ year, setYear ] = useState(1)

    const [ tabName, setTabName ] = useState('IOUU')

    const tabs = ['IOUU', 'Poupança', 'CDB', 'Tesouro Direto']

    const getTaxes = async () => {

        const resp = await Request.GET({ url: UrlTaxasPegar })

        if(resp.status == 200) setTaxes(resp.data)

    }

    const FV = (rate, periods, payment, value, type) => {
        // Credits: algorithm inspired by Apache OpenOffice
      
        // Initialize type
        type = (typeof type == 'undefined') ? 0 : type;
      
        // Evaluate rate (TODO: replace with secure expression evaluator)
        rate = eval(rate);
      
        // Return future value
        var result;
        if (rate == 0) {
          result = value + payment * periods;
        } else {
          var term = Math.pow(1 + rate, periods);
          if (type == 1) {
            result = value * term + payment * (1 + rate) * (term - 1.0) / rate;
          } else {
            result = value * term + payment * (term - 1) / rate;
          }
        }
      
      
        return -result;
    }
      
    const IPMT = (rate, period, periods, present, future, type) => {
        // Credits: algorithm inspired by Apache OpenOffice
    
        // Initialize type
        type = (typeof type == 'undefined') ? 0 : type;
    
        // Initialize future
        future = (typeof future == 'undefined') ? 0 : future;
    
        // Evaluate rate and periods (TODO: replace with secure expression evaluator)
        rate = eval(rate);
        periods = eval(periods);
    
        // Compute payment
        var payment = PMT(rate, periods, present, future, type);
    
        // Compute interest
        var interest;
        if (period == 1) {
        if (type == 1) {
            interest = 0;
        } else {
            interest = -present;
        }
        } else {
        if (type == 1) {
            interest = FV(rate, period - 2, payment, present, 1) - payment;
        } else {
            interest = FV(rate, period - 1, payment, present, 0);
        }
        }
    
        var result = interest * rate;
        // result = Math.round(result * 100) / 100;
    
        // Return interest
        return interest * rate;
    }
      

    const calculate = () => {

    }

    const onDataChange = (value, year) => {
        setValue(value)

        setYear(year)
    }

    const calcInvestment = (investimento, taxa, indice) => {
        investimento = investimento + (investimento * (taxa * indice) / 100.0)
        return parseFloat(investimento.toFixed(2))
    }

    const calcJuros = (prazo, taxa, loans) => {
        let juros = 0;

        for(let i = 0; i < loans.length; i++) {
          juros += -IPMT(taxa / 100, loans[i].parcela, prazo, loans[i].valor);
          loans[i].parcela++;
        }

        return juros;
    }

    const formatData = values => {

        const { Tesouro, Poupanca, CDB, IOUU } = values

        values.Tesouro = Tesouro[Tesouro.length - 1]
        values.Poupanca = Poupanca[Poupanca.length - 1]
        values.CDB = CDB[CDB.length - 1]
        values.IOUU = IOUU[IOUU.length - 1]

        let list = [values.Tesouro, values.Poupanca, values.CDB, values.IOUU]

        list = list.sort()

        list.map( (v, i) => {

            if(v === values.Tesouro) values.Tesouro = (v * 100) / list[list.length - 1]
            else if(v === values.Poupanca) values.Poupanca = (v * 100) / list[list.length - 1]
            else if(v === values.CDB) values.CDB = (v * 100) / list[list.length - 1]
            else values.IOUU = (v * 100) / list[list.length - 1]

        })

        setData(values)

    }


    const generateData = (valor, pos) => {

        let values = {
          Tesouro: [],
          Poupanca: [],
          CDB: [],
          IOUU: [],
        }

        let loans = [
            {
                "valor": valor,
                "parcela": 1
            }    
        ]

        let valorTesouro = calcInvestment(valor, taxes[1].valores[pos].valorTaxa, 1);

        let valorCDB = calcInvestment(valor, taxes[1].valores[pos].valorTaxa, 1.1);

        let valorPoupanca = calcInvestment(valor, taxes[0].valores[pos].valorTaxa, 1);

        values.Tesouro = [...values.Tesouro, valorTesouro]

        values.CDB = [...values.CDB, valorCDB];

        values.Poupanca = [...values.Poupanca, valorPoupanca];
    
        values = generateAnotherValues(pos, values);

        const obj = generateIOUUValues(pos, values, loans);

        values = obj.values

        console.log(values)
          
    }

    const generateAnotherValues = (pos, values) => {
        for(let i = pos -1 ; i >= 0; i--) {

            let valorTesouro = calcInvestment(values.Tesouro[ values.Tesouro.length - 1 ], taxes[1].valores[i].valorTaxa, 1);

            let valorCDB = calcInvestment(values.CDB[ values.CDB.length - 1 ], taxes[1].valores[i].valorTaxa, 1.1);

            let valorPoupanca = calcInvestment(values.Poupanca[ values.Poupanca.length - 1 ], taxes[0].valores[i].valorTaxa, 1);
            
            values.Tesouro = [...values.Tesouro, valorTesouro];
            values.CDB = [...values.CDB, valorCDB];
            values.Poupanca = [...values.Poupanca, valorPoupanca];

        }

        return values
    }

    const generateIOUUValues = (pos, values, loans) => {
        let jurosTotal = 0, jurosA = 0, total = parseFloat(500);

        for(let i = 0; i < pos +1 ; i++) {
            let juros = calcJuros(pos+1, taxes[2].ultimaTaxaMensal, loans);

            jurosTotal += juros;
            jurosA += juros;


            if(jurosA > 500) {
                total += 500;
                jurosA -= 500;
                jurosTotal -= 500;

                let inicio = {
                    "valor": 500,
                    "parcela": 1
                }

                loans.push(inicio);

                console.log(loans)


            }

            values.IOUU = [...values.IOUU, Number((total + jurosTotal).toFixed(2))];
        }

        return {
            values,
            loans
            
        }

    }

    useEffect(() => {

        getTaxes()

    }, [])

    useEffect(() => {

        if(taxes === null) return

        generateData(value, year * 11)

    }, [value, year])


    return (
        <SafeAreaView>
            <ScrollView>
                <Title>Simulação em números</Title>
                
                <CardInput onChange={onDataChange} />

                <TabBar 
                    onChange={setTabName}
                    value="IOUU"
                    tabs={tabs}
                
                />

                <Chart
                    tabName={tabName} 
                    data={data}
                
                
                />

                <ItemTitle>Em um ano você terá na IOUU aproximadamente</ItemTitle>
                <ItemText>R$ 12.238,00</ItemText>

                <ItemTitle>Na IOUU seu dinheiro renderá em um ano aproximadamente</ItemTitle>
                <ItemText>R$ 12.238,00</ItemText>

                <InfoCard>

                    <InfoText>
                        (1) Todas as Taxas são Brutas (antes do desconto do Imposto de Renda). 
                        Apenas a poupança é isenta de IR. 
                        (2) Considerando a taxa média de retorno atual (Dezembro/2018) de 28,36% ao ano da plataforma IOUU e o reinvestimento das parcelas recebidas quando atingem o mínimo de R$ 500,00. 
                        (3) Tesouro 100% Selic (LFT) - Fonte: http://tesouro.fazenda.gov.br/tesouro-direto-precos-e-taxas-dos-titulos. Consultado em 07/01/2019. (4) CDB de 110% do CDI (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil. (5) Poupança - (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil.
                    </InfoText>

                </InfoCard>


            </ScrollView>
            

        </SafeAreaView>
    )

}

export const Calculator = {
    screen: CalculatorComponent,
    navigationOptions: {
        headerTitle: "Calculadora"
    }
}