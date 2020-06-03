import React, { useState, useEffect } from 'react';

import { Linking } from 'react-native';

import { RadioButton, Text } from 'react-native-paper';

import { SafeAreaView, Button, ButtonText, ScrollView, ContainerLine, TextLine, Title, TextLineBold } from './styles';

import { UrlTermosCondicoes, UrlPoliticaPrivacidade } from '../../services';
import { Request, UrlCadastroInvestidorAtualizar } from '../../services';
import { useSelector } from 'react-redux';

export const SignUpInvestorStepFourteenComponent = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [AceitaContratoConfidencialidade, setAceitaContratoConfidencialidade] = useState(false);
  const idInvestidor = useSelector((store) => store.investor.dadosInvestidor._id);

  const checkButton = () => {
    if (AceitaContratoConfidencialidade) {
      setAceitaContratoConfidencialidade(false);
    } else {
      setAceitaContratoConfidencialidade(true);
    }
  };

  const atualizarDadosInvestidor = async () => {
    const resp = await Request.PUT({
      url: UrlCadastroInvestidorAtualizar(idInvestidor, 8),
      data: { AceitaContratoCofidencialidade: true },
      header: 'bearer',
    });

    console.log(resp.data);
    if (resp.status === 200) {
      props.navigation.navigate('SignUpInvestorStepFifteen');
    }
  };

  useEffect(() => {
    setDisabled(AceitaContratoConfidencialidade == false);
  }, [AceitaContratoConfidencialidade]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>Esse é o último passo do seu cadastro de Investidor</Title>

        <TextLine>
          Confirmo que as informações e documentos fornecidos são verdadeiros e concordo expressamente com o inteiro
          teor dos{' '}
          <TextLineBold onPress={() => Linking.openURL(UrlTermosCondicoes)}>
            {' '}
            Termos e Condições Gerais de Uso
          </TextLineBold>{' '}
          e<TextLineBold onPress={() => Linking.openURL(UrlPoliticaPrivacidade)}>
            {' '}
            Política de Provacidade
          </TextLineBold>{' '}
          , ficando desde já obriagado e sujeito aos direitos e obrigações oriundos dos instrumentos.
        </TextLine>

        <ContainerLine>
          <RadioButton
            value={false}
            status={AceitaContratoConfidencialidade ? 'checked' : 'unchecked'}
            onPress={checkButton}
          />

          <Text>CONFIRMO E CONCORDO</Text>
        </ContainerLine>

        <Button disabled={disabled} onPress={atualizarDadosInvestidor}>
          <ButtonText>CONTINUAR</ButtonText>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SignUpInvestorStepFourteen = {
  screen: SignUpInvestorStepFourteenComponent,
  navigationOptions: {
    headerTitle: 'Cadastro de Investidor',
  },
};
