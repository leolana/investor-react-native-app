import styled from 'styled-components/native'

import { white, greyEE, grey99, black } from '../../../../assets/colors.js';


export const ViewCard = styled.View`
    border-radius: 5px;
    margin-bottom: 16px;
`

export const Header = styled.View`
    flex-direction: row;
    padding: 5px;
    height: 27px;
`

export const Text= styled.Text`
    font-size: 14px;
    color: ${white};
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
    width: 60px;
    height: 60px;
    border-radius: 100px;
    justify-content: center;
`

export const Score = styled.Text`
    align-self: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: ${white};
`

export const Title = styled.Text`
    font-size: 13px;
    font-weight: bold;
`

export const Content = styled.Text`
    font-size: 12px;
    color: ${grey99}
    margin-top: 5px;
`

export const Bold = styled.Text`
    font-weight: bold;
    color: ${black};
`

export const Container = styled.View`
    flex: 1;
    margin: 0 10px;
`

export const Box = styled.View`
    border-radius: 5px;
    width: 100px;
    height: 70px;
    background-color: ${greyEE};
`

export const Center = styled.Text`
    text-align: center;
    padding: 5px;
`

export const Subtitle = styled.Text`
    flex: 1;
    text-align-vertical: center;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`

export const ButtonText = styled.Text`
    font-size: 14px;
    text-align: center;
    padding: 5px;
    color: ${white};
`

export const Button = styled.TouchableOpacity`
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    width: 100px;
    height: 25px;
`
