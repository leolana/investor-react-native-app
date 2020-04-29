import styled from 'styled-components/native';

import { grey66, greenTwo } from '../../../../assets/colors';

import { ITextInput } from '../../../../components';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const TextInput = styled(ITextInput)`
  text-align: center;
  width: ${width - 32}px;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  font-family: HelveticaNeue;
  color: ${grey66};
  text-align: center;
  width: ${width - 64}px;
  margin-bottom: 16px;
`;

export const Bottom = styled.TouchableOpacity`
  margin-bottom: 5px;
  width: ${width - 32}px;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.background || greenTwo};
`;

export const BottomText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${(props) => (props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue')};
  color: ${(props) => props.color || grey66};
`;
