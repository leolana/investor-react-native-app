import styled from 'styled-components/native'

import { grey99, grey33, tealish } from '../../assets/colors.js';

import { IButtom } from '../../components'

import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    padding: 0 16px;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    top: 80px;

` 
export const Buttom = styled(IButtom)``

export const Welcome = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: ${grey99};
    margin-bottom: 30px;
`
export const Description = styled.Text`
    text-align: center;
    color: ${grey33};
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    color: ${tealish};
`

export const Container = styled.View`
    padding: 16px;
    width: ${deviceWidth};
`

export const ViewCheckbox = styled.View`
    align-self: stretch;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 24px;
`

export const Text = styled.Text`
    color: ${grey99};
    font-size: 14px;
`

export const Switch = styled.Switch`
    transform: scale(0.8);


`