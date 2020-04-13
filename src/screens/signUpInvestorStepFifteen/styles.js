import styled from 'styled-components/native'

import { IconIouu } from '../../assets/icons'

import { Dimensions } from 'react-native'

import { tealish } from '../../assets/colors'

const { width } = Dimensions.get('screen')

export const Logo = styled(IconIouu)`
  position: absolute;
  top: 64px;
  left: ${(width / 2) - 60}
`

export const SafeAreaView = styled.View`
    margin-horizontal: 16px;
    margin-vertical: 50px;
`

export const Text = styled.Text`
    fontSize: 18;
    marginBottom: 30px;
    text-align: center;
`

export const Title = styled.Text`
    font-size: 22;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    margin-bottom: 40px;
`

export const Note = styled.Text`
    fontSize: 16;
    marginBottom: 30px;
    text-align: center;
`
export const TextSuitability = styled.Text`
    fontSize: 16;
    marginBottom: 20px;
    text-align: center;
    color: ${tealish}
`

export const TextOpportunities = styled.Text`
    fontSize: 16;
    text-align: center;
`