import styled from 'styled-components/native'

import ButtomComponent from '../../../../components/buttom'

import { white, greyEE, grey99, black } from '../../../../assets/colors.js';


export const Card = styled.View`
    background: ${props => props.background || greyEE } ;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.8);
`

export const Header = styled.View`
    flex-direction: row;
    padding: 5px;
    height: 27px;
`

export const Text= styled.Text`
    font-size: 14px;
    color: ${white};
    font-family: HelveticaNeue-Medium;
`

export const Flex5 = styled.Text`
    flex: 5
`

export const Body = styled.View`
    flex-direction: row;
    background: ${white};
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    min-height: 91px;
`

export const Circle = styled.View`
    background: ${props => props.background || greyEE } ;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    justify-content: center;
`

export const Score = styled.Text`
    align-self: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: ${white};
    font-family: HelveticaNeue-Medium;
`

export const Title = styled.Text`
    font-size: 13px;
    font-weight: bold;
    font-family: HelveticaNeue-Medium;
`

export const Content = styled.Text`
    font-size: 12px;
    color: ${grey99}
    margin-top: 5px;
    font-family: HelveticaNeue-Medium;
`

export const Bold = styled.Text`
    font-weight: bold;
    color: ${black};
    font-family: HelveticaNeue-Medium;
`

export const Container = styled.View`
    flex: 1;
    margin: 0 10px;
`

export const Box = styled.View`
    border-radius: 5px;
    width: 80px;
    height: 60px;
    background-color: ${greyEE};
`

export const Center = styled.View`
    height: 35px;
    padding: 0 5px;
    align-items: center;
    justify-content: center;
`

export const Subtitle = styled.Text`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    font-family: HelveticaNeue-Medium;
`


export const Buttom = styled(ButtomComponent)`
`