import styled from 'styled-components/native'

import {
    greyDD
} from '../../assets/colors'

import {
    IconBack
} from '../../assets/icons'


export const Arrow = styled(IconBack)`
    transform: scaleX(-1);

`

export const SafeAreaView = styled.SafeAreaView`
`

export const ScrollView = styled.ScrollView`
    padding: 16px;
`

export const Content = styled.View`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${greyDD};
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-family: HelveticaNeue;
    font-size: 14px;
`



