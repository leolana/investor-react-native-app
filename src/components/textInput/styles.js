

import { 
    grey99, 
    greyDD, 
    tealish,
    redTwo
} from '../../assets/colors.js'

import styled from 'styled-components/native'

export const Text = styled.Text`
    color: ${grey99};
    margin-bottom: 5px;
    font-size: 12px;
    align-self: stretch;

`

const focus = ({focus, error}) => {

    if(error) return `
        border-bottom-color: ${redTwo};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `

    else if(focus) return `
        border-bottom-color: ${tealish};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `

    return ``
}

export const TextInput = styled.TextInput`
    ${props => focus(props)};
    border-color: ${greyDD};
    padding-left: 10px;
    padding-right: 10px;
    border-width: 1px;
    border-radius: 5px;
    font-family: HelveticaNeue;
    height: 40px;
    font-size: 16px;
    align-self: stretch;
`
export const ErrorMessage =  styled.Text`
    font-family: HelveticaNeue;
    font-size: 14px;
    color: ${redTwo}
    text-align: left;
    align-self: stretch;
    margin-top: 4px;
    margin-bottom: 12px;

`
