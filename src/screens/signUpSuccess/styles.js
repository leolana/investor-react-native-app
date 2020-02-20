import styled from 'styled-components/native'

import {
    white,
    tealish

} from '../../assets/colors'

export const SafeAreaView = styled.SafeAreaView`
    margin: 24px;
    justify-content: center;
    flex: 0.8;
`

export const Title = styled.Text`
    font-size: 28px;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    margin-bottom: 32px;
`

export const Text = styled.Text`
    font-size: 16px;
    font-family: ${props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    text-align: center;
`

export const Button = styled.TouchableOpacity`
    margin-top: ${props => props.marginTop || 0}px;
    background: ${ props => props.background || tealish }
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    justify-content: center;

`

export const ButtonText = styled.Text`
    font-size: 16px;
    font-family: 'HelveticaNeue-Bold';
    color: ${ props => props.color || white }
`