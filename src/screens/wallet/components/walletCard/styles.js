import styled from 'styled-components/native'

import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from  'react-native'

import {
    greyDD,
    grey70,
} from '../../../../assets/colors'

export const Touchable = styled(Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback
}))`


`

export const Card = styled.View`
    border: 1px solid ${greyDD};
    border-radius: 5px;
    padding: 10px;
    margin: 0 16px;
    margin-bottom: 16px;

`

export const HeaderArea = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    border-color: ${greyDD};
    border-bottom-width: 1px;
    padding-bottom: 5px;


`


export const DateText = styled.Text`
    font-size: 11px;
    font-family: HelveticaNeue-Bold;
    color: ${grey70};
    flex: ${ props => props.isWithoutYear ? 2 : 4 };

`

export const Title = styled.Text`
    flex: 14;
    font-size: 11px;
    font-family: HelveticaNeue-Bold;

`

export const Text = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-family: HelveticaNeue-Bold;
    color: ${ props => props.color }

`

