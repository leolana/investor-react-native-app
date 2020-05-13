import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { Request } from '../../services';

import { SafeAreaView, Title, Text, Box, Button, ButtonText } from './styles';

import { useSelector } from 'react-redux';

export const FormSuitabilityThree = (props) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const idSuitability = useSelector(({ idSuitability }) => idSuitability);

  const SuitabilityThree = {
    checked,
    stepType: 'next',
  };

  const checkButton = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const saveSuitability = async (data) => {
    const resp = await Request.PUT({
      url: `https://server-test.iouu.com.br/api/v1/suitability/${idSuitability}/investidor`,
      data: data,
    });
  };

  const nextStep = () => {
    saveSuitability(SuitabilityThree);
    props.navigation.navigate('SuitabilityFour');
  };

  useEffect(() => {
    setDisabled(!checked);
  }, [checked]);

  return (
    <SafeAreaView>
      <Title>Confirmação do seu Perfil de Investimento</Title>

      <Text>
        Se houver diferença entre o nível de capacidade de risco (item 1) e tolerância ao risco (item 2), o menor
        resultado entre eles será considerado como o seu Perfil de Risco.
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Box>
          <Text>
            Confirmo que as informações fornecidas são verdadeiras e que devo atualiza-las caso haja alterações e sempre
            que for solicitado.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Checkbox value={false} status={checked ? 'checked' : 'unchecked'} onPress={checkButton} />
            <Text>ACEITAR</Text>
          </View>
        </Box>

        <Button disabled={disabled} onPress={nextStep}>
          <ButtonText>SUBMETER RESPOSTAS</ButtonText>
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
