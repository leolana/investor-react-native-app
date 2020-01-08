import styled from 'styled-components/native'

import {
    greyDD,
    grey70,
} from '../../../../assets/colors'

export const Touchable = styled.TouchableOpacity`


`

export const Card = styled.View`
    border: 1px solid ${greyDD};
    border-radius: 5px;
    padding: 10px;
    margin: 0 16px;
    margin-bottom: 16px;

`

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-color: ${greyDD};
    border-bottom-width: 1px;
    padding-bottom: 5px;

`


export const DateText = styled.Text`
    width: 75px;
    font-size: 11px;
    font-family: HelveticaNeueBold;
    color: ${grey70};
    text-align: right;

`

export const Title = styled.Text`
    flex: 14;
    font-size: 11px;
    font-family: HelveticaNeueBold;

`

export const Text = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-family: HelveticaNeueBold;
    color: ${ props => props.color }

`

