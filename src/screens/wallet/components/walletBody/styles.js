import styled from 'styled-components/native'

import {
    IconCash,
    IconCoin,
} from '../../../../assets/icons'

import { 
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native'

import {
    greenTwo,
    white,
} from '../../../../assets/colors'


export const IconCashStyled = styled(IconCash)`
    margin-right: 5px;
`

export const IconCoinStyled = styled(IconCoin)`
    margin-right: 5px;
`

export const ButtonsArea = styled.View`
    padding: 16px;
    margin: 16px;
    margin-bottom: 0;
    padding-bottom: 0;
    border-radius: 5px;
    transform: translateY(-100px);
    background: ${white};
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    background: ${greenTwo};
    align-self: stretch;
    height: 38px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: ${white}

`



