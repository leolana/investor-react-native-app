import styled from 'styled-components/native'

import { grey99, grey33, tealish } from '../../assets/colors.js';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    padding: 16px;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    top: 80px;

` 

export const Welcome = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${grey99};
    margin: 24px;
`
export const Description = styled.Text`
    text-align: center;
    color: ${grey33};
    font-size: 36px;
    font-weight: bold;
    color: ${tealish};
`

export const ViewLogin = styled.View`
    align-self: stretch;
    color: ${grey33};
    font-size: 36px;
    font-weight: bold;
    color: ${tealish};
    margin-top: 30px;


`

export const ViewCheckbox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 24px;
`

export const Text = styled.Text`
    color: ${grey99};
    font-size: 14px;
`