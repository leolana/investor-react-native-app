import React from 'react'

import {
    Container
} from './styles'

import LottieView from 'lottie-react-native';

export const LoadingWithContainer = props => {

    return (
        <Container>
            <LottieView 
                source={require('../../assets/animations/loading.json')} 
                autoPlay 
                loop 
            />
        </Container>
    )
}

export const Loading = props => {

    return (
      
        <LottieView 
            source={require('../../assets/animations/loading.json')} 
            autoPlay 
            loop 
        />
     
    )
}