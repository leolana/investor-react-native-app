import styled from 'styled-components/native'

import {
    white,
    tealish,
    greyDD,
    grey99,
    grey66,
} from '../../assets/colors'

export const Title = styled.Text`
    font-size: 22;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    marginBottom: 20px;
`
export const SafeAreaView = styled.View`
    margin-horizontal: 16px;
    margin-vertical: 50px;
    alignItems: center
`

export const Note = styled.Text`
    fontSize: 14;
    fontWeight: bold,
    color: ${grey66};
`
export const Text = styled.Text`
    fontSize: 14;
    fontWeight: bold,
    color: ${grey66};
`

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ?  grey99 : tealish }
    border-radius: 5px;
    padding: 10px;
    marginTop: 30px;
    marginBottom: 30px;
    justify-content: center;
    align-items: center;
    width: 80%
`

export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: 'HelveticaNeue-Bold';
    color: ${white};
`