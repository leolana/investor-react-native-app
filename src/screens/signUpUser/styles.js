import styled from 'styled-components/native'

import {
    ITextInput
} from '../../components'

import {
    tealish,
    grey99,
    white
} from '../../assets/colors'


export const SafeAreaView = styled.SafeAreaView`
    margin: 16px;
    flex: 1;

`

export const TextInput = styled(ITextInput)`
`

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ? grey99 : tealish}
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 16px 0;

`

export const ButtonText = styled.Text`
    padding: 10px;
    font-family: HelveticaNeue-Bold;
    font-size: 18px;
    color: ${white};

`
