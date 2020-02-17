import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

import {
    white
} from '../../../../assets/colors'

export const BackgroundGradiant = styled(LinearGradient)`
    height: 152px;
    border-radius: 5px;
    justify-content: center;
`

export const SafeAreaView = styled.SafeAreaView`
    margin: 16px;
` 

export const Title = styled.Text`
    font-size: 22px;
    font-family: HelveticaNeue-Bold;
    margin-bottom: 16px;

`

export const Container = styled.View` 
    padding: 16px;
    border-top-width: ${ props => props.divisor ? 1 : 0};
    border-top-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


export const Item = styled.View` 
    flex: 1;
`

export const ItemTitle = styled.Text`
    font-size: 12px;
    font-family: HelveticaNeue;
    color: ${white};

`

export const ItemText = styled.Text`
    font-size: 25px;
    font-family: HelveticaNeue-Bold;
    color: ${white};

`

export const Circle = styled.TouchableOpacity`
    border: 1px solid ${white};
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 16px;


`

export const CircleText = styled.Text`
    font-size: 24px;
    font-family: HelveticaNeue;
    color: ${white};
`

