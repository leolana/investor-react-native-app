import styled from 'styled-components/native'

import {
    black,
    white,
} from '../../assets/colors'

import {
    Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('screen')
 
export const Backdrop = styled.View`
    width: ${width};
    height: ${height};
    background: ${black};
    opacity: 0.55;
`


export const Container = styled.View`
    position: absolute;
    top: ${ props => (height / 2) - (props.height / 2) || 'auto' };
    left: 32px;
    width: ${width - 64}px;
    height: ${ props => props.height || 'auto'};
    border-radius: 5px;
    background: ${white}
    padding: 10px;

`
