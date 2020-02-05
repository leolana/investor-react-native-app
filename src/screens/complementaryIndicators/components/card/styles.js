import styled from 'styled-components/native'

import {
    greyDD
} from '../../../../assets/colors'

import {
    IconBack
} from '../../../../assets/icons'

import LinearGradient from 'react-native-linear-gradient'


export const Arrow = styled(IconBack)`
    transform: scaleX(-1);
    margin-right: 10px;

`

export const Container = styled.View`
    border: 1px solid ${greyDD};
    border-radius: 5px;
    padding: 10px;
    position: relative;
`

export const Title = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Content = styled.View` 
    background: ${ props => props.background || greyDD};
    padding: 10px;
    border-radius: 5px;
    margin-top: ${ props => props.marginTop || 10}px;
    justify-content: center;
    align-items: center;
`

export const ItemTitle = styled.Text`
    font-size: 11px;
    font-family: HelveticaNeue-Bold;
    text-align: center;
`

export const ItemText = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    text-align: center;
`

export const Item = styled(LinearGradient)`
    flex: 1;
    margin: 5px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
`

export const InfoText = styled.Text`
    margin: 16px;
    font-size: 12px;
    font-family: HelveticaNeue;
`

export const Circle = styled.View`
    transform: translateY(-25px);
    width: 25px
    height: 25px;
    border-radius: 50px;
    background: ${ props => props.background || greyDD};


`