import React, { useState } from 'react';

import { View, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';

import { Request } from '../../services';

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
    OptionTitle,
} from './styles';

export const FormSuitabilityTwo = (props) => {
	const [RendaFixa, setRendaFixa] = useState('');
	const [FundosMultimercados, setFundosMultimercados] = useState('');
	const [RendaVariavel, setRendaVariavel] = useState('');
	const [FundosImobiliarios, setFundosImobiliarios] = useState('');
	const [Derivativos, setDerivativos] = useState('');

	const [ExpectativaAtrativos, setExpectativaAtrativos] = useState('');
	const [Conforto, setConforto] = useState('');
	const [Expectativa, setExpectativa] = useState('');
	const [Formacao, setFormacao] = useState('');

	const AvaliacaoRisco = {
		RendaFixa,
		FundosMultimercados,
		RendaVariavel,
		FundosImobiliarios,
		Derivativos,
		ExpectativaAtrativos,
		Conforto,
		Expectativa,
		Formacao,
	};

	const SuitabilityTwo = {
		AvaliacaoRisco,
		step_type: 'next',
	};

	const avancaEtapa = () => {
		if (
			RendaFixa === '' ||
			FundosMultimercados === '' ||
			RendaVariavel === '' ||
			FundosImobiliarios === '' ||
			Derivativos === '' ||
			Derivativos === '' ||
			ExpectativaAtrativos === '' ||
			Conforto === '' ||
			Expectativa === '' ||
			Formacao === ''
		) {
			Alert.alert('Todas a opçoes devem ser preenchias');
		} else {
			saveSuitability(SuitabilityTwo);
			props.navigation.navigate('SuitabilityThree');
		}
	};

	const saveSuitability = async (data) => {
		let resp = await Request.PUT({
			url: `https://server-test.iouu.com.br/api/v1/suitability/5eab1accf2ca13001a1ee7a9/investidor`,
			data: data,
		});

		console.log(resp.data);
	};

	return (
		<SafeAreaView>
			<ScrollView>
				<Title>2. Avaliação de tolerância a risco</Title>

				<View>
					<Question>
						a. Conhecimento e Experiência: Informe o seu grau de
						conhecimento e experiência, o volume e a frequência das
						operações em cada uma das classes de produtos, levando
						em consideração as ponderações abaixo:
					</Question>

					<PonderationsContainer>
						<Ponderations>
							Baixo: Não tenho familiaridade com o produto ou a
							classe de ativo.
						</Ponderations>

						<Ponderations>
							Médio: Compreendo as características e os riscos,
							porém não tenho nem realizei investimento no produto
							ou na classe de ativo, em volumes superiores a 5% da
							minha carteira há mais de 2 anos.
						</Ponderations>

						<Ponderations>
							Alto: Tenho e/ou realizei investimentos no produto
							ou na classe em volumes superiores a 5% da minha
							carteira há mais de 2 anos.
						</Ponderations>
					</PonderationsContainer>

                    <OptionTitle>Alto</OptionTitle>
					<OptionsBox>
						<RadioButton.Group
							onValueChange={(value) => setRendaFixa(value)}
							value={RendaFixa}
						>
							<Options style={{ width: '30%' }}>
								Renda fixa
							</Options>

							<RadioButton value="1" />
							<RadioButton value="2" />
							<RadioButton value="3" />
						</RadioButton.Group>
					</OptionsBox>

					<OptionsBox>
						<RadioButton.Group
							onValueChange={(value) =>
								setFundosMultimercados(value)
							}
							value={FundosMultimercados}
						>
							<Options style={{ width: '30%' }}>
								Fundos multimercados e estruturados
							</Options>

							<RadioButton value="1" />
							<RadioButton value="2" />
							<RadioButton value="3" />
						</RadioButton.Group>
					</OptionsBox>

					<OptionsBox>
						<RadioButton.Group
							onValueChange={(value) => setRendaVariavel(value)}
							value={RendaVariavel}
						>
							<Options style={{ width: '30%' }}>
								Renda variável
							</Options>

							<RadioButton value="1" />
							<RadioButton value="2" />
							<RadioButton value="3" />
						</RadioButton.Group>
					</OptionsBox>

					<OptionsBox>
						<RadioButton.Group
							onValueChange={(value) =>
								setFundosImobiliarios(value)
							}
							value={FundosImobiliarios}
						>
							<Options style={{ width: '30%' }}>
								Fundos imobiliários
							</Options>

							<RadioButton value="1" />
							<RadioButton value="2" />
							<RadioButton value="3" />
						</RadioButton.Group>
					</OptionsBox>

					<OptionsBox>
						<RadioButton.Group
							onValueChange={(value) => setDerivativos(value)}
							value={Derivativos}
						>
							<Options style={{ width: '30%' }}>
								Derivativos, COE e Private Equity
							</Options>

							<RadioButton value="1" />
							<RadioButton value="2" />
							<RadioButton value="3" />
						</RadioButton.Group>
					</OptionsBox>
				</View>

				<View>
					<Question>
						b. Expectativa: Você acredita que, em períodos de mais
						de três anos, produtos de maior risco, como ações, são
						mais atrativos do que produtos de menor risco?
					</Question>
					<RadioButton.Group
						onValueChange={(value) =>
							setExpectativaAtrativos(value)
						}
						value={ExpectativaAtrativos}
					>
						<View>
							<OptionsContainer>
								<RadioButton value="1" />
								<Options>Não</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="2" />
								<Options>Depende</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="3" />
								<Options>Sim</Options>
							</OptionsContainer>
						</View>
					</RadioButton.Group>
				</View>

				<View>
					<Question>
						c. Conforto: Como você reagiria se os seus investimentos
						caíssem mais de 10% (mesmo que temporariamente)?
					</Question>
					<RadioButton.Group
						onValueChange={(value) => setConforto(value)}
						value={Conforto}
					>
						<View>
							<OptionsContainer>
								<RadioButton value="1" />
								<Options>Venderia imediatamente.</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="2" />
								<Options>
									Entendo que isso pode acontecer para
									determinados ativos, mas não para o
									portfólio como um todo.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="3" />
								<Options>
									Entendo que o meu portfólio está sujeito a
									sofrer flutuações dessa magnitude.
								</Options>
							</OptionsContainer>
						</View>
					</RadioButton.Group>
				</View>

				<View>
					<Question>d. Expectativa dos investimentos.</Question>
					<RadioButton.Group
						onValueChange={(value) => setExpectativa(value)}
						value={Expectativa}
					>
						<View>
							<OptionsContainer>
								<RadioButton value="1" />
								<Options>
									Não admito perder nada do capital investido.
									Procuro um retorno seguro e sem oscilações.
									Segurança é mais importante do que
									rentabilidade.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="2" />
								<Options>
									Não admito perder nada do capital investido,
									no entanto, posso arriscar uma parte do
									capital para alcan.ar resultados melhores
									que a renda fixa tradicional.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="3" />
								<Options>
									Posso correr riscos para conseguir uma
									rentabilidade acima da média, no entanto,
									prezo a preservação de 100% do capital
									investido. Divido minhas preferências entre
									segurança e rentabilidade, mas ainda prefiro
									segurança à rentabilidade.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="4" />
								<Options>
									Admito perdas de até 20% do capital
									investido, se a proposta de investimento
									gerar possibilidade de altos retornos. A
									procura por rentabilidade é mais importante
									do que segurança.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="5" />
								<Options>
									Minha prioridade é maximizar a
									rentabilidade, com segurança em segundo
									plano. Posso correr grandes riscos para
									obter elevados retornos, admitindo perder
									mais de 20% do meu principal investido.
								</Options>
							</OptionsContainer>
						</View>
					</RadioButton.Group>
				</View>

				<View>
					<Question>
						e. Formação acadêmica e experiência profissional: Você
						considera que sua formação acadêmica e/ou experiência
						profissional lhe traz conhecimento sobre o mercado
						financeiro?
					</Question>
					<RadioButton.Group
						onValueChange={(value) => setFormacao(value)}
						value={Formacao}
					>
						<View>
							<OptionsContainer>
								<RadioButton value="1" />
								<Options>
									Nenhum ou pouco conhecimento para entender a
									relação risco-retorno de produtos complexos.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="2" />
								<Options>
									Algum conhecimento para entender a relação
									risco-retorno de produtos complexos.
								</Options>
							</OptionsContainer>

							<OptionsContainer>
								<RadioButton value="3" />
								<Options>
									Conhecimento para entender a relação
									risco-retorno de produtos complexos.
								</Options>
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

export const SuitabilityTwo = {
	screen: FormSuitabilityTwo,
	navigationOptions: {
		headerTitle: 'Etapa 2',
	},
};
