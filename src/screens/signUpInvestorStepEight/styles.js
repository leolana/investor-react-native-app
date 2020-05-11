import styled from 'styled-components/native'

import {
    ITextInput
} from '../../components'

export const TextInput = styled(ITextInput)`
`

import {
    white,
    tealish,
    grey99
} from '../../assets/colors'

export const SafeAreaView = styled.View`
    margin: 16px;
`

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ?  grey99 : tealish }
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    marginTop: 30px;
`

export const ContainerLine = styled.View`
    flexDirection: row;
    alignItems: center;

`

export const ButtonText = styled.Text`
    font-size: 16px;
    font-family: 'HelveticaNeue-Bold';
    color: ${ white }
`

export const TextLine = styled.Text`
    fontSize: 14;
    color: ${tealish};
    fontWeight: bold;
    marginBottom: 15px;
`