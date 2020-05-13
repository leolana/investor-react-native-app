import React from 'react';

import { Circle } from './styles';

export const CircleWithChild = (props) => {
  const helperColorsArray = () => {
    if (!Array.isArray(props.background)) {
      return [props.background, props.background];
    }

    return props.background;
  };

  return (
    <Circle colors={helperColorsArray()} {...props}>
      {props.children}
    </Circle>
  );
};
