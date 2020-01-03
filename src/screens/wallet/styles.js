import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import {
    IconCash,
    IconCoin,
    IconWalletCash

} from '../../assets/icons'

import { 
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform
} from 'react-native'

import {
    greenTwo,
    white,
    greyDD,
} from '../../assets/colors'


export const IconCashStyled = styled(IconCash)`
    margin-right: 5px;
`

export const IconCoinStyled = styled(IconCoin)`
    margin-right: 5px;
`

export const IconWalletCashStyled = styled(IconWalletCash)`
    transform: rotate(15deg);
    position: absolute;
    top: ${props => props.y || 0}px;
    left: ${props => props.x || 0}px;
    opacity: 0.1;
`

export const View = styled.View`
    flex: 1;


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

export const ButtonsArea = styled.View`
    padding: 16px;
    margin: 16px;
    margin-bottom: 0;
    padding-bottom: 0;
    border-radius: 5px;
    transform: translateY(-100px);
    background: ${white};
`

export const Button = styled(Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback
}))`
    flex-direction: row;
    background: ${greenTwo};
    align-self: stretch;
    height: 38px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue-Bold;
    color: ${white}

`

export const Item = styled.View`
   margin-bottom: 16px;

   ${ props => (props.withoutMargim) ? `
        margin: 0px;
   ` : null}

`

export const ItemRight = styled.View`
    align-items: flex-end;
    
    
`

export const ItemArea = styled.View`
    transform: translateY(-10px);
    position: relative;
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: flex-end;

`

export const ItemTitle = styled.Text`
    width: ${ props => (props.width) ? `${props.width }px` : 'auto'};
    font-size: 12px;
    font-family: HelveticaNeue;
    color: ${white}
    text-align: ${props => props.textAlign || 'left'};
`

export const ItemText = styled.Text`
    font-size: ${ props => props.fontSize || 22 }px;
    font-family: HelveticaNeue-Bold;
    color: ${white}
`

export const TitleDivisor = styled.Text`
    font-family: HelveticaNeue-Bold;
    font-size: 14px;
    align-self: stretch;

`

export const Divisor = styled.View`
    border-color: ${greyDD};
    border-bottom-width: 1px;
    margin: 0 16px;
    padding-bottom: 5px;
`




