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
    Ponderations,
    PonderationsContainer,
    OptionsBox,
} from './styles'

export const FormSuitabilityTwo = props => {
    const [questao1Opcao1, setQuestao1Opcao1] = useState('')
    const [questao1Opcao2, setQuestao1Opcao2] = useState('')
    const [questao1Opcao3, setQuestao1Opcao3] = useState('')
    const [questao1Opcao4, setQuestao1Opcao4] = useState('')
    const [questao1Opcao5, setQuestao1Opcao5] = useState('')

    const [questao2, setQuestao2] = useState('')
    const [questao3, setQuestao3] = useState('')
    const [questao4, setQuestao4] = useState('')
    const [questao5, setQuestao5] = useState('')


    return (
        <SafeAreaView>
            <ScrollView >
                <Title>
                    2. Avaliação de tolerância a risco
                </Title>

                <View>
                    <Question>
                        a. Conhecimento e Experiência: Informe o seu grau de conhecimento e experiência, o volume e a frequência das operações em cada 
                        uma das classes de produtos, levando em consideração as ponderações abaixo:
                    </Question>

                    <PonderationsContainer >
                        <Ponderations> 
                            Baixo: Não tenho familiaridade com o produto ou a classe de ativo.
                        </Ponderations>

                        <Ponderations>
                            Médio: Compreendo as características e os riscos, porém não tenho nem realizei investimento no produto ou na classe de ativo, em volumes superiores a 5% da minha carteira há mais de 2 anos.
                        </Ponderations>

                        <Ponderations>
                            Alto: Tenho e/ou realizei investimentos no produto ou na classe em volumes superiores a 5% da minha carteira há mais de 2 anos. 
                        </Ponderations>
                    </PonderationsContainer>

                    <OptionsBox>
                        <RadioButton.Group
                            onValueChange={(value) => setQuestao1Opcao1(value)}
                            value={questao1Opcao1}
                        >
                            <Options style={{width:'30%'}}>Renda fixa</Options>

                            <RadioButton value="first" />
                            <RadioButton value="second" />
                            <RadioButton value="third" />
                        </RadioButton.Group>
                    </OptionsBox>

                    <OptionsBox>
                        <RadioButton.Group
                            onValueChange={(value) => setQuestao1Opcao2(value)}
                            value={questao1Opcao2}
                        >
                            <Options style={{width: '30%'}}>Fundos multimercados e estruturados</Options>
                            
                            <RadioButton value="first" />
                            <RadioButton value="second" />
                            <RadioButton value="third" />
                        </RadioButton.Group>
                    </OptionsBox>

                    <OptionsBox>
                        <RadioButton.Group
                            onValueChange={(value) => setQuestao1Opcao3(value)}
                            value={questao1Opcao3}
                        >
                            <Options style={{width: '30%'}}>Renda variável</Options>  

                            <RadioButton value="first" />
                            <RadioButton value="second" />
                            <RadioButton value="third" />
                        </RadioButton.Group>
                    </OptionsBox>

                    <OptionsBox>
                        <RadioButton.Group
                            onValueChange={(value) => setQuestao1Opcao4(value)}
                            value={questao1Opcao4}
                        >
                            <Options style={{width: '30%'}}>Fundos imobiliários</Options>

                            <RadioButton value="first" />
                            <RadioButton value="second" />
                            <RadioButton value="third" />
                        </RadioButton.Group>
                    </OptionsBox>

                    <OptionsBox>
                        <RadioButton.Group
                            onValueChange={(value) => setQuestao1Opcao5(value)}
                            value={questao1Opcao5}
                        >
                            <Options style={{width: '30%'}}>Derivativos, COE e Private Equity</Options>

                            <RadioButton value="first" />
                            <RadioButton value="second" />
                            <RadioButton value="third" />
                        </RadioButton.Group>
                    </OptionsBox>
                </View>

                <View>
                    <Question>
                        b. Expectativa: Você acredita que, em períodos de mais de três anos, produtos de maior risco, como ações, 
                        são mais atrativos do que produtos de menor risco?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao2(value)}
                        value={questao2}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Não
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Depende
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Sim
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        c. Conforto: Como você reagiria se os seus investimentos caíssem mais de 10% (mesmo que temporariamente)?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao3(value)}
                        value={questao3}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Venderia imediatamente.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Entendo que isso pode acontecer para determinados ativos, mas não para o portfólio como um todo.
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Entendo que o meu portfólio está sujeito a sofrer flutuações dessa magnitude.     
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        d. Expectativa dos investimentos.
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao4(value)}
                        value={questao4}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                    Não admito perder nada do capital investido. Procuro um retorno seguro e sem oscilações. Segurança é mais importante do que rentabilidade. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Não admito perder nada do capital investido, no entanto, posso arriscar uma parte do capital para alcan.ar resultados melhores que a renda fixa tradicional. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Posso correr riscos para conseguir uma rentabilidade acima da média, no entanto, prezo a preservação de 100% do capital investido. Divido minhas preferências entre segurança e rentabilidade, mas ainda prefiro segurança à rentabilidade. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="fourth" />
                                <Options>
                                Admito perdas de até 20% do capital investido, se a proposta de investimento gerar possibilidade de altos retornos. A procura por rentabilidade é mais importante do que segurança. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="fifth" />
                                <Options>
                                    Minha prioridade é maximizar a rentabilidade, com segurança em segundo plano. Posso correr grandes riscos para obter elevados retornos, admitindo perder mais de 20% do meu principal investido. 
                                </Options>
                            </OptionsContainer>
                        </View>
                    </RadioButton.Group>
                </View>

                <View>
                    <Question>
                        e. Formação acadêmica e experiência profissional: Você considera que sua formação acadêmica e/ou experiência profissional lhe traz conhecimento sobre o mercado financeiro?
                    </Question>
                    <RadioButton.Group
                        onValueChange={(value) => setQuestao5(value)}
                        value={questao5}
                    >
                        <View>
                            <OptionsContainer>
                                <RadioButton value="first" />
                                <Options>
                                Nenhum ou pouco conhecimento para entender a relação risco-retorno de produtos complexos. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="secound" />
                                <Options>
                                    Algum conhecimento para entender a relação risco-retorno de produtos complexos. 
                                </Options>
                            </OptionsContainer>

                            <OptionsContainer>
                                <RadioButton value="third" />
                                <Options>
                                    Conhecimento para entender a relação risco-retorno de produtos complexos. 
                                </Options>
                            </OptionsContainer>

                        </View>
                    </RadioButton.Group>
                </View>

                {/* <Button onPress={() => props.navigation.navigate('SuitabilityTwo')} > */}
                <Button>    
                    <TextButton> Continuar </TextButton>
                </Button>

            </ScrollView>
        </SafeAreaView>
    )
}

export const SuitabilityTwo = {
    screen: FormSuitabilityTwo,
    navigationOptions: {
        headerTitle: "Etapa 2"
    }
}