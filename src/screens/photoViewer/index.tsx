import React, { useRef } from 'react';

import { FlatList } from 'react-native';

import { tealish } from '../../assets/colors';

import { Controllers, SafeAreaView, Container, Img, Arrow, Touchable } from './styles';

export const PhotoViewerComponent = (props) => {
  // props

  const { navigation } = props;

  // vars

  const listRef = useRef(null);

  let currentIndex = 0;

  const data = navigation.getParam('data', []);

  // methods

  const renderItem = ({ item }) => (
    <Container>
      <Img source={{ uri: item }} />
    </Container>
  );

  const scrollTo = (indicator) => {
    const formatedIndex = currentIndex + indicator;

    if (formatedIndex > data.length - 1 || formatedIndex < 0) return;

    listRef.current.scrollToIndex({ index: currentIndex + indicator });
  };

  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    currentIndex = viewableItems[0].index;
  };

  // render

  return (
    <SafeAreaView>
      <FlatList
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        onViewableItemsChanged={onViewableItemsChanged.bind(this)}
        ref={listRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        renderItem={renderItem}
        horizontal={true}
        key={(item) => item.index}
      />

      <Controllers>
        <Touchable onPress={() => scrollTo(-1)}>
          <Arrow stroke={tealish} />
        </Touchable>

        <Touchable onPress={() => scrollTo(1)}>
          <Arrow side="right" stroke={tealish} />
        </Touchable>
      </Controllers>
    </SafeAreaView>
  );
};

export const PhotoViewer = {
  screen: PhotoViewerComponent,
  navigationOptions: ({ navigation }) => {
    return {
      headerTitle: 'Imagens',
    };
  },
};
