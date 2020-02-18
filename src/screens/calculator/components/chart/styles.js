import styled from 'styled-components/native'

import {  
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 

} from 'react-native-responsive-screen'

import {
    white, 
    grey99
} from '../../../../assets/colors'


export const Container = styled.View`
    height: ${hp(35)};
    margin: 16px 0;

`

export const ChartArea = styled.View`
    overflow: hidden;
    height: ${hp(25)};
    padding: 0 32px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: ${grey99};

`

export const LegendArea = styled.View`
    overflow: hidden;
    height: ${hp(8)};
    padding: 0 32px;
    flex-direction: row;
    justify-content: space-between;

`


