import styled from 'styled-components/native'

import { 
    greyDD,
    black,
    grey99
} from '../../assets/colors'

export const ScrollView = styled.ScrollView`
    padding: 16px;
    margin-bottom: 16px
`

export const SafeAreaView = styled.SafeAreaView`
    margin-bottom: 60px;
    flex: 1;

`

export const Title = styled.Text`
    font-family: HelveticaNeue-Bold;
    font-size: 16px;
`

export const ContentArea = styled.View`
    border-color: ${greyDD};
    border-top-width: 1px;
    padding: 10px 0;
    margin: 10px 0;

`

export const ItemDefaultText = styled.Text`
    font-family: ${ props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    font-size: 15px;
    color: ${black};
    margin-bottom: ${ props => props.marginBottom || 0}px;

`

export const ItemDefaultTitle = styled.Text`
    font-family: ${ props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
    font-size: 12px;
    color: ${grey99};

`