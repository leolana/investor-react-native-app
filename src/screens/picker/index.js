import React, { useState } from 'react'

import {
} from './styles'

import {
    Modal
} from '../../components'

import {
    PickerIOS,
    PickerAndroid
} from './components'

import { withNavigation } from 'react-navigation'

import { Platform } from 'react-native'

export const PickerModal = props => {

    // states

    const [ value, setValue ] = useState(props.navigation.getParam('value', null))

    // vars
    const data = props.navigation.getParam('data', null)
    const onValueChange = props.navigation.getParam('onValueChange', null)


    // methods


    const onChange = selectedValue => {

        setValue(selectedValue)
        
        onValueChange(selectedValue)
    }



    // render
    
   
    return (
        <Modal height={ 290 } >

            { (Platform.OS === 'ios') ? <PickerIOS  value={value} data={data} onChange={onChange} /> : null }

            { (Platform.OS === 'android') ? <PickerAndroid  value={value} data={data} onChange={onChange} /> : null }
            
        </Modal>

    )
}

export const Picker = {
    screen: withNavigation(PickerModal),
    navigationOptions: {
        gesturesEnabled: false,
        gestureResponseDistance: { vertical: 0 }
    }
}