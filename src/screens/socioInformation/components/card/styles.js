import styled from 'styled-components/native'

import {
    greyDD
} from '../../../../assets/colors'

import {
    IconBack
} from '../../../../assets/icons'

export const Arrow = styled(IconBack)`
    transform: scaleX(-1);
    margin-right: 10px;
`

export const Container = styled.View`
    border: 1px solid ${greyDD};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 16px;
`

export const Title = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`