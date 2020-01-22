import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import { white } from '../../assets/colors'


export const ScrollView = styled.ScrollView`
`

export const SafeAreaView = styled.SafeAreaView`
    background: ${white}
`

export const SafeAreaHeader = styled.View`
    height: 350px;

`

export const Header = styled(LinearGradient)`
    position: relative;
    align-self: stretch;
    height: 300px;
    padding: 16px;

`




