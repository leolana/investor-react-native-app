import styled from 'styled-components/native'

import {
    white,
} from '../../../../assets/colors'

export const Item = styled.View`
   margin-bottom: 16px;

   ${ props => (props.withoutMargim) ? `
        margin: 0px;
   ` : null}

`

export const ItemRight = styled.View`
    align-items: flex-end;
    
    
`

export const ItemArea = styled.View`
    transform: translateY(-10px);
    position: relative;
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: flex-end;

`

export const ItemTitle = styled.Text`
    width: ${ props => (props.width) ? `${props.width }px` : 'auto'};
    font-size: 12px;
    font-family: HelveticaNeue;
    color: ${white}
    text-align: ${props => props.textAlign || 'left'};
`

export const ItemText = styled.Text`
    font-size: ${ props => props.fontSize || 22 }px;
    font-family: HelveticaNeue-Bold;
    color: ${white}
`
