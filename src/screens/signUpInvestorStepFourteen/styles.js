import styled from 'styled-components/native'

import {
    white,
    tealish,
    grey99
} from '../../assets/colors'

export const SafeAreaView = styled.View`
    margin-horizontal: 16px;
    margin-vertical: 50px;
    
`

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ?  grey99 : tealish }
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 80%;
    align-self: center
`

export const ContainerLine = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: 16px;
    font-family: 'HelveticaNeue-Bold';
    color: ${ white }
`
export const ScrollView = styled.ScrollView`
`

export const TextLine = styled.Text`
    font-size: 16;
    margin-bottom: 15px;
    text-align: justify
`
export const TextLineBold = styled.Text`
    font-size: 16;
    margin-bottom: 15px;
    text-align: justify;
    font-weight: bold;
`

export const Title = styled.Text`
    font-size: 22;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    margin-bottom: 20px;
`