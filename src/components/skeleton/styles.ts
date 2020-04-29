import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { skeletonBone } from '../../assets/colors';

export const Skeleton = styled.View`
  background: ${skeletonBone};
  overflow: hidden;
  width: ${(props) => props.width || 200}px;
  height: ${(props) => props.height || 20}px;
  margin-bottom: ${(props) => props.distance || 0}px;
  border-radius: 5px;
`;

export const SkeletonGradiant = styled(LinearGradient)`
  flex: 1;
`;
