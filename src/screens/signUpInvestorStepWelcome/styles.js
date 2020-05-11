import styled from 'styled-components/native'

import { IconIouu } from '../../assets/icons'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Logo = styled(IconIouu)`
  position: relative;
  bottom: 30;
  left: ${(width / 2) - 60};
`
import {
    white,
    tealish,
    grey99,
    redTwo
} from '../../assets/colors'

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

export const Button = styled.TouchableOpacity`
    background: ${ props => props.disabled ? grey99 : tealish}
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: 16px;
    font-family: 'HelveticaNeue-Bold';
    color: ${ white}
`