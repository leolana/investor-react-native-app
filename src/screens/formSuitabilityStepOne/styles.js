import styled from 'styled-components/native'

import {
    tealish,
    grey99,
    white

} from '../../assets/colors'

export const ScrollView = styled.ScrollView`
    padding: 10px;
`
export const SafeAreaView = styled.SafeAreaView`
    margin: 12px;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 24;
    font-family: HelveticaNeue-Bold;
    text-align: center;
`

export const Question = styled.Text`
    font-size: 16;
    font-family: HelveticaNeue-Bold;
    text-align: justify;
    margin-bottom: 10;
    margin-top: 20;
    fontWeight: bold,
`

export const Options = styled.Text`
    font-size: 14;
    font-family: HelveticaNeue;
    text-align: justify;
    color: ${grey99};
    width: 90%;
`
export const OptionsContainer = styled.View `
    flex-direction: row;
    alignItems: center;
    marginBottom: 10;
`

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ?  grey99 : tealish }
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-vertical: 20px
`

export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: ${white};
`

