import styled from 'styled-components/native';

import { grey66, greyDD, greenTwo, white } from '../../assets/colors';

import { IconBack } from '../../assets/icons';

export const Arrow = styled(IconBack)`
  transform: rotate(270deg);
`;

export const SafeAreaView = styled.SafeAreaView`
  margin: 16px;
`;

export const FieldInput = styled.TouchableOpacity`
    border: 1px solid ${greyDD};
    height: 40px;
    align-self: stretch;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: ${(props) => props.width || 'auto'}
    margin-bottom: 16px;
    margin-top: 5px;


`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  color: ${grey66};
`;

export const FieldText = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Regular;
  color: ${grey66};
`;

export const Buttom = styled.TouchableOpacity`
  margin-top: 16px;
  background: ${greenTwo};
  align-self: stretch;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ButtomText = styled.Text`
  font-size: 13px;
  font-family: OpenSans-Bold;
  color: ${white};
`;
