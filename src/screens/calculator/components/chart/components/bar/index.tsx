import React, { useState, useEffect } from 'react';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { BarContainer, ChartBar, ItemTitle, ItemText } from './styles';

import { Animated } from 'react-native';

export const Bar = (props) => {
  const { initialX, collapse, color, colors, percente, hideOnCollapse, title, text } = props;

  const [translate, setTranslate] = useState({
    y: new Animated.Value(0),
    x: new Animated.Value(0),
  });

  const baseAnimation = (target, toValue, duration) =>
    Animated.timing(target, {
      toValue,
      duration,
      useNativeDriver: true,
    });

  useEffect(() => {
    if (collapse) baseAnimation(translate.x, 0, 250).start();
    else baseAnimation(translate.x, 1, 250).start();
  }, [collapse, translate.x]);

  useEffect(() => {
    baseAnimation(translate.y, percente || 0, 250).start();
  }, [translate, percente]);

  return (
    <BarContainer
      style={{
        opacity: hideOnCollapse ? translate.x : 1,
        transform: [
          {
            translateY: translate.y.interpolate({
              inputRange: [0, hp(19)],
              outputRange: [hp(19), 0],
              extrapolate: 'clamp',
            }),
          },
          { translateX: translate.x.interpolate({ inputRange: [0, 1], outputRange: [initialX, 0] }) },
        ],
      }}
    >
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text}</ItemText>

      <ChartBar colors={colors !== undefined ? colors : [color, color]} />
    </BarContainer>
  );
};
