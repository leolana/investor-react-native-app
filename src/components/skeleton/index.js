import React from 'react'

import {
    Skeleton,
    SkeletonGradiant
} from './styles'

import {
    skeletonBone,
    skeletonHighlight
} from '../../assets/colors'

import { Animated } from 'react-native'

const AnimatedGradiant = Animated.createAnimatedComponent(SkeletonGradiant)


export const SkeletonBone = props => {

    const styledGradiant = { 
        transform: [
            {translateX: props.translate.interpolate({
                inputRange: [0, 1],
                outputRange: [-props.width || -200, props.width || 200]
            })}
        ]
    }

    return (  
        <Skeleton 
            width={ props.width }
            height={ props.height }
            distance={ props.distance }
        
        >

            <AnimatedGradiant 
                style={ styledGradiant } 
                colors={ [skeletonBone, skeletonHighlight, skeletonBone] }
                start={ { x: 0, y: 1 } }
                end={ { x: 1, y: 1 } }

            />
        
        </Skeleton>
    )

}
