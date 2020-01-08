import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import {
    Platform
} from 'react-native'


export const View = styled.SafeAreaView`
    flex: 1;

    ${Platform.select({
        android:`margin-bottom: 16px;`
    })}
`

export const SafeAreaHeader = styled.View`
    height: 400px;

`

export const Header = styled(LinearGradient)`
    position: relative;
    align-self: stretch;
    height: 300px;
    padding: 16px;

`




