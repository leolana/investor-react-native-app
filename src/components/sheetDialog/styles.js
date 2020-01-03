import styled from 'styled-components/native'

import {
    Dimensions,
    Animated
} from 'react-native'

import {
    black,
    white,
} from '../../assets/colors'

const screen = Dimensions.get('window')

const screenWidth = screen.width

const screenHeight = screen.height



export const Backdrop = styled.View`
    flex: 1;
    background: ${black};
    opacity: 0.55;
`

export const BackdropAnimated = styled(Animated.View)`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: ${screenWidth};
    height: ${screenHeight};

`

export const BackdropOnClick = styled.TouchableWithoutFeedback`
    flex: 1;
`

export const Card = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${white};
    width: ${screenWidth};
    height: ${props => props.height || 350 }px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

`