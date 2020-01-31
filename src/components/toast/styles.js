import styled from 'styled-components/native'

import { 
    white
} from '../../assets/colors'

import { Dimensions, Animated } from 'react-native'

const { width } = Dimensions.get('screen')


export const SafeArea = styled(Animated.View)`
    width: ${width};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 128px;

`

export const Container = styled.View`
    min-height: 38px;
    border-radius: 24px;
    padding: 4px 16px;
    background: ${ props => props.background };
    justify-content: center;
    align-items: center;
    min-width: 128px;
    max-width: ${width}px;
    flex-direction: row;

`

export const Text = styled.Text`
    font-size: 16px
    font-family: HelveticaNeue;
    color: ${white};
    margin: 0 10px;

`