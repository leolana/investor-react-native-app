

import { grey99, greyDD, tealish} from '../../assets/colors.js'

import styled from 'styled-components/native'

export const Text = styled.Text`
    color: ${grey99};
    margin-bottom: 5px;
    font-size: 12px;
    align-self: stretch;

`

const focus = enabled => {

    if(enabled) return `
        border-bottom-color: ${tealish};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `

    return ``
}

export const TextInput = styled.TextInput`
    ${props => focus(props.focus)};
    border-color: ${greyDD};
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 16px;
    border-width: 1px;
    border-radius: 5px;
    font-family: HelveticaNeue;
    height: 40px;
    font-size: 16px;
    align-self: stretch;
`

