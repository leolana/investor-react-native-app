import styled from 'styled-components/native'

import {
    grey70,
    greyF1,
    black

} from '../../assets/colors'

export const SafeAreaView = styled.SafeAreaView`
    margin: 16px;
` 

export const Title = styled.Text`
    font-size: 22px;
    font-family: HelveticaNeue-Bold;
    margin-bottom: 16px;

`


export const ItemTitle = styled.Text`
    font-size: 12px;
    font-family: HelveticaNeue;
    color: ${grey70};
`

export const ItemText = styled.Text`
    font-size: 22px;
    font-family: HelveticaNeue-Bold;
    color: ${ props => props.color || black };
    margin-bottom: 10px;
`

export const InfoCard = styled.View`
    background: ${greyF1};
    border-radius: 5px;
`

export const InfoText = styled.Text`
    font-size: 8px;
    font-family: HelveticaNeue;
    padding: 10px;

`