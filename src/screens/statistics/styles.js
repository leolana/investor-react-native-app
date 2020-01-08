import styled from 'styled-components/native'


import {
    greyDD,
    grey88,
} from '../../assets/colors'

import {
    IconBack
} from '../../assets/icons'

export const ScrollView = styled.ScrollView`
    padding: 0 16px;
    margin-top: 16px;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`


export const Title = styled.Text`
    font-size: 22px;
    font-family: HelveticaNeue-Bold;
`


export const Card = styled.View`
    margin: 16px 0;
    border: 1px solid ${greyDD};
    border-radius: 5px;

`

export const ItemTitle = styled.Text`
    color: ${grey88};
    font-size: 12px;
    font-family: HelveticaNeue-Bold;

`

export const ItemText = styled.Text`
    font-size: 20px;
    font-family: HelveticaNeue-Bold;

`

export const Item = styled.View`
    padding: 16px;
    border-color: ${greyDD};
    border-bottom-width: 1px;

    ${props => (props.withoutBorder) ? `
        border-bottom-width: 0px;
    
    ` : ``}

`
