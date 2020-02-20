import React, { useState, useEffect } from 'react'

import  {
    SafeAreaView,
    Title,
    ItemTitle,
    ItemText,
    InfoCard,
    InfoText,
    ScrollView,
    BackgroundGradiant,
    ButtonText

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
  formatMoney
} from '../../utils'

import { 
  dusk,
  darkDusk

} from '../../assets/colors'

import {
  TouchableOpacity
} from 'react-native'


export const CalculatorComponent = props =>  {

    const [ data, setData ] = useState({
        Tesouro: [],
        Poupanca: [],
        CDB: [],
        IOUU: []
    })

    const [ simulate, setSimulate ] = useState(false)

    const [ taxes, setTaxes ] = useState(null)

    const [ value, setValue ] = useState(500)

    const [ comparationValue, setComparationValue ] = useState(0)

    const [ iouuValue, setIouuValue ] = useState(0)

    const [ year, setYear ] = useState(1)

    const [ tabName, setTabName ] = useState('IOUU')

    const tabs = ['IOUU', 'Poupança', 'CDB', 'Tesouro Direto']

    let loans = [], yearString = ['um', 'dois', 'três', 'quatro', 'cinco']

    let rendimento = {
        Tesouro: [],
        Poupanca: [],
        CDB: [],
        IOUU: []
    }

    const getTaxes = async () => {

        const resp = await Request.GET({ url: UrlTaxasPegar })

        if(resp.status == 200) setTaxes(resp.data)

    }

    const calculoInvestimento = (investimento, taxa, indice) => {
        investimento = investimento + (investimento * (taxa * indice) / 100.0);
        return parseFloat(investimento.toFixed(2));
    }

    const PMT = (rate, periods, present, future, type) => {
        // Credits: algorithm inspired by Apache OpenOffice

        // Initialize type
        type = (typeof type == 'undefined') ? 0 : type;

        // Initialize future
        future = 0;

        // Evaluate rate (TODO: replace with secure expression evaluator)
        rate = eval(rate);

        // Return payment
        var result;
        if (rate == 0) {
          result = (present + future) / periods;
        } else {
          var term = Math.pow(1 + rate, periods);
          if (type == 1) {
            result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
          } else {
            result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
          }
        }

        // result = Math.round(result * 100) / 100;

        return -result;
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


  const calcularJuros = (prazo, taxa) => {
      let juros = 0;

      for(let i = 0; i < loans.length; i++) {
        juros += -IPMT(taxa / 100, loans[i].parcela, prazo, loans[i].valor);
        loans[i].parcela++;
      }

      return juros;
  }


  const onDataChange = (value, year) => {
      setValue(value)

      setYear(year)
  }


  const popularTesouro = (i) => {
      let ultimoIndice = rendimento.Tesouro[ rendimento.Tesouro.length - 1 ];

      let taxa = taxes[1].valores[i].valorTaxa;

      let valorTesouro = calculoInvestimento( ultimoIndice , taxa, 1);
      
      rendimento.Tesouro.push(valorTesouro);
  }

  const popularCDB = (i) => {

      let ultimoIndice = rendimento.CDB[ rendimento.CDB.length - 1 ];

      let taxa = taxes[1].valores[i].valorTaxa;

      let valorCDB = calculoInvestimento(ultimoIndice, taxa, 1.1);

      rendimento.CDB.push(valorCDB);
  }

  const popularPoupanca = (i) => {

      let ultimoIndice = rendimento.Poupanca[ rendimento.Poupanca.length - 1 ]

      let taxa = taxes[0].valores[i].valorTaxa;

      console.log(taxa)

      let valorPoupanca = calculoInvestimento(ultimoIndice, taxa, 1);

      rendimento.Poupanca.push(valorPoupanca);
  }

  const calcComparationValue = () => {

    const key = getKey(tabName)

    const val = getComparationValue(key)

    setComparationValue(val)


  }

  const gerarRendimentoConcorrencia = (prazo) => {
      for(let i = prazo - 2; i >= 0; i--) {

          popularTesouro(i);

          popularCDB(i);

          popularPoupanca(i);
      }
      
  }


  const iniciarVetoresDeRendimentoConcorrencia = (valor, prazo) => {

      rendimento = {
          Tesouro: [],
          Poupanca: [],
          CDB: [],
          IOUU: []
      }

      loans= [ { "valor": valor, "parcela": 1 } ];

      let { valorTaxa } = taxes[1].valores[prazo];

      rendimento.Tesouro.push(calculoInvestimento(valor, valorTaxa, 1))

      rendimento.CDB.push(calculoInvestimento(valor, valorTaxa, 1.1))

      rendimento.Poupanca.push(calculoInvestimento(valor, taxes[0].valores[prazo].valorTaxa, 1));

      gerarRendimentoConcorrencia(prazo);
  }

  const gerarDadosIOUU = (prazo, value) => {

    let jurosTotal = 0, jurosA = 0, total = parseFloat(value);

    for(let i = 0; i < prazo; i++) {
        let juros = calcularJuros(prazo+1, taxes[2].ultimaTaxaMensal);

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


        }

        rendimento.IOUU = [...rendimento.IOUU, (total + jurosTotal).toFixed(2)];
      }

  }

  const calculate = () => {

    setSimulate(true)

    generateData(value, (year * 12) - 1 )

  }

  const generateData = (valor, prazo) => {

      iniciarVetoresDeRendimentoConcorrencia(valor, prazo)

      gerarDadosIOUU(prazo, valor)

      setIouuValue(rendimento.IOUU[rendimento.IOUU.length - 1])

      console.log(rendimento)

      setData(rendimento)
        
  }

  const getComparationValue = key => {

    const values = data[key]

    return values[values.length - 1]
  }

  const getKey = name => {

      const obj ={
          'Poupança': 'Poupanca',
          'CDB': 'CDB',
          'IOUU': 'IOUU',
          'Tesouro Direto': 'Tesouro'

      }

      return obj[name]
  }
    
    useEffect(() => {

      async function fetchData() {

        await getTaxes()

      }

      fetchData()

    }, [])

    useEffect(() => {

      calcComparationValue()

    }, [tabName])

    useEffect(() => {

        if(taxes === null) return

        generateData(value, (year * 12) - 1 )

        calcComparationValue()

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

                {
                  (!simulate) ? (
                    <TouchableOpacity onPress={ () => calculate() }>
                        <BackgroundGradiant colors={[dusk, darkDusk]}>
                            <ButtonText>Simular investimento</ButtonText>
                        </BackgroundGradiant>
                    </TouchableOpacity>
                  ) : (
                    <>
                        <Chart
                            value={value}
                            taxes={taxes}
                            year={year}
                            tabName={tabName} 
                            data={data}
                        />

                        {
                          (tabName === 'IOUU') ? null : (
                            <>
                                <ItemTitle>Na {tabName} renderia</ItemTitle>
                                <ItemText>{formatMoney(comparationValue)}</ItemText>
                            </>
                          )
                        }
        

                        <ItemTitle>Em {yearString[year - 1]} ano(s) você terá na IOUU aproximadamente</ItemTitle>
                        <ItemText>{formatMoney(iouuValue)}</ItemText>
        
                        <ItemTitle>Na IOUU seu dinheiro renderá em {yearString[year - 1]} ano(s) aproximadamente</ItemTitle>
                        <ItemText>{formatMoney(iouuValue - value)}</ItemText>
        
                        <InfoCard>
        
                            <InfoText>
                                (1) Todas as taxes são Brutas (antes do desconto do Imposto de Renda). 
                                Apenas a poupança é isenta de IR. 
                                (2) Considerando a taxa média de retorno atual (Dezembro/2018) de 28,36% ao ano da plataforma IOUU e o reinvestimento das parcelas recebidas quando atingem o mínimo de R$ 500,00. 
                                (3) Tesouro 100% Selic (LFT) - Fonte: http://tesouro.fazenda.gov.br/tesouro-direto-precos-e-taxas-dos-titulos. Consultado em 07/01/2019. (4) CDB de 110% do CDI (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil. (5) Poupança - (Dados Históricos utilizados de Jan/2014 em diante) - Fonte: Banco Central do Brasil.
                            </InfoText>
        
                        </InfoCard>
                    </>
                  )
                }

                

                


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