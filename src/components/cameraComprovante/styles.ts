import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

import { white, tealish, grey99 } from '../../assets/colors';

export const SafeAreaView = styled.View`
  margin: 16px;
`;

export const Button = styled.TouchableOpacity`
    background: ${(props) => (props.disabled ? grey99 : tealish)}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 15px;

`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  color: ${white};
`;

export const ContainerLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.Text`
  font-size: 25px;
  font-family: OpenSans-Bold;
  text-align: center;
  color: ${white};
  background-color: ${tealish};
`;

const Styles = StyleSheet.create({
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    color: white,
  },
  buttonCloseCamera: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
});

export default Styles;

