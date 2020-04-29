import React, { useState, useEffect } from 'react';

import { Skeleton, SkeletonGradiant } from './styles';

import { skeletonBone, skeletonHighlight } from '../../assets/colors';

import { Animated } from 'react-native';

const AnimatedGradiant = Animated.createAnimatedComponent(SkeletonGradiant);

export const SkeletonBone = (props) => {
  // States

  const [skeleton] = useState(new Animated.Value(0));

  // Vars
  const value = props.value || skeleton;
  const gradIn = Animated.timing(skeleton, { toValue: 1, duration: 1000, delay: 250, useNativeDriver: true });
  const gradOut = Animated.timing(skeleton, { toValue: 0, duration: 1000, useNativeDriver: true });

  const styledGradiant = {
    transform: [
      {
        translateX: value.interpolate({
          inputRange: [0, 1],
          outputRange: [-props.width || -200, props.width || 200],
        }),
      },
    ],
  };

  // Effects

  useEffect(() => {
    const sequence = Animated.sequence([gradIn, gradOut]);

    Animated.loop(sequence).start();
  }, [gradIn, gradOut]);

  // Render

  return (
    <Skeleton width={props.width} height={props.height} distance={props.distance}>
      <AnimatedGradiant
        style={styledGradiant}
        colors={[skeletonBone, skeletonHighlight, skeletonBone]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
    </Skeleton>
  );
};
