import React, { useState } from 'react';

import { Title, Text, Container, FlatList, Dots, PageIndicator } from './styles';

import { Dimensions, Animated } from 'react-native';

import { white } from '../../../../assets/colors';

export const Slider = () => {
  // states

  const [scrollX] = useState(new Animated.Value(0));

  // vars

  const deviceWidth = Dimensions.get('window').width;

  const translateX = scrollX.interpolate({
    inputRange: [0, deviceWidth],
    outputRange: [0, 20],
  });

  const informations = [
    {
      title: 'Maiores rentabilidades',
      description: 'Total transparencia nas informações',
      id: 0,
    },
    {
      title: 'Uma nova classe de investimento',
      description: 'Existe uma maneira melhor de investir, descubra conosco.',
      id: 1,
    },
    {
      title: 'Uma ideia',
      description: 'Juntos vamos reinventar o sistema bancário ultrapassado e garantir um melhor negócio para todos.',
      id: 2,
    },
  ];

  // methods

  const createInformationsView = ({ title, description }) => (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Container>
  );

  return (
    <>
      <FlatList
        horizontal
        data={informations}
        renderItem={({ item }) => createInformationsView(item)}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
      />

      <PageIndicator>
        <Dots background={white} position="absolute" style={{ transform: [{ translateX }] }} />

        <Dots />
        <Dots />
        <Dots />
      </PageIndicator>
    </>
  );
};
