import styled from 'styled-components/native'

import {
    tealish,
    grey99

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
    margin-bottom: 10;
    color: ${grey99};
    width: 90%;
`
export const OptionsContainer = styled.View `
    flex-direction: row;
    justify-content: center
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    background: ${tealish};
    align-self: stretch;
    height: 38px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 28px;
`

export const Text = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: white
`

