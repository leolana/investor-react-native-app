import React, { useState } from 'react';
import { View, CheckBox } from 'react-native';

import { SafeAreaView, Title, Text, Box, Button, ButtonText } from './styles';

export const FormSuitabilityThree = (props) => {
  const [checked, setChecked] = useState('true');

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
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <CheckBox />
            <Text>ACEITAR</Text>
          </View>
        </Box>

        <Button onPress={() => props.navigation.navigate('SuitabilityFour')}>
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
