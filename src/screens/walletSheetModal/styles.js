import styled from 'styled-components/native'

import {
    white,
    greyDD
} from '../../assets/colors'


export const Card = styled.View`
    padding: 20px 16px;
    width: 100%;
    height: 200px;
    align-self: stretch;
`

export const Area = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${greyDD};
`

export const Title = styled.Text`
    font-family: HelveticaNeue-Bold;
    font-size: 15px;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-family: HelveticaNeue;
    margin-bottom: ${props => props.marginBottom || 0}px;
    font-size: 12px;
`

export const Item = styled.Text`
    margin-bottom: ${props => props.marginBottom || 0}px;
    font-family: HelveticaNeue-Bold;
    font-size: 12px;

` 

