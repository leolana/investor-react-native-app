import styled from 'styled-components/native';

import { greyDD, grey99, greyF7, tealish, black, greenTwo, white } from '../../../../assets/colors';

export const Retangle = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${greyDD};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  flex: 0.96;
  font-size: 14px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
  color: ${(props) => props.color || black};
`;

export const Divisor = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
  padding: 16px 0;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const ItemTitle = styled.Text`
  color: ${grey99};
  font-size: 10px;
  font-family: OpenSans-Bold;
  text-align: center;
`;

export const ItemText = styled.Text`
  font-size: 15px;
  font-family: OpenSans-Bold;
  text-align: center;
`;

export const ItemWithDivisor = styled.View`
  border-right-width: 1px;
  border-color: ${greyDD};
  flex: 1;
`;

export const ItemWithoutDivisor = styled.View`
  flex: 1;
`;

export const ProgressArea = styled.View`
  margin: 16px 0;
`;

export const ProgressTitle = styled.Text`
  font-family: HelveticaNeue;
  font-size: 14px;
  color: ${grey99};
`;

export const ProgressText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: ${black};
`;

export const ProgressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProgressBar = styled.View`
  position: relative;
  background: ${greyF7};
  height: 20px;
  border-radius: 100px;
  overflow: hidden;
`;

export const ProgressIndicator = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 11px;
  color: ${black};
  position: absolute;
  left: 49%;
  top: 4px;
`;

export const Progress = styled.View`
  background: ${(props) => props.background || tealish};
  height: 20px;
  border-radius: 100px;
  width: ${(props) => props.completed || 0}%;
`;

export const TextInfo = styled.Text`
  font-size: 10px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
  color: ${(props) => props.color || black};
  text-align: ${(props) => props.textAlign || 'left'};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const InputTitle = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Bold;
  margin-top: 16px;
  text-align: center;
`;

export const InputArea = styled.TouchableOpacity`
  border: 1px solid ${greyDD};
  height: 40px;
  border-radius: 5px;
  margin: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const InputValue = styled.Text`
  font-size: 16px;
  font-family: HelveticaNeue;
  text-align: center;
  color: ${grey99};
`;
