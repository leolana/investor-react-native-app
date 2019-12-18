import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import {
    greyEE
} from '../../assets/colors'



export const Circle = styled(LinearGradient)`
    width: ${props => props.size || 50 }px;
    height: ${props => props.size || 50 }px;
    border: ${props => props.borderSize || 0 }px solid ${props => props.borderColor || greyEE };
    border-radius: 100px;
    justify-content: center;
`