import styled from 'styled-components/native'


import {
    greyDD
} from '../../assets/colors'

export const SafeAreaView = styled.SafeAreaView`
    margin: 16px;

`

export const Title = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold
`


export const Divisor = styled.View`
    background: ${greyDD};
    height: 1px;
    align-self: stretch;
    margin: 16px 0;
`