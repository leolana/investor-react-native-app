import styled from 'styled-components/native'

import {
    grey99,
    greyDD
} from '../../assets/colors'


import { Dimensions, Animated } from 'react-native'


const { width } =  Dimensions.get('screen')


export const Container = styled.View`
    border: 1px solid ${greyDD};
    height: 80px;
    flex-direction: row;

`

export const Touchable = styled.TouchableOpacity`
    width: ${width / 4}
    align-items: center;
    justify-content: center;
`


export const Text = styled(Animated.Text)`
    font-family: HelveticaNeue-Bold;
    font-size: 12px;
    margin-top: 5px;

    ${
        props => {
            if(!props.isSelected) return `color: ${grey99};`
        }
    }

`