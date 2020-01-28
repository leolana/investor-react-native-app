import styled from 'styled-components/native'

import {
    greyTwo,
    grey99,
    white,
    greenTwo,
} from '../../assets/colors'

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`

export const ScrollView = styled.ScrollView`

    padding: 16px;


`

export const Item = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: ${ props => props.width || 'auto' };
    margin-bottom: 2px;
`


export const Title = styled.Text`
    font-size: 18px;
    font-family: HelveticaNeue-Light;
    flex: 4;

`

export const Score = styled.Text`
    margin-left: 10px;
    font-size: 15px;
    font-family: HelveticaNeue-Bold;
    color: ${greyTwo};

`

export const Subtitle = styled.Text`
    font-size: 12px;
    font-family: ${ props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue' };
    color: ${greyTwo};
    margin-bottom: 16px;

`

export const TextCNPJ = styled.Text`
    font-size: 15px;
    font-family: HelveticaNeue;
    margin: 2px 0;

`

export const Buttom = styled.TouchableOpacity`
    height: 40px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: ${ props => props.disabled ? grey99 : greenTwo};
    margin-bottom: 16px;
`

export const ButtomText = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
    text-align: center;
    color: ${white};
`
