import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'


import { Dimensions } from 'react-native'


const screenWidth = Dimensions.get('window').width

const drawerWidth = screenWidth - (screenWidth / 4)

import {
    IconBack,
    IconMenu
} from '../../assets/icons'


import {
    twilight,
    white
} from '../../assets/colors'


export const IconGo = styled(IconBack)`
    transform: rotate(180deg);
`

export const MenuHorizontalArea = styled.TouchableOpacity`
    padding: 0 20px

`

export const Header = styled.View`
    background: ${twilight};
    height: 238px;
    flex-direction: column-reverse;
`

export const HeaderContainer= styled.View`
    background: rgba(0,0,0, 0.6);
    height: 150px;
    justify-content: center;
    align-items: center;
`

export const HeaderContent = styled.View`
    transform: translateY(-38px);
    justify-content: center;
    align-items: center;
`


export const View = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    padding-top: 20px;

`

export const Circle = styled(LinearGradient)`
    width: 90px;
    height: 90px;
    border: 4px solid ${white};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`

export const Letter = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 38px;
    color: ${white};
    font-family: HelveticaNeue-Medium;
`

export const Text = styled.Text`
    padding: 2px;
    align-self: stretch;
    text-align: ${ props => props.textAlign || 'center'};
    width: 180px;
    font-weight: ${ props => props.fontWeight || 'normal'};
    font-size: ${ props => props.fontSize || 16}px;
    color: ${white};
    font-family: ${ props => props.fontFamily || 'HelveticaNeue-Medium'};
`

export const ViewList = styled.View`
    width: ${drawerWidth};
    padding: 20px;

`

export const NavigationItem = styled.TouchableOpacity`
    flex-direction: row;
    border-bottom-width: 0.4px;
    border-bottom-color: rgba(255, 255, 255, 0.4);
    padding: 11px 0;
    align-items: center;
    justify-content: space-between;

`