import React, { useState, useEffect } from 'react'

import {  
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 

} from 'react-native-responsive-screen'

import {
    Container,
    ChartArea,
    LegendArea

} from './styles'

import {
    tealish,
    greenishBlue,
} from '../../../../assets/colors'


import {
    Bar,
    Legend
} from './components'

export const Chart = props => {

    const {
        tabName,
        data
    } = props

    const [ collapse, setCollapse ] = useState(false)

    const getKey = name => {

        const obj ={
            'Poupança': 'Poupanca',
            'CDB': 'CDB',
            'IOUU': 'IOUU',
            'Tesouro Direto': 'Tesouro'

        }

        return obj[name]
    }

    
    useEffect( () => {

        setCollapse(tabName === 'IOUU')

    }, [tabName])

    return (
        <Container>
            <ChartArea> 

                <Bar 
                    initialX={wp(20.3)}
                    collapse={collapse}
                    color={'#6EC30A'}
                    percente={data[getKey(tabName)]}
                    hideOnCollapse={true}
                />

                <Bar 
                    initialX={-wp(20.3)}
                    collapse={collapse}
                    colors={[tealish, greenishBlue]}
                    percente={data.IOUU}
                />

         
            </ChartArea>

            <LegendArea> 

                <Legend 
                    initialX={wp(20.3)}
                    collapse={collapse}
                    hideOnCollapse={true}
                    title="Total investido"
                    text={`2000`}
                    
                />

                <Legend 
                    initialX={-wp(20.3)}
                    collapse={collapse}
                />

         
            </LegendArea>

        </Container>
    )
}