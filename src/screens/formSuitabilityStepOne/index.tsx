import React, { useState, useEffect } from 'react';

import { View, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';

import { SafeAreaView, ScrollView, Title, Question, Options, OptionsContainer, Button, TextButton } from './styles';

// import { useSelector } from 'react-redux';
import { Request, UrlUsuarioPegar } from '../../services';

export const FormSuitabilityOne = (props) => {
  const [HorizonteInvestimento, setHorizonteInvestimento] = useState('');
  const [MomentoVida, setMomentoVida] = useState('');
  const [DistribuicaoInvestimento, setDistribuicaoInvestimento] = useState('');
  const [SitucaoFinanceira, setSitucaoFinanceira] = useState('');
  const [Patrimonio, setPatrimonio] = useState('');
  const [SuitabilityId, setSuitabilityId] = useState('');

  const FormularioCapacidade = {
    HorizonteInvestimento,
    MomentoVida,
    DistribuicaoInvestimento,
    SitucaoFinanceira,
    Patrimonio,
  };

  const SuitabilityOne = {
    FormularioCapacidade,
    stepType: 'next',
  };

  const saveSuitability = async (data) => {
    const resp = await Request.PUT({
      url: `https://server-test.iouu.com.br/api/v1/suitability/${SuitabilityId}/investidor`,
      data: data,
    });

    console.log(resp.data);
  };

  const avancaEtapa = () => {
    if (
      HorizonteInvestimento === '' ||
      MomentoVida === '' ||
      DistribuicaoInvestimento === '' ||
      SitucaoFinanceira === '' ||
      Patrimonio === ''
    ) {
      Alert.alert('Todas a opçoes devem ser preenchias');
    } else {
      //chamada da api SuitabilitySalvar
      saveSuitability(SuitabilityOne);
      props.navigation.navigate('SuitabilityTwo');
    }
  };

  const getSuitabilityId = async () => {
    const resp = await Request.GET({
      url: 'https://server-test.iouu.com.br/api/v1/suitability',
    });

    setSuitabilityId(resp.data.insertedIds[0]);

    return resp;
  };

  useEffect(() => {
    getSuitabilityId();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>1. Avaliação da capacidade de assumir riscos </Title>
        <View>
          <Question>
            a. Horizonte de investimento: você pretende utilizar um percentual relevante dos seus investimentos no curto
            ou médio prazo?
          </Question>
          <RadioButton.Group onValueChange={(value) => setHorizonteInvestimento(value)} value={HorizonteInvestimento}>
            <View>
              <OptionsContainer>
                <RadioButton value="1" />
                <Options>
                  Sim, pretendo utilizar um percentual relevante dos meus investimentos no curto prazo (até 1 ano).
                </Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="2" />
                <Options>
                  Sim, pretendo utilizar um percentual relevante dos meus investimentos no médio prazo (de 1 a 3 anos).
                </Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="3" />
                <Options>Não tenho previsão de utilizar no curto e médio prazo.</Options>
              </OptionsContainer>
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <Question>b. Momento de vida: Qual das opções abaixo melhor define sua finalidade de investimento?</Question>
          <RadioButton.Group onValueChange={(value) => setMomentoVida(value)} value={MomentoVida}>
            <View>
              <OptionsContainer>
                <RadioButton value="1" />
                <Options>
                  Preservação de capital - O objetivo é obter um retorno suficiente para compensar a inflação, mantendo
                  o valor real do capital constante, sem se expor a um nível de risco elevado.
                </Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="2" />
                <Options>
                  Geração de renda - O objetivo é obter um retorno constante como fonte de renda, gerando um rendimento
                  regular, aceitando um nível de risco moderado.
                </Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="3" />
                <Options>
                  Aumento de capital - O objetivo é obter um retorno acima da inflação, resultando no aumento do capital
                  investido, aceitando incorrer em alto nível de risco.
                </Options>
              </OptionsContainer>
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <Question>
            c. Distribuição dos investimentos: Qual o percentual do seu patrimônio você pretende alocar os seus
            investimentos na IOUU?
          </Question>
          <RadioButton.Group
            onValueChange={(value) => setDistribuicaoInvestimento(value)}
            value={DistribuicaoInvestimento}
          >
            <View>
              <OptionsContainer>
                <RadioButton value="1" />
                <Options>Mais de 25%.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="2" />
                <Options>De 10% a 25%.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="3" />
                <Options>Até 10%.</Options>
              </OptionsContainer>
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <Question>d. Situação financeira: Qual sua renda mensal média declarada?</Question>
          <RadioButton.Group onValueChange={(value) => setSitucaoFinanceira(value)} value={SitucaoFinanceira}>
            <View>
              <OptionsContainer>
                <RadioButton value="1" />
                <Options>Até R$ 1.200,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="2" />
                <Options>De R$ 1.200,00 até R$ 4.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="3" />
                <Options>De R$ 4.001,00 até R$ 10.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="4" />
                <Options>Acima de R$ 10.000,00.</Options>
              </OptionsContainer>
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <Question>
            e. Qual o valor total do seu patrimônio incluindo aplicações financeiras e outros bens (exceto imóvel que
            reside)?
          </Question>
          <RadioButton.Group onValueChange={(value) => setPatrimonio(value)} value={Patrimonio}>
            <View>
              <OptionsContainer>
                <RadioButton value="1" />
                <Options>Até R$ 50.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="2" />
                <Options>De R$ 50.001,00 a R$ 200.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="3" />
                <Options>De R$ 200.001,00 a R$ 500.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="4" />
                <Options>De R$ 500.001,00 a R$ 1.000.000,00.</Options>
              </OptionsContainer>

              <OptionsContainer>
                <RadioButton value="5" />
                <Options>Acima de R$ 1.000.000,00.</Options>
              </OptionsContainer>
            </View>
          </RadioButton.Group>
        </View>

        <Button onPress={avancaEtapa}>
          <TextButton> Continuar </TextButton>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SuitabilityOne = {
  screen: FormSuitabilityOne,
  navigationOptions: {
    headerTitle: 'Etapa 1',
  },
};
