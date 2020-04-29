import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const BackgroundGradiant = styled(LinearGradient)`
  flex: 1;
`;
export const Square = styled.View`
  position: absolute;
  width: 300px;
  height: 300px;
  background: ${(props) => props.color};
  opacity: ${(props) => props.alpha};
  transform: rotate(${(props) => props.rotate}) scale(${(props) => props.scale});
  border-radius: ${(props) => props.radius};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;
