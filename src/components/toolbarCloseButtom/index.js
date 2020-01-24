import React from 'react'


import { tealish } from '../../assets/colors'

import { IconClose } from '../../assets/icons'

import { TouchableOpacity } from './styles'


export const ToolbarCloseButtom = ({ navigation }) => { 

    // Render

    return (
        <TouchableOpacity onPress={ () => navigation.dismiss() } >
            <IconClose stroke={tealish} />
        </TouchableOpacity>
    )
}
