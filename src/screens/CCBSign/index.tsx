import React, { useState } from 'react';

import { SafeAreaView, Field, Text, Title, Bottom, BottomText, AnimatedView, ScrollView } from './styles';

import { grey66, white } from '../../assets/colors';

import { IconInfoYellow } from '../../assets/icons';

import { TouchableOpacity, Animated, Easing, Linking } from 'react-native';

import { UrlLinkCCBImprimir } from '../../services';

import { ConfirmPassword } from './components';

import { useSelector } from 'react-redux';

export const CCBSignComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [confirmPassword, setConfirmPassword] = useState(false);

  const [opacity] = useState(new Animated.Value(1));

  // vars

  const data = navigation.getParam('data', null);

  const name = useSelector((store) => store.account.accountData.Nome);

  // methods

  const createAnimation = (toValue) =>
    Animated.timing(opacity, {
      toValue,
      duration: 650,
      easing: Easing.ease,
    });

  const startTransition = () => {
    createAnimation(0).start(() => {
      setConfirmPassword(true);

      createAnimation(1).start();
    });
  };

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <AnimatedView style={{ opacity }}>
          <IconInfoYellow />

          <Title>{name}, falta assinar sua CCB</Title>

          <Field>
            <Text>{data.CodigoBMP}</Text>

            <TouchableOpacity onPress={() => Linking.openURL(UrlLinkCCBImprimir(data.CodigoBMP))}>
              <Text color={grey66}>Visualizar</Text>
            </TouchableOpacity>
          </Field>

          {confirmPassword ? (
            <ConfirmPassword data={data} />
          ) : (
            <>
              <Bottom onPress={() => startTransition()}>
                <BottomText color={white} bold={true}>
                  ASSINAR
                </BottomText>
              </Bottom>

              <Bottom background="transparent" onPress={() => navigation.goBack()}>
                <BottomText>Cancelar</BottomText>
              </Bottom>
            </>
          )}
        </AnimatedView>
      </ScrollView>
    </SafeAreaView>
  );
};

export const CCBSign = {
  screen: CCBSignComponent,
  navigationOptions: {
    headerTitle: 'Assinar CCB',
  },
};
