import styled from 'styled-components/native'

import { 
    grey99,
    greyDD
} from '../../assets/colors'

export const SafeAreaView  = styled.SafeAreaView`
    flex: 1
`

export const ScrollView = styled.ScrollView`
    padding: 16px;
`

export const ItemTitle = styled.Text`
    font-family: HelveticaNeue-Bold;
    font-size: 14px;
    margin-bottom: ${props => props.marginBottom || 5}px;
`

export const ItemText = styled.Text`
    font-family: ${ props => (props.bold) ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    font-size: 14px;
    color: ${grey99}
    margin-bottom: ${props => props.marginBottom || 0}px;
`

export const Divisor = styled.View`
    background: ${greyDD};
    height: 1px;
    align-self: stretch;
    margin: 10px 0;
`

