import styled from 'styled-components/native'

import { tealish, white } from '../../assets/colors.js';

export const TouchableOpacity = styled.TouchableOpacity`
    align-self: stretch;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 40px;
    background-color: ${props => props.backgroundColor || tealish};

`

export const Text = styled.Text`
    font-size: 18px;
    color: ${props => props.color || white};;
    font-weight: bold;
    letter-spacing: .5;

`
