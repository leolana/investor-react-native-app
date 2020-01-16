import styled from 'styled-components/native'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen') 

export const SkeletonContainer = styled.View`
    padding-top: 80px;
    width: ${width - 64}
    height: auto;
    align-items: center;

`