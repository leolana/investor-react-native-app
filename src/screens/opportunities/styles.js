import styled from 'styled-components/native'

import { white } from '../../assets/colors'

import { IconFilter } from '../../assets/icons'

export const Filter = styled(IconFilter)`
    margin-right: 12px;

`

export const LoadingContainer = styled.View`
    padding: 10px;
`

export const SafeAreaView = styled.SafeAreaView`
    background: ${white};
`