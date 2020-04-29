import React, { useState, useEffect } from 'react';

import { LegendContainer, Item, ItemTitle, ItemText } from './styles';

import { Animated } from 'react-native';

import { IconIouu } from '../../../../../../assets/icons';

import { tealish } from '../../../../../../assets/colors';

export const Legend = (props) => {
  const { initialX, collapse, hideOnCollapse, title, text, tabName } = props;

  const [translateX] = useState(new Animated.Value(0));

  const baseAnimation = (target, toValue, duration) =>
    Animated.timing(target, {
      toValue,
      duration,
      useNativeDriver: true,
    });

  useEffect(() => {
    if (collapse) baseAnimation(translateX, 0, 250).start();
    else baseAnimation(translateX, 1, 250).start();
  }, [collapse, translateX]);

  return (
    <LegendContainer
      style={{
        opacity: hideOnCollapse ? translateX : 1,
        transform: [{ translateX: translateX.interpolate({ inputRange: [0, 1], outputRange: [initialX, 0] }) }],
      }}
    >
      {tabName === 'IOUU' && !collapse ? (
        <IconIouu fill={tealish} width={64} height={64} />
      ) : (
        <Item>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>{text}</ItemText>
        </Item>
      )}
    </LegendContainer>
  );
};
