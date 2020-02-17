import React, { useState, useEffect } from 'react'

import  {
    BackgroundGradiant,
    Container,
    Item,
    ItemText,
    ItemTitle,
    Circle,
    CircleText

} from './styles'

import { 
    tealish, 
    greenishBlue

} from '../../../../assets/colors'

import {
    formatMoney
} from '../../../../utils'

export const CardInput = props => {

    const [ value, setValue ] = useState(500)

    const [ year, setYear ] = useState(1)


    useEffect( () => {

        props.onChange(value, year)

    }, [value,year])


    return (
        <BackgroundGradiant 
            colors={[greenishBlue, tealish]} 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        >

            <Container>

                <Item>
                    <ItemTitle>Valor do investimento</ItemTitle>
                    <ItemText>{formatMoney(value)}</ItemText>
                </Item>

                <Circle disabled={(value === 500)} onPress={ () => setValue( value - 500 )} >
                    <CircleText>-</CircleText>
                </Circle>

                <Circle onPress={ () => setValue( value + 500 )} >
                    <CircleText>+</CircleText>
                </Circle>


            </Container>

            <Container divisor={true} >

                <Item>
                    <ItemTitle>Tempo de investimento</ItemTitle>
                    <ItemText>{year} ano</ItemText>
                </Item>

                <Circle disabled={(year === 1)} onPress={ () => setYear( year - 1 )} >
                    <CircleText>-</CircleText>
                </Circle>

                <Circle disabled={(year === 5)} onPress={ () => setYear( year + 1 )} >
                    <CircleText>+</CircleText>
                </Circle>


            </Container>

        </BackgroundGradiant>

    )
}