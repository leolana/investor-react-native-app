import styled from 'styled-components/native'


import {
    grey99, 
    white,
    greenTwo,
    greyDD

} from '../../assets/colors'


import {
    IconBack
} from '../../assets/icons'

export const IconArrowRight = styled(IconBack)`
    transform: rotate(180deg);

`

export const TouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-color: ${greyDD};
    border-bottom-width: 1px;
`

export const LinkTitle = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
`

export const SafeAreaView = styled.SafeAreaView`
 
`


export const ScrollView = styled.ScrollView`
    padding: 16px;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 18px;
    font-family: HelveticaNeue;
` 

export const Subtitle = styled.Text`
    font-size: 14px;
    font-family: HelveticaNeue;
` 

export const LoanType = styled.Text` 
    font-size: 12px;
    color: ${grey99}
    font-family: HelveticaNeue;
`

export const Score = styled.Text`
    font-size: 15px;
    color: ${grey99}
    font-family: HelveticaNeue-Bold;
`

export const ScoreCircle = styled.View`
    width: 17px;
    height: 17px;
    border-radius: 34px;
    background: ${ props => props.background || grey99 };
    margin-right: 5px;
`

export const Buttom = styled.TouchableOpacity`
    margin: 5px 0;
    width: 111px;
    background: ${greenTwo};
    border-radius: 5px;
    padding: 5px 10px;
`

export const ButtomText = styled.Text`
    font-size: 10px;
    color: ${white}
    font-family: HelveticaNeue-Bold;
`

export const Text = styled.Text`
    margin-left: 10px;
    flex: 1
    font-size: 12px;
    font-family: ${ props => props.bold ? 'HelveticaNeue-Bold' : 'HelveticaNeue'};
`

export const Item = styled.View`
    padding: 10px;
    border: 1px solid ${greyDD};
    border-radius: 5px;
    margin-top: 16px;


    ${
        props => {

            if(props.borderColor) return `
                border-left-width: 3px;
                border-left-color: ${props.borderColor};
            `
        }
    }

`

export const ItemTitle = styled.Text`
    font-size: 10px;
    color: ${grey99}
    font-family: HelveticaNeue-Bold;

`

export const ItemText = styled.Text`
    font-size: 15px;
    font-family: HelveticaNeue-Bold;

`

export const Divisor = styled.View`
    background: ${greyDD}
    height: 1px;
    align-self: stretch;
    margin: 10px 0;
`



export const DivisorTitle = styled.Text`
    font-size: 16px;
    font-family: HelveticaNeue-Bold;
    margin-top: 16px;

` 



