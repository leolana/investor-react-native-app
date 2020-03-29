import React, { useState } from 'react';

import { View } from 'react-native'

import { RadioButton } from 'react-native-paper'

import {
    SafeAreaView,
    ScrollView,
    Title,
    Question,
    Options,
    OptionsContainer,
    Button,
    TextButton,
} from './styles'

export const FormSuitabilityOne = props => {
    const [questao1, setQuestao1] = useState('')
    const [questao2, setQuestao2] = useState('')
    const [questao3, setQuestao3] = useState('')
    const [questao4, setQuestao4] = useState('')
    const [questao5, setQuestao5] = useState('')

    return (
        <SafeAreaView>
            <ScrollView >
                <Title>
                    1. Avaliação da capacidade de assumir riscos
                </Title>
                <View>
                    <Question>
                        a. Horizonte de investimento: você pretende utilizar um percentual relevante
                        dos seus investimentos no curto ou médio prazo?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao1(value)}
                        value={questao1}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Sim, pretendo utilizar um percentual relevante dos meus investimentos no curto prazo (até 1 ano).
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Sim, pretendo utilizar um percentual relevante dos meus investimentos no médio prazo (de 1 a 3 anos).
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Não tenho previsão de utilizar no curto e médio prazo.
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        b. Momento de vida: Qual das opções abaixo melhor define sua finalidade de investimento?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao2(value)}
                        value={questao2}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Preservação de capital - O objetivo é obter um retorno suficiente para compensar a inflação, mantendo o valor real do capital constante, sem se expor a um nível de risco elevado.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Sim, pretendo utilizar um percentual relevante dos meus investimentos no médio prazo (de 1 a 3 anos).
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Geração de renda - O objetivo é obter um retorno constante como fonte de renda, gerando um rendimento regular, aceitando um nível de risco moderado.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="four" />
                                <Options>
                                    Aumento de capital - O objetivo é obter um retorno acima da inflação, resultando no aumento do capital investido, aceitando incorrer em alto nível de risco.
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        c. Distribuição dos investimentos: Qual o percentual do seu patrimônio você pretende alocar os seus investimentos na IOUU?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao3(value)}
                        value={questao3}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Mais de 25%.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    De 10% a 25%.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Até 10%.
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        d. Situação financeira: Qual sua renda mensal média declarada?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao4(value)}
                        value={questao4}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Até R$ 1.200,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    De R$ 1.200,00 até R$ 4.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    De R$ 4.001,00 até R$ 10.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="four" />
                                <Options>
                                    Acima de R$ 10.000,00.
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        e. Qual o valor total do seu patrimônio incluindo aplicações financeiras e outros bens (exceto imóvel que reside)?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao5(value)}
                        value={questao5}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options> 
                                    Até R$ 50.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    De R$ 50.001,00 a R$ 200.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    De R$ 200.001,00 a R$ 500.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="four" />
                                <Options>
                                    De R$ 500.001,00 a R$ 1.000.000,00.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="five"/>
                                <Options>
                                    Acima de R$ 1.000.000,00.
                             </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <Button  >
                    <TextButton> Continuar </TextButton>
                </Button>

            </ScrollView>
        </SafeAreaView>
    )
}

export const SuitabilityOne = {
    screen: FormSuitabilityOne,
    navigationOptions: {
        headerTitle: "Etapa 1"
    }
}