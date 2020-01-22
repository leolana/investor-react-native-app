import React from 'react'


import {
    ScrollView,
    SafeAreaView
} from './styles'


import {
    Header,
    Body,
    Footer,
    Toolbar
} from './components'

import {
    Animated
} from 'react-native'

export const CompanyPage = props => {


    return (

        <>
            <SafeAreaView>

                <ScrollView>

                    <Header />

                    <Body />

                    <Footer />

                </ScrollView>
                
            </SafeAreaView>

    
            <Toolbar />
        </>

    )
}


export const Company = {
    screen: CompanyPage,
    navigationOptions: {
        headerTitle: "ID #00000"
    }
}