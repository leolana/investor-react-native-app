import styled from 'styled-components/native'


import { Platform } from 'react-native'



export const SafeAreaView = styled.SafeAreaView`
    

    ${Platform.select({
        android:`margin-bottom: 16px;`
    })}
`