import React, { useState, useEffect } from 'react';

import { View, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';

import { SafeAreaView, ScrollView, Title, Question, Options, OptionsContainer, Button, ButtonText } from './styles';

import { useSelector } from 'react-redux';

import { Request, UrlSaveSuitability } from '../../services';

export const FormSuitabilityOne = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [HorizonteInvestimento, setHorizonteInvestimento] = useState('');
  const [MomentoVida, setMomentoVida] = useState('');
  const [DistribuicaoInvestimento, setDistribuicaoInvestimento] = useState('');
  const [SitucaoFinanceira, setSitucaoFinanceira] = useState('');
  const [Patrimonio, setPatrimonio] = useState('');

  const userId = useSelector((store) => store.account.accountData.UsuarioId);

  const FormularioCapacidade = {
    HorizonteInvestimento,
    MomentoVida,
    DistribuicaoInvestimento,
    SitucaoFinanceira,
    Patrimonio,
  };

  // {"FormularioCapacidade":
  //   {
  //     "HorizonteInvestimento":"3",
  //     "MomentoVida":"3",
  //     "DistribuicaoInvestimento":"3",
  //     "SitucaoFinanceira":"4",
  //     "Patrimonio":"5"
  // },

  //   "step_type":"next"
  // }

  const SuitabilityOne = {
    FormularioCapacidade,
    // eslint-disable-next-line @typescript-eslint/camelcase
    step_type: 'next',
  };

  const saveSuitability = async (data) => {
    console.log('entrouu');
    const resp = await Request.POST({
      url: UrlSaveSuitability(userId,"FormularioCapacidade"),
      data: data,
      header:"bearer"
    });
    console.log(resp.data)
  };

  const nextStep = () => {
    saveSuitability(SuitabilityOne);
    props.navigation.navigate('SuitabilityTwo');
  };

  useEffect(() => {
    setDisabled(
      HorizonteInvestimento === '' ||
        MomentoVida === '' ||
        DistribuicaoInvestimento === '' ||
        SitucaoFinanceira === '' ||
        Patrimonio === '',
    );
  }, [HorizonteInvestimento, MomentoVida, DistribuicaoInvestimento, SitucaoFinanceira, Patrimonio]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>1. Avaliação da capacidade de assumir riscos</Title>
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

        <Button disabled={disabled} onPress={() => nextStep()}>
          <ButtonText> CONTINUAR </ButtonText>
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
