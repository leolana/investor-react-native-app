import React from 'react';

import { Square, BackgroundGradiant } from './styles';

import { dusk, twilight, darkDusk } from '../../../../assets/colors';

export const Background = (props) => {
  // Methods

  const createSquare = (...params) => (
    <Square
      color={params[0]}
      alpha={params[1]}
      rotate={params[2]}
      scale={params[3]}
      top={params[4]}
      right={params[5]}
      bottom={params[6]}
      left={params[7]}
      radius={params[8]}
    />
  );

  return (
    <BackgroundGradiant start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0.2 }} colors={[dusk, darkDusk]}>
      {createSquare(twilight, 1, '45deg', 0.2, 'auto', '-20px', '10px', 'auto', '60px')}
      {createSquare(twilight, 0.3, '45deg', 0.3, 'auto', '-20px', '-50px', 'auto', '40px')}
      {createSquare(twilight, 0.3, '45deg', 0.2, '60%', 'auto', 'auto', '-80px', '58px')}
      {createSquare(twilight, 0.5, '45deg', 0.55, '40%', '-120px', 'auto', 'auto', '20px')}
      {createSquare(twilight, 1, '45deg', 0.4, '90px', '0', '0', '-85px', '30px')}
      {createSquare(twilight, 0.55, '45deg', 1.05, '-60px', '0', '0', '-10px', '12px')}

      {props.children}
    </BackgroundGradiant>
  );
};
