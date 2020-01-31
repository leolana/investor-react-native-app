import styled from 'styled-components/native'

import { 
    ITextInput
} from '../../components'

import {
    Dimensions,
} from 'react-native'

import { 
    grey99, 
    black, 
    white,
    greenTwo
} from '../../assets/colors'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    padding: 16px;
    padding-bottom: 6px;
`

export const TextInput = styled(ITextInput)`
    text-align: center;
`

export const InfoText = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue;
    color: ${grey99};
    margin-top: 16px;

`

export const Text = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
    color: ${black};

`

export const Buttom = styled.TouchableOpacity`
    background: ${ props => {

        if(props.background && !props.disabled) return props.background

        else if(props.disabled) return grey99

        else return greenTwo


    } };
    border-radius: 5px;
    height: 40px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin-bottom: 10px;
`

export const ButtomText = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue;
    color: ${ props => props.color || white };
`