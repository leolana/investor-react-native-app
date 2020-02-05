import styled from 'styled-components/native'

import {
    grey99,
    greyDD,
    tealish,
} from '../../../../assets/colors'

export const Item = styled.View`
    border: 1px solid ${greyDD};
    border-radius: 5px;
    border-left-width: 3px;
    border-left-color: ${tealish};
    padding: 10px;
    margin-bottom: 16px;

`

export const ItemTitle = styled.Text`
    font-family: HelveticaNeue-Bold;
    color: ${grey99};
    font-size: 10px;

`

export const Divisor = styled.View`

    background: ${greyDD};
    align-self: stretch;
    height: 1px;
    margin: 10px 0;

`



