import styled from 'styled-components/native'

import {
    tealish,
    grey99,
    grey33,
    black55,
    white,
    greyDD

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
export const Ponderations = styled.Text`
    font-size: 14;
    font-family: HelveticaNeue;
    margin-bottom: 5;
    color: ${grey33};
    width: 80%
`

export const PonderationsContainer = styled.View`
    align-items: center
    margin-bottom: 20
`

export const OptionsBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const Border = styled.View`
    border-bottom-color:  ${greyDD};
    border-bottom-width: 1;
`

export const OptionsBoxTitle = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-left: 35%;
    margin-bottom: 15;
`

export const OptionsBoxTitleText = styled.Text`
    margin-left: 4%
    font-size: 14;
    font-weight: bold;
    color: ${black55};
`

export const Options = styled.Text`
    font-weight: bold;
    font-size: 14;
    font-family: HelveticaNeue;
    text-align: justify;
    color: ${black55};
    width: 90%;

`
export const OptionsContainer = styled.View`
    flex-direction: row;
    alignItems: center;
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

export const TextButton = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: ${white}
`
