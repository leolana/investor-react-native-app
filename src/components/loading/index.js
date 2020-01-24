import React from 'react'

import {
    SafeAreaView,
    LoadingView
} from  './styles'

import { ActivityIndicator } from 'react-native'


export const Loading = props => {




    const renderLoading = () => (
        <LoadingView>
            <ActivityIndicator size="large" />
        </LoadingView>
    )

    return (
        <SafeAreaView>
            { (props.loading) ? renderLoading() : props.children }
        </SafeAreaView>
    )

}