import styled from 'styled-components/native'

import {
    messageBoxBackground, 
    grey99,
    white
} from '../../assets/colors'


export const Margin = styled.View`
    margin: 16px;
`

export const Container = styled.View`
    border-radius: 5px;
    background: ${messageBoxBackground};
    padding: 16px;
    margin-top: 5px;

`

export const Title = styled.Text`
    font-size: 12px;
    font-family: Montserrat-ExtraBold;
    color: ${grey99};

` 

export const Text = styled.Text`
    font-size: 16px;
    font-family: Montserrat-ExtraBold;
    color: ${white};

`

export const TouchableText = styled.Text`
    font-size: 13px;
    font-family: HelveticaNeue;
    color: ${white};

`

export const Touchable = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;

`