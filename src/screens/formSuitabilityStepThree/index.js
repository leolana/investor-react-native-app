import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { Request } from '../../services';

import { SafeAreaView, Title, Text, Box, Button, ButtonText } from './styles';

export const FormSuitabilityThree = (props) => {
	const [checked, setChecked] = useState(false);
	const checkButton = () => {
		if (test === 'true') {
			setChecked(false);
			setTest('false');
			console.log(typeof checked);
		} else {
			setChecked(true);
			setTest('true');
			console.log(typeof checked);
		}
	};

	const [test, setTest] = useState('');

	const SuitabilityThree = {
		checked,
		step_type: 'next',
	};

	const avancaEtapa = () => {
		if (checked) {
			saveSuitability(SuitabilityThree);
			props.navigation.navigate('SuitabilityFour');
		} else {
            Alert.alert('Por favor confirme as informações fornecidas');
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
			<Title>Confirmação do seu Perfil de Investimento</Title>

			<Text>
				Se houver diferença entre o nível de capacidade de risco (item
				1) e tolerância ao risco (item 2), o menor resultado entre eles
				será considerado como o seu Perfil de Risco.
			</Text>
			<View style={{ alignItems: 'center' }}>
				<Box>
					<Text>
						Confirmo que as informações fornecidas são verdadeiras e
						que devo atualiza-las caso haja alterações e sempre que
						for solicitado.
					</Text>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Checkbox
							value="false"
							status={test === 'true' ? 'checked' : 'unchecked'}
							onPress={checkButton}
						/>
						<Text>ACEITAR</Text>
					</View>
				</Box>

				<Button onPress={avancaEtapa}>
					<ButtonText> SUBMETER RESPOSTAS </ButtonText>
				</Button>
			</View>
		</SafeAreaView>
	);
};

export const SuitabilityThree = {
	screen: FormSuitabilityThree,
	navigationOptions: {
		headerTitle: 'Confirmação',
	},
};
