import styled from 'styled-components/native'

import {
    grey99,
    tealish

} from '../../assets/colors'

export const SafeAreaView = styled.SafeAreaView`
    margin: 14px;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 24;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    margin-bottom: 30px;
`
export const Text = styled.Text`
    font-size: 16;
    font-family: ${props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    text-align: justify;
    color: ${grey99};
    margin: 10px;
`

export const Box = styled.View`
    border-radius: 5px;
    width: 350px;
    height: 130px;
    border: ${grey99};
`

export const Button = styled.TouchableOpacity`
    background: ${tealish};
    height: 50px;
    width: 250px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 28px;
`
export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: white

`

