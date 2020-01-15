import React, { useState, useEffect } from 'react'

import {
    DatePicker,
    Text,
    Button,
} from './styles'

import {
    Modal
} from '../../components'

import { withNavigation } from 'react-navigation'

export const DatePickerModalComponent = props => {


    const onDateChanged = props.navigation.getParam('onDateChanged', () => {})

    const date = props.navigation.getParam('date', new Date())
   
    return (
        <Modal height={ 290 } >

            <Button onPress={ () => props.navigation.goBack() } >
                <Text>Pronto</Text>
            </Button>

            <DatePicker 
                mode="date"
                date={ date }
                onDateChange={ selectedDate => onDateChanged(selectedDate) }
            />


        </Modal>

                



    )
}

export const DatePickerModal = withNavigation(DatePickerModalComponent)