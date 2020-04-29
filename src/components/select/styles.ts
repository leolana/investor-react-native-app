import styled from 'styled-components/native';

import { greyDD, grey99 } from '../../assets/colors';

export const Container = styled.View`
    border: 1px solid ${greyDD}
    border-radius: 5px;
    height: 41px;
    justify-content: center;
    padding: 0 10px;
    margin-bottom: 32px;
    
`;
export const InputText = styled.Text`
  font-size: 16px;
  font-family: HelveticaNeue;
`;

export const Text = styled.Text`
  color: ${grey99};
  margin-bottom: 5px;
  font-size: 12px;
  align-self: stretch;
  font-family: HelveticaNeue;
`;
