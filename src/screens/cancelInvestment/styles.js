import styled from 'styled-components/native'

import { 
    grey66, 
    redTwo, 
    white

} from '../../assets/colors'

import {
    ITextInput
} from '../../components'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')


export const TextInput = styled(ITextInput)`
    width: ${width - 128}px
    height: 100px;
`

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    margin-top: 16px;
    color: ${redTwo};
`

export const Text = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue;
    text-align: center;
    color: ${grey66};
    margin-top: 16px;

`

export const Bottom = styled.TouchableOpacity`
    margin-bottom: 5px;
    width: ${width - 128}px
    border-radius: 5px;
    padding: 10px;
    background: ${ props => props.background || redTwo };
`

export const BottomText = styled.Text`
    text-align: center;
    font-size: 16px;
    font-family: ${props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    color: ${ props => props.color || white}
`