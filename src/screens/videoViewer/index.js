import React from 'react'


import Video from 'react-native-video';

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')


export const VideoViewerComponent = props => {

    // props

    const { navigation } = props

    // vars
    const data = navigation.getParam('data', [])

    // methods

    const onError = () => {
        
        navigation.goBack()

        alert('Não foi possível carregar o vídeo no momento. Tente novamente mais tarde.')
    }

    // render

    return (
        <Video 
            source={{uri: data}}
            fullscreen={true}
            fullscreenOrientation="landscape"
            controls={true}
            onError={ onError }
            style={ { width, height } }
        
        />
    )
} 

export const VideoViewer = {
    screen: VideoViewerComponent,
}