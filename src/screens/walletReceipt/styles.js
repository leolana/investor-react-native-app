import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import { Dimensions, Animated, Platform } from 'react-native'

import {
    receiptColor,
    receiptBorderColor,
    receiptTextColor,
} from '../../assets/colors'

const { width } =  Dimensions.get('screen')


export const Container = styled.SafeAreaView`
    flex: 1;

    ${Platform.select({
        android:`margin-bottom: 16px;`
    })}


`

export const Background = styled(LinearGradient)`
    position: absolute;
    width: ${width}px;
    align-self: stretch;
    height: 540px;

`

export const ReceiptArea = styled(Animated.View)`
    margin: 32px;

`

export const ReceiptBody = styled.View`
    background: ${receiptColor};
    border: 2px solid ${receiptBorderColor};
    border-top-width: 0px;
    border-bottom-width: 0px;
    height: auto;
    min-height: 350px;
    align-items: center;

`

export const Content = styled.View`
    width: ${width - 64}px;
    height: auto;
    padding-bottom: 16px;

`

export const ReceiptBorder = styled.Image`
    width: ${width - 64}px;
    height: 14px;
    resize-Mode: contain;

    ${
        props => {

            if(props.side === 'up') {

                return `
                    transform: scale(-1);
                
                `
            }


        }
    }

`

export const Text =  styled.Text`
    font-family: HelveticaNeue;
    font-size: 12px;
    color: ${receiptTextColor};
    text-align: center;
    margin-bottom: ${props => props.marginBottom || 0}px

`

export const Line = styled.View`
    justify-content: space-between;
    margin: 0 10px;
    border: 1px solid ${receiptBorderColor};
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    padding: 8px 0;
    flex-direction: row;

    ${
        props => {

            if(props.withoutBorder) {
                return `
                    border-bottom-width: 0px;
                `
            }

        }
    }
    


`

export const Divisor = styled.View` 
    justify-content: space-between;
    margin: 10px;
    flex-direction: row;
`

export const Info =  styled.Text`
    font-family: HelveticaNeue;
    font-size: 10px;
    color: ${receiptTextColor};
    text-align: center;

`

export const Title =  styled.Text`
    font-family: HelveticaNeue-Bold;
    font-size: 12px;
    color: ${receiptTextColor};

`