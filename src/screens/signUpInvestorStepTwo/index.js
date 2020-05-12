import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import {
	Request,
	UrlLocalizacaoEstadosPegar,
	UrlLocalizacaoCidadesPegar,
} from '../../services';

import Styles, {
<<<<<<< HEAD
    SafeAreaView,
    Button,
    ButtonText,
    Label,
    Error
} from './styles'

import {
    Select
} from '../../components'

export const SignUpInvestorStepTwoComponent = props => {
    
    // states
    
    const [disabled, setDisabled] = useState(true)
    const [valid, setValid] = useState(true)
    const [DataNascimento, setDataNascimento] = useState('')
    const [Naturalidade, setNaturalidade] = useState()
    const [NaturalidadeCidade, setNaturalidadeCidade] = useState('')
    const [apiState, setApiState] = useState([{
        id: "",
        text: "",
        value: ""
    }])
    const [apiCity, setApiCity] = useState([{
        id: "",
        text: "",
        value: ""
    }])


    //vars

    const Investidor = {
        DataNascimento, 
        Naturalidade,
        NaturalidadeCidade, 
    }

    function mapApiState() {

        const optionsState = apiState.map((resp) => {
            return {
                text: resp.nome,
                value: resp.sigla
            }
        })
        return optionsState
    }

    function mapApiCity() {
        getCities()

        const optionsCities = apiCity.map((resp) => {
            return {
                text: resp.nome,
                value: resp.nome
            }
        })

        return optionsCities
    }

    //async functions

    async function myAsyncEffect() {
        await getStates()
    }

    async function getStates() {

        const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar })

        if (resp.status === 200) setApiState(resp.data)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }

    async function getCities() {

        const resp = await Request.GET({ url: UrlLocalizacaoCidadesPegar(Naturalidade) })

        if (resp.status === 200) setApiCity(resp.data)

        else alert('Ocorreu um erro ao obter as informações. Por favor volte mais tarde.')
    }

    //Validate functions

    const isOfAge = (year) => {
        let courentYear = new Date().getFullYear()
        let teste = courentYear - year

        if (teste < 18) return false
        else return true
    }

    const validateDate = () => {
        let valid = false
        let regex = new RegExp("^([0-9]{2})/([0-9]{2})/([0-9]{4})$")
        let matches = regex.exec(DataNascimento)

        if (matches != null) {
            let day = parseInt(matches[1], 10)
            let month = parseInt(matches[2], 10) - 1
            let year = parseInt(matches[3], 10)
            let date = new Date(year, month, day, 0, 0, 0, 0)
            valid = date.getFullYear() == year && date.getMonth() == month && date.getDate() == day
            valid = isOfAge(year)
        }

        if (valid) setValid(true)
        else setValid(false)
    }

    //effect

    useEffect(() => { myAsyncEffect() }, [])

    useEffect(() => {
        setDisabled(
            !valid || 
            DataNascimento === '' || 
            Naturalidade === '' || 
            NaturalidadeCidade === '' 
        )

    }, [valid, DataNascimento, Naturalidade, NaturalidadeCidade])

    //render

    return (
        <SafeAreaView>
            <Label>Data de nascimento</Label>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                value={DataNascimento}
                onChangeText={value => setDataNascimento(value)}
                style={Styles.input}
                onBlur={validateDate}
            />
            {
                !valid ? <Error>Você deve ser maior de 18 anos ou inserir uma data válida</Error>
                    : <View style={{ marginBottom: 30 }}></View>
            }

            <Select
                title={'Estado de nascimento'}
                options={mapApiState()}
                onValueChange={obj => setNaturalidade(obj.value)}
                value={Naturalidade}
            />
            <Select
                title={'Cidade de nascimento'}
                options={mapApiCity()}
                onValueChange={obj => setNaturalidadeCidade(obj.value)}
                value={NaturalidadeCidade}
            />

            <Button /*disabled={disabled}*/ onPress={() => props.navigation.navigate('SignUpInvestorStepThree')} >
                <ButtonText>Continuar</ButtonText>
            </Button>
        </SafeAreaView>
    )
}
=======
	SafeAreaView,
	Button,
	ButtonText,
	Label,
	Error,
} from './styles';

import { Select } from '../../components';

export const SignUpInvestorStepTwoComponent = (props) => {
	// states

	const [disabled, setDisabled] = useState(true);
	const [valid, setValid] = useState(true);
	const [DataNascimento, setDataNascimento] = useState('');
	const [Naturalidade, setNaturalidade] = useState();
	const [NaturalidadeCidade, setNaturalidadeCidade] = useState('');
	const [apiState, setApiState] = useState([
		{
			id: '',
			text: '',
			value: '',
		},
	]);
	const [apiCity, setApiCity] = useState([
		{
			id: '',
			text: '',
			value: '',
		},
	]);

	//vars

	const Investidor = {
		DataNascimento,
		Naturalidade,
		NaturalidadeCidade,
	};

	function mapApiState() {
		const optionsState = apiState.map((resp) => {
			return {
				text: resp.nome,
				value: resp.sigla,
			};
		});
		return optionsState;
	}

	function mapApiCity() {
		getCities();

		const optionsCities = apiCity.map((resp) => {
			return {
				text: resp.nome,
				value: resp.nome,
			};
		});

		return optionsCities;
	}

	//async functions

	async function myAsyncEffect() {
		await getStates();
	}

	async function getStates() {
		const resp = await Request.GET({ url: UrlLocalizacaoEstadosPegar });

		if (resp.status === 200) setApiState(resp.data);
		else
			alert(
				'Ocorreu um erro ao obter as informações. Por favor volte mais tarde.'
			);
	}

	async function getCities() {
		const resp = await Request.GET({
			url: UrlLocalizacaoCidadesPegar(Naturalidade),
		});

		if (resp.status === 200) setApiCity(resp.data);
		else
			alert(
				'Ocorreu um erro ao obter as informações. Por favor volte mais tarde.'
			);
	}

	//Validate functions

	const isOfAge = (year) => {
		let courentYear = new Date().getFullYear();
		let teste = courentYear - year;

		if (teste < 18) return false;
		else return true;
	};

	const validateDate = () => {
		let valid = false;
		let regex = new RegExp('^([0-9]{2})/([0-9]{2})/([0-9]{4})$');
		let matches = regex.exec(DataNascimento);

		if (matches != null) {
			let day = parseInt(matches[1], 10);
			let month = parseInt(matches[2], 10) - 1;
			let year = parseInt(matches[3], 10);
			let date = new Date(year, month, day, 0, 0, 0, 0);
			valid =
				date.getFullYear() == year &&
				date.getMonth() == month &&
				date.getDate() == day;
			valid = isOfAge(year);
		}

		if (valid) setValid(true);
		else setValid(false);
	};

	//effect

	useEffect(() => {
		myAsyncEffect();
	}, []);

	useEffect(() => {
		setDisabled(
			!valid ||
				DataNascimento === '' ||
				Naturalidade === '' ||
				NaturalidadeCidade === ''
		);
	}, [valid, DataNascimento, Naturalidade, NaturalidadeCidade]);

	//render

	return (
		<SafeAreaView>
			<Label>Data de nascimento</Label>
			<TextInputMask
				type={'datetime'}
				options={{
					format: 'DD/MM/YYYY',
				}}
				value={DataNascimento}
				onChangeText={(value) => setDataNascimento(value)}
				style={Styles.input}
				onBlur={validateDate}
			/>
			{!valid ? (
				<Error>
					Você deve ser maior de 18 anos ou inserir uma data válida
				</Error>
			) : (
				<View style={{ marginBottom: 30 }} />
			)}

			<Select
				title={'Estado de nascimento'}
				options={mapApiState()}
				onValueChange={(obj) => setNaturalidade(obj.value)}
				value={Naturalidade}
			/>
			<Select
				title={'Cidade de nascimento'}
				options={mapApiCity()}
				onValueChange={(obj) => setNaturalidadeCidade(obj.value)}
				value={NaturalidadeCidade}
			/>

			<Button
				/*disabled={disabled}*/ onPress={() =>
					props.navigation.navigate('SignUpInvestorStepThree')
				}
			>
				<ButtonText>Continuar</ButtonText>
			</Button>
		</SafeAreaView>
	);
};
>>>>>>> hotfix/telas-investidor

export const SignUpInvestorStepTwo = {
	screen: SignUpInvestorStepTwoComponent,
	navigationOptions: {
		headerTitle: 'Cadastro de Investidor',
	},
};
