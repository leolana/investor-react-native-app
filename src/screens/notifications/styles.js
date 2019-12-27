import styled from 'styled-components/native'

import {
    greyDD,
    grey66
} from '../../assets/colors'

export const Card = styled.View`
    border-radius: 5px;
    border: 1px solid ${greyDD}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    margin-bottom: 0;
    padding: 10px;

`

export const ContentArea = styled.View`
    width: 260px;
`


export const Title = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
`

export const Text = styled.Text`
    font-size: 14px;
    color: ${ props => props.color || grey66};
    font-family: HelveticaNeue-Medium;
`