import React, { useState } from 'react';

import { withNavigation } from 'react-navigation';

import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { TouchableWithoutFeedback, Animated, Easing, Dimensions, Platform } from 'react-native';

import { SafeAreaView, Backdrop, Card, Indicator } from './styles';

const SheetModalComponent = (props) => {
  // Props

  const { navigation, children } = props;

  // State

  const [translateY] = useState(new Animated.Value(0));

  // Vars

  const { height } = Dimensions.get('window');

  const translateYSheetClosed = height;

  // Methods

  const closeSheet = (value) => (value === translateYSheetClosed ? navigation.goBack() : null);

  translateY.addListener(({ value }) => closeSheet(value));

  const createAnimate = (toValue, duration = 550, delay) =>
    Animated.timing(translateY, {
      toValue,
      duration,
      delay,
      easing: Easing.ease,
      useNativeDriver: true,
    });

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      const opened = translationY >= 100;

      createAnimate(opened ? translateYSheetClosed : 0).start();
    }
  };

  // Render

  return (
    <>
      <TouchableWithoutFeedback onPress={() => createAnimate(translateYSheetClosed).start()}>
        <Backdrop />
      </TouchableWithoutFeedback>

      <PanGestureHandler onGestureEvent={onPanGestureEvent} onHandlerStateChange={onHandlerStateChange}>
        <Card
          style={[
            {
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 350],
                    outputRange: [0, 350],
                  }),
                },
              ],
            },
          ]}
        >
          {Platform.select({
            ios: <Indicator />,
            android: null,
          })}

          <SafeAreaView>{children}</SafeAreaView>
        </Card>
      </PanGestureHandler>
    </>
  );
};

export const SheetModal = withNavigation(SheetModalComponent);
