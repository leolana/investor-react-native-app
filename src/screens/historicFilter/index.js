import React, { useState } from 'react'


import { 
    SafeAreaView,
    Row,
    Text,
    FieldInput,
    FieldText,
    Arrow,
    Buttom,
    ButtomText
} from './styles'

import {
    grey99
} from '../../assets/colors'

import {
    formatDate
} from '../../utils'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')


export const HistoricFilterComponent = props => {

    // props

    const { navigation } = props

    // states

    const [ type, setType ] = useState({ text: 'Empréstimo Coletivo', value: 'coletivo' })

    const [ dateFrom, setDateFrom ] = useState( new Date() )

    const [ dateTo, setDateTo ] = useState( new Date() )

    const [ score, setScore ] = useState({ text: 'Todos',  value: 'A-B-C-D-E-HR' })

    // vars

    const typeParams = { 
        options: [
            { text: 'Empréstimo Coletivo', value: 'coletivo' },
            { text: 'Empréstimo Social',  value: 'social' },
        ],
        onValueChange: value => setType(value),
        data: type
    }

    const scoreParams = { 
        options: [
            { text: 'AA', value: 'AA' },
            { text: 'A',  value: 'A' },
            { text: 'B',  value: 'B' },
            { text: 'C',  value: 'C' },
            { text: 'D',  value: 'D' },
            { text: 'E',  value: 'E' },
            { text: 'HR',  value: 'HR' },
            { text: 'Todos',  value: 'A-B-C-D-E-HR' },
        ],
        onValueChange: value => setScore(value),
        data: score
    }

    const dateFromParams = {
        onDateChanged: value => setDateFrom(value),
        date: dateFrom
    }

    const dateToParams = {
        onDateChanged: value => setDateTo(value),
        date: dateTo
    }

    // methods


    

    // render

    return (
        <SafeAreaView>

            <Text>Tipo de investimento:</Text>
            <FieldInput onPress={ () => navigation.navigate('Picker', typeParams) } >
                <FieldText>{type.value}</FieldText>
                <Arrow stroke={grey99} width={14} height={14} />
            </FieldInput>
            
            <Text>Data do investimento:</Text>
            <Row>

                <FieldInput 
                    onPress={ () => navigation.navigate('DatePicker', dateFromParams) }
                    width={ (width/2) - 32 } 
                >
                    <FieldText>{formatDate(dateFrom)}</FieldText>
                    <Arrow stroke={grey99} width={14} height={14} />
                </FieldInput>

                <Text> a </Text>

                <FieldInput
                    onPress={ () => navigation.navigate('DatePicker', dateToParams) }
                    width={ (width/2) - 32 } 
                >
                    <FieldText>{formatDate(dateTo)}</FieldText>
                    <Arrow stroke={grey99} width={14} height={14} />
                </FieldInput>

            </Row>

            <Text>Score:</Text>
            <FieldInput onPress={ () => navigation.navigate('Picker', scoreParams) } >
                <FieldText>{score.text}</FieldText>
                <Arrow stroke={grey99} width={14} height={14} />
            </FieldInput>

            <Buttom>
                <ButtomText>APLICAR FILTRO</ButtomText>
            </Buttom>
            

        </SafeAreaView>
    )
}

export const HistoricFilter = {
    screen: HistoricFilterComponent,
    navigationOptions: {
        headerTitle: "Filtro"
    }
}
