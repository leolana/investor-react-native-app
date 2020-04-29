import styled from 'styled-components/native';

import { white, tealish, greyDD, grey99, grey66 } from '../../assets/colors';

export const Title = styled.Text`
  font-size: 24;
  font-family: HelveticaNeue-Bold;
  text-align: center;
  marginbottom: 20px;
`;
export const SafeAreaView = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 50px;
  alignitems: center;
`;

export const Container = styled.View`
  border-radius: 5px;
  padding: 20px;
  margin: 25px;
  width: 350px;
  border: ${greyDD};
  justifycontent: center;
`;

export const ContainerTitle = styled.Text`
    fontSize: 16px;
    fontWeight: bold,
    color: ${grey99};
    alignSelf: center;
`;

export const Note = styled.Text`
    fontSize: 14px
    fontWeight: bold,
    color: ${grey66};
`;
export const Text = styled.Text`
    fontSize: 14;
    fontWeight: bold,
    color: ${grey66};
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    marginTop: 15px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'HelveticaNeue-Bold';
  color: ${white};
`;
