import React, { useState, useEffect } from 'react';

import { tealish, greenishBlue } from '../../../../assets/colors';

import { SafeAreaView, Header, CardPage } from '../../styles';

import { SkeletonContainer } from './styles';

import { SkeletonBone } from '../../../../components';

import { Animated, Easing, Dimensions, ActivityIndicator } from 'react-native';

const { width } = Dimensions.get('screen');

export const Loading = (props) => {
  // props

  const { loading } = props;

  // State

  const [translate] = useState(new Animated.Value(0));

  // Methods

  // Effects

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translate, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease,
          delay: 1200,
        }),
        Animated.timing(translate, {
          toValue: 0,
          easing: Easing.ease,
          duration: 600,
        }),
      ]),
    ).start();
  }, [translate]);

  const renderSkeleton = () => (
    <>
      <Header colors={[tealish, greenishBlue]} />

      <CardPage>
        <SkeletonContainer>
          <ActivityIndicator size="large" />
        </SkeletonContainer>
      </CardPage>
    </>
  );

  // Effects

  // Render

  return <>{loading ? renderSkeleton() : props.children}</>;
};
