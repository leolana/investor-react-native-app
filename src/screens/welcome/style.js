import styled from 'styled-components/native'

import IconIOUU from '../../assets/imgs/icons/ico-iouu.svg'

import LinearGradient from 'react-native-linear-gradient'

import { tealish, white } from '../../assets/colors.js'

import { Dimensions, Animated } from 'react-native'

const deviceWidth = Dimensions.get('window').width

const deviceHeight = Dimensions.get('window').height


export const Logo = styled(IconIOUU)`
  position: absolute;
  top: 64px;
  left: ${(deviceWidth / 2) - 60}

`

export const Dots = styled(Animated.View)`
  position: ${props => props.position || 'relative'};
  width: 8px;
  height: 8px;
  border-radius: 16px;
  background: ${props => props.background || 'rgba(0,0,0, 0.2)'};

`

export const PageIndicator = styled.View`
  position: absolute;
  top: ${deviceHeight / 2};
  left: ${(deviceWidth - 50) / 2};
  flex-direction: row;
  justify-content: space-between
  width: 50px;

`

export const BackgroundGradiant = styled(LinearGradient)`
  flex: 1;
`

export const FlatList = styled(Animated.FlatList)`
  height: ${deviceHeight};
`

export const Square = styled.View`
    position: absolute;
    width: 300px;
    height: 300px;
    background: ${props => props.color};
    opacity: ${props => props.alpha};
    transform: rotate( ${props => props.rotate} ) scale( ${props => props.scale} );
    border-radius: ${props => props.radius};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`

export const Title = styled.Text`
    color: ${tealish};
    font-family: Helvetica-Bold;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;

`

export const Text = styled.Text`
    color: ${white};
    font-family: Helvetica;
    font-size: 16px;
    text-align: center;

`

export const Container = styled.View`
  width: ${deviceWidth};
  padding: 0 16px;
  height: ${ deviceHeight / 1.3 };
  justify-content: center;
  align-items: center;

`

export const Image = styled.Image`
  width: 30px;
  height: 30px;

`

export const Buttons = styled.View`
  width: ${deviceWidth};
  padding: 0 16px;
  position: absolute;
  bottom: 64px;
`